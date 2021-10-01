import React, { useState , useEffect} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

//importing icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SingleUser = ({navigation}) => {
    const [user,setUser] =useState({})

    useEffect(() => {
    console.log()
    const id = navigation.getParam('id');
    const name = navigation.getParam('name');
    const email = navigation.getParam('email');
    const userDetails = {
        name,
        id,
        email,
        facebook: `facebook.com/${name}`,
        behance: `behance.com/${name}`,
        twitter: `@${name}`,
        contact : 123456789,
        followers: Math.floor(Math.random() * 1000),
        following: Math.floor(Math.random() * 1000),
    }
    setUser(userDetails)
    }, [])



    return (
        <View style = {styles.root}>
            
            <View style = {styles.blueContainerStyling}>

                <View style = {styles.headerStyling}>
                <TouchableOpacity onPress = {() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={28} color="black" style = {{marginLeft : 20,marginTop:10,color:"white"}}/>
                </TouchableOpacity>
                <Text style = {{fontSize : 20,fontWeight:"bold",marginTop:10,color:"white"}}>Profile</Text>
                <Ionicons name="settings" size={28} color="black" style = {{marginRight : 20,marginTop:10,color:"white"}} />
                </View>


                <View style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <View style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <View style={styles.imageContainer}><Image style={styles.userImage} source={require("../../assets/picture.png")}/></View>
                    <Text style = {{fontSize:20,fontWeight: "bold",color:"white",marginTop:5}}>{user.name}</Text>
                    <Text style = {{fontSize:15,fontWeight: "normal",color:"white"}}>Designer And Developer</Text>

                </View>

                
                <View style = {{display:"flex",flexDirection:"row",marginTop : 20}}>
                    <Text style = {{color:"white",paddingRight:10}}><Text style = {{fontSize:17,fontWeight: "bold"}}>{user.following}</Text> Followers</Text>
                    <Text style = {{color:"white"}}><Text style = {{fontSize:17,fontWeight: "bold"}}>{user.followers}</Text> Following</Text>
                </View>
                </View>


            </View>

            <View style = {styles.listContainer}>
                <View style = {styles.eachRow}>
                    <MaterialCommunityIcons name="email" size={30} color="black" style = {{marginLeft:20,color:"grey"}} />
                    <View style = {{display:"flex",flexDirection:"column",marginLeft :20}}>
                        <Text style = {{color:"grey",marginBottom:5}}>Email</Text>
                        <Text>{user.email}</Text>
                    </View>
                </View>
                
                <View style = {styles.eachRow}>
                <Entypo name="mobile" size={24} color="black" style = {{marginLeft:20,color:"grey"}} />  
                    <View style = {{display:"flex",flexDirection:"column",marginLeft :20}}>
                        <Text style = {{color:"grey",marginBottom:5}}>Mobile</Text>
                        <Text>{user.contact}</Text>
                    </View>
                </View>
                
                
                <View style = {styles.eachRow}>
                <Entypo name="facebook-with-circle" size={24} color="black" style = {{marginLeft:20,color:"grey"}}/>
                    <View style = {{display:"flex",flexDirection:"column",marginLeft :20}}>
                        <Text style = {{color:"grey",marginBottom:5}}>Facebook</Text>
                        <Text>{user.facebook}</Text>
                    </View>
                </View>
               
               
                <View style = {styles.eachRow}>
                <AntDesign name="behance-square" size={24} color="black" style = {{marginLeft:20,color:"grey"}}/>
                    <View style = {{display:"flex",flexDirection:"column",marginLeft :20}}>
                        <Text style = {{color:"grey",marginBottom:5}}>Email</Text>
                        <Text>{user.behance}</Text>
                    </View>
                </View>
                
                
                <View style = {styles.eachRow}>
                <Entypo name="twitter-with-circle" size={24} color="black" style = {{marginLeft:20,color:"grey"}}/>
                    <View style = {{display:"flex",flexDirection:"column",marginLeft :20}}>
                        <Text style = {{color:"grey",marginBottom:5}}>Email</Text>
                        <Text>{user.twitter}</Text>
                    </View>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        height:"100%",
        width: "100%",
        backgroundColor:"white"
    },
    blueContainerStyling : {
        backgroundColor: "blue",
        height : "35%",
        width : "100%",
        borderRadius: 50,
        position : "relative",
    },
    headerStyling : {
        width : "100%",
        height : "30%",
        display:"flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent:"space-between",
    },
    imageContainer : {
        height: 100,
        width : 100,
        borderRadius: 50,
        display:"flex",
        alignItems:"center",
        borderColor:"white",
        borderWidth : 3,
    },
    userImage : {
        height : "100%",
        width : "100%",
        borderRadius: 50
    },
    listContainer : {
        height : "65%",
        width:"100%",
        backgroundColor: "purple"
    },
    eachRow : {
        height:"20%",
        width:"100%",
        borderWidth:2,
        borderColor: "lightgrey",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "white"
    }
})


export default SingleUser
