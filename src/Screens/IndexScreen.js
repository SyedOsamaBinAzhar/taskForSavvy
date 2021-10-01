import React from 'react'
import { useState,useEffect } from 'react'

//importing React Native Components
import { Text, View,StyleSheet,FlatList,ScrollView,Image,SafeAreaView,Platform,StatusBar,TouchableOpacity} from 'react-native'

//importing custom components
import ItemList from "../Components/IndexScreenComponents/ItemList"

//importing icon
import { Fontisto } from '@expo/vector-icons'; 

import axios from "axios";

import Header from "../Components/IndexScreenComponents/Header"

const IndexScreen = ({navigation}) => {
    const [users,setUsers] = useState([])

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
            <View style = {{height: "10%" , width: "100%"}}><Header/></View>
        
          
            <View style = {styles.userStylingContainer}>
                <FlatList
                    data = {users}
                    keyExtractor = {(user) => user.name}
                    renderItem = {({item}) => {
                    
        
                    return <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('Single',{ id : item.id,name : item.name,email:item.email})}>
                        <View style = {styles.userListStyling}>
                            <View style={styles.userImageContainer}><Image style={styles.userImage} source={require("../../assets/picture.png")}/></View>
                            <View style={{marginLeft: 20}}>
                            <Text style={{fontSize:15}}>{item.name}</Text>
                            <Text style={{fontSize:15}}>{item.email}</Text>
                            </View>
                            <Fontisto name="more-v-a" size={28} color="black" style={{position:"absolute",right:20,color: "rgb(192,192,192)"}} />
                        </View>
                        </TouchableOpacity>
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
        backgroundColor: "#E0B0FF",
        padding: 20
    },
    userStylingContainer : {
        backgroundColor: "white",
        borderRadius: 30,
        padding:10
    },
    userListStyling : {
        width : "100%",
        height: 100,
        backgroundColor: "white",
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
        height:"100%",width:"100%",borderRadius : 50
    }
})


export default IndexScreen
