import React from 'react';
import {View,
    Text,
    TouchableOpacity,
    ScrollView,
    Linking,
} from 'react-native';
import Loader from '../Components/Loader';
import NetInfo from "@react-native-community/netinfo";

import Style from "./style";
import AsyncStorage from '@react-native-community/async-storage';

export default class show extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            loading : '',
            data : [],
        }
    }
    componentDidMount() 
    {
        this.checkNetwork();
    }
    checkNetwork() 
    {
        NetInfo.fetch().then(state => {
          console.log("Connection type", state.type);
          console.log("Is connected?", state.isConnected);
          if(!(state.isConnected))
          {
            alert("No Internet Connection. Unable to connect to backend server.");
          } else {
            this.makeRemoteRequest();
          } 
        });
    }
    makeRemoteRequest = async () => 
{

    try {
        let param = {
            "category": "movies",
            "language": "telugu",
            "genre": "all",
            "sort": "voting"
        };
        
        const url = 'https://hoblist.com/movieList';
        this.setState({loading: true});
        fetch(url, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(param)
          })
            .then((response) => {
              return response.json();
            })
             .then((response) => {
               console.log(response);
              this.setState({
                data: response, 
                loading: false
              });
              console.log("Data : "+this.state.data.queryParam.category);
              })
            .catch(error => {
              this.setState({ error, loading: false});
            });
    }
    catch (error) {
        // Error retrieving data
        this.setState({loading: false});       
        console.log("Error", error.stack);
        console.log("Error", error.name);
        console.log("Error", error.message);      
      }
}
renderNoItem()
{
  return(
    <View key={'rowBG' + 100} style={Style.rowBG}>
      <Text>No Data</Text>
    </View>
  );
}
renderItem(Item)
{
  console.log("Inside Render Item... ");
  return(
    <View style={{alignItems :'center',}}>
      <View key={'rowBG' + 100} style={Style.rowBG}>
        <Text>This is JSON Parsed Data</Text>
        <Text style={{marginTop:15}}>Category : {this.state.data.queryParam.category}</Text>
        <Text>Genre : {this.state.data.queryParam.genre}</Text>
        <Text>Language : {this.state.data.queryParam.language}</Text>
        <Text>Sort By : {this.state.data.queryParam.sort}</Text>

        <Text style={{marginTop:15,color:'red'}}>Data Not Available</Text>
      </View>
    </View>
  );
}
logout()
{
  AsyncStorage.setItem('isLoggedIn','0');
  this.props.navigation.navigate('Home');
} 
    render()
    {
        console.log("inside Show Page");
        let ItemData = '';
        if(this.state.data.length == 0)
        {
          ItemData = this.renderNoItem();
        }
        else
        {
          ItemData = this.renderItem(this.state.data);
        }
        
        return(
              <View style ={Style.container2}>
                <Loader loading={this.state.loading}/>
                <View style={Style.menu}>
                <TouchableOpacity style={Style.menuItem} onPress = {() => this.props.navigation.navigate('Info')}>
                    <Text style={Style.menuTxt}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.menuItem} onPress = {() => Linking.openURL('https://hoblist.com')}>
                    <Text style={Style.menuTxt}>hoblist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.menuItem} onPress = {() => this.logout()}>
                    <Text style={Style.menuTxt}>Logout</Text>
                </TouchableOpacity>
                </View>
                <ScrollView style={Style.scroll}>
                  {ItemData}
                </ScrollView>
              </View>
        );
    }
}