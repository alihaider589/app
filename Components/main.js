import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left,Item,Picker, Right ,Fab,Icon,Button, Form,Footer,FooterTab} from "native-base";
import {StyleSheet,TouchableOpacity,View,Image,ScrollView,ImageBackground} from 'react-native'






export default class Main extends Component {
    constructor(props) {
        super(props)
          this.state = {
            active: false
            
          };
          this.state = {
            selected2: undefined
         
         
        
        
          }
        
        }
  render() {
    return (
<Container>
{/* <Header  style={styles.header}> */}
{/* <Text>

Alpha Store

</Text> */}

{/* </Header> */}
<ImageBackground style={{height:'90%',width:'100%'}} source={require('./images/ali.jpg')}>

<View>


<View style={{flexDirection:'row',flex:1,marginTop:'110%',marginLeft: '80%',}} >


<View  style={{flexDirection:'row',flexGrow: 1,}}>
          <Fab 
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>


          <Button > 

        <Icon name='home' />
    </Button>
        </View>


      
</View>


</View>
<Footer style={styles.footer} >
      

<Form style={{flexDirection:'row'}}>
            <Item picker style={{marginLeft:250,marginBottom:20}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 100 }}
                placeholder="color"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="Red" value="key0" />
                <Picker.Item label="White" value="key1" />
                <Picker.Item label="Black" value="key2" />
              </Picker>



              <Item picker style={{marginLeft:10}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 100 }}
                placeholder="color"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="Size" value="key0" />
                <Picker.Item label="10" value="key1" />
                <Picker.Item label="20" value="key2" />
              </Picker>
              </Item>


</Item>
</Form>
<Button style={{marginRight:240,marginBottom:20}}>

  <Text style={{fontSize:10}}>Add to Cart</Text>
</Button>

        </Footer>

</ImageBackground>
</Container>

    );
  }
}


styles = StyleSheet.create({
header:{
backgroundColor:'rgb(176, 176, 176)'


},
footer:{
    backgroundColor:'rgba(176, 176, 176,0.4)'
    ,marginTop:130
    
    }


})