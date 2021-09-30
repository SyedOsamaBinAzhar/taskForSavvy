import React from 'react'
import { useState,useEffect } from 'react'

//importing React Native Components
import { Text, View,StyleSheet,FlatList,ScrollView,Image } from 'react-native'

//importing custom components
import ItemList from "../Components/IndexScreenComponents/ItemList"

//importing icon
import { Fontisto } from '@expo/vector-icons'; 

//importing fetchUser function


import axios from "axios";


const IndexScreen = () => {
    const [users,setUsers] = useState([
        // {name : "John", email: "john@gmail.com"},
        // {name : "Mike", email: "Mike@gmail.com"},
        // {name : "micheal", email: "micheal@gmail.com"},
        // {name : "CLark", email: "CLark@gmail.com"},
    ])



    useEffect(async() => {
        var users = await getUser();
         users.forEach(async(user) => {
            const userDetails = {
                name : user.login,
                email : `${user.login}@gmail.com`,
                id : user.id
            }
            setUsers((prevState) => ([
                ...prevState,userDetails
               ]))
           
        });

    }, [])

    var getUser = async() => {
        try {
        const response = await axios.get('https://api.github.com/users');
        return response.data;
        }catch(error){
            console.log(error)
        }
    }


    return (
        <View style = {styles.root}>
            <View style = {{height: "10%" , width: "100%",backgroundColor: "orange"}}></View>
            
            <View style = {styles.userStylingContainer}>
                <FlatList
                    data = {users}
                    keyExtractor = {(user) => user.name}
                    renderItem = {({item}) => {
                    
        
                    return <ScrollView>
                        {console.log("users" + users)}
                        <View style = {styles.userListStyling}>
                            <View style={styles.userImageContainer}><Image style={styles.userImage} source={require("../../assets/osama.png")}/></View>
                            <View>
                            <Text style={{fontSize:15}}>{item.name}</Text>
                            <Text style={{fontSize:15}}>{item.email}</Text>

                            </View>
                            <Fontisto name="more-v-a" size={28} color="black" style={{position:"absolute",right:20}} />
                        </View>
                    </ScrollView>
                    }}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        height: "100%",
        width : "100%",
        backgroundColor: "red",
        padding: 10
    },
    userStylingContainer : {
        marginTop: 10,
        backgroundColor: "brown",
        borderRadius: 30,
        padding:10
    },
    userListStyling : {
        width : "100%",
        height: 100,
        backgroundColor: "pink",
        borderWidth: 2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        position:"relative"
    },
    userImageContainer : {
        height:60,width:60,backgroundColor:"purple",borderRadius:50,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:20
    },
    userImage : {
        height:"80%",width:"80%"
    }
})


export default IndexScreen
