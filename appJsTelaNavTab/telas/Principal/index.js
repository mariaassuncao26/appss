import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Principal({navigation}){
    return(
        <View style={styles.container}>
            <Text> Home </Text>
            <Button
                title= "Home"
                onPress={() => navigation.navigate("Home")}
            >

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})