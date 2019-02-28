import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right } from "native-base";
import {StyleSheet,TouchableOpacity,View,Image,ScrollView} from 'react-native'






export default class Home extends Component {
  render() {
    return (

    <ScrollView>
      <Header    style={styles.header} >
      
      <Text>Alpha Store</Text>
      </Header>


<View style={{flexDirection:'row',flex:1, alignItems: 'center',}}>

<View style={{width:'50%',marginTop:20,marginLeft:10}}>


<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 1 </Text>
 
</View>
<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:20}}>
<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 2 </Text>


</View>
</View>







<View style={{flexDirection:'row'}}>

<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>


<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 3 </Text>

</View>
<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>
<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 4 </Text>

</View>
</View>





<View style={{flexDirection:'row'}}>

<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>


<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 5 </Text>
 
</View>
<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>

<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>

<Text style={{marginLeft:'50%'}}>Item 6 </Text>

</View>
</View>




<View style={{flexDirection:'row'}}>

<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>


<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 7 </Text>
 
</View>
<View style={{width:'50%',marginTop:20,marginLeft:10,marginRight:10}}>
<Image style={{height:400,width:'100%'}} source = {require('./images/ali.jpg')}/>
<Text style={{marginLeft:'50%'}}>Item 8 </Text>


</View>
</View>



    </ScrollView>
    );
  }
}


styles = StyleSheet.create({
header:{
backgroundColor:'rgb(176, 176, 176)'


}


})