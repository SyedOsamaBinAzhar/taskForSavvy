import React from 'react'

//importing React Native Components
import { Text, View,StyleSheet, FlatList } from 'react-native'
import SingleItem from './SingleItem'

const ItemList = () => {

    return (
        <View>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>

        </View>
    )
}

export default ItemList
