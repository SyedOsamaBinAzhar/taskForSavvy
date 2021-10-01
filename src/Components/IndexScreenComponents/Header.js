import React from 'react'
import { Text, View,StyleSheet,FlatList,ScrollView,Image,SafeAreaView,StatusBar } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    return (
        
        <View style = {{height:"100%",width:"100%",position:"relative",display:"flex",justifyContent:"center",backgroundColor: "#E0B0FF",}}>
            <View style = {{position:"absolute",display:"flex",flexDirection:"row",right:10}}>
            <FontAwesome name="search" size={28} color="black" style={{marginRight:20}} />
            <Ionicons name="filter" size={28} color="black" />
            </View>
            <View style = {{position:"absolute",left: 10,display:"flex",flexDirection:"row"}}>
            <FontAwesome5 name="grip-lines" size={28} color="black" />
            <Text style={{marginLeft:20,fontWeight:"bold",fontSize:25}}>Usuarios</Text>
            </View>
            
        </View>
    )
}

export default Header
