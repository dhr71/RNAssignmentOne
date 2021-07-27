import React from "react";
import { View, Text, StyleSheet, SafeAreaView  } from "react-native";

const Page4 = ()=> {
return(
    <SafeAreaView style = {styles.wrapper}>
        {/* <Text>Flex Box Text</Text> */}
        <View style = {styles.boxStyle}>
            <View style = { styles.box1}/>
           <View style = { styles.box1}/>
           <View style = { styles.box1}/>
           <View style = { styles.box1}/>
          <View style = { styles.box1}/>
          <View style = { styles.box1}/>
          <View style = { styles.box1}/>
          <View style = { styles.box1}/>
          <View style = { styles.box1}/>
          </View>
          <View>
          <View style = {styles.boxStyle2}>
          <View style = { styles.box2}/>
          </View>
          </View>
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
    wrapper: {
        
    
    },
    boxStyle:{
        flex:0,
        flexDirection:'row',
        flexWrap:'wrap',
       justifyContent:'center',
    //    backgroundColor:'blue',
 
        paddingTop:30,
        padding:10

    },
    boxStyle2:{
        flex:3,
        flexDirection:'row',
        flexWrap:'wrap',
       justifyContent:'flex-end',
    //    backgroundColor:'yellow',
        alignItems:'flex-end',
        paddingTop:450,
        padding:10

    },

    box1:{
        backgroundColor:'#ededed',
        justifyContent:'space-around',
        
   
   
        width:100,
        height:100,
        margin:3,
        
    },

    box2:{
        backgroundColor:'#ededed',
        
        width:80,
        height:80,
        position:'absolute',
        right:40,
        bottom:100,
        padding:10,
        
        alignItems:'flex-end'
        
        
    },
 
 

})

export default Page4;