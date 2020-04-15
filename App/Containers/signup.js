import React from 'react';
// import ModalDropdown from 'react-native-modal-dropdown';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,

} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Style from './style';
export default class signup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : '',
            email : '',
            phone : '',
            errorMsg : false,
            errorText : '',
            getValue : '',
        };
    }
    signup()
    {
        if( this.state.username == '' || this.state.password == '' || this.state.email == '' || this.state.phone =='')
        {
            this.setState({errorMsg:true,errorText:'Please fill all fields'});
            return;
        } 
        console.log("Later ops");
        let userInfo = {
            username : this.state.username,
            password : this.state.password,
            email : this.state.email,
            phone : this.state.phone
        };
        AsyncStorage.setItem('username', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        AsyncStorage.setItem('email', this.state.email);
        AsyncStorage.setItem('phone', this.state.phone);  
        Alert.alert("Message", "Data Saved", [
            { text: "OK", onPress: () => { 
              this.props.navigation.navigate('Home');
            }}    
          ])
    }

    render()
    {
        console.log("Inside Signup Render");
        return(
            <View style = {Style.container}>
                <View style = {Style.inpFld}>
                    <View style = {Style.title}>
                    <Text style = {Style.titleMain}>SIGN UP</Text>
                    </View>
                    <TextInput placeholder="UserName" 
                    style={Style.inpUser} 
                    autoCapitalize='none'
                    onChangeText={username => this.setState({username, errorMsg: false, errorText: ''})}
                    value={this.state.username}
                    />
                    <TextInput secureTextEntry={true} 
                    autoCorrect={false} 
                    placeholder='password'
                    autoCapitalize='none' 
                    style={Style.inpPwd}
                    onChangeText={password => this.setState({password, errorMsg: false, errorText: ''})}
                    value={this.state.password}
                    />
                    <TextInput placeholder='Email' 
                    style={Style.inpMail}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({email, errorMsg: false, errorText: ''})}
                    value={this.state.email}
                    />
                    <TextInput placeholder='Phone Number' 
                    style={Style.inpPhone}
                    onChangeText={phone => this.setState({phone, errorMsg: false, errorText: ''})}
                    value={this.state.phone}
                    /> 
                    <TouchableOpacity
                    style={Style.btn}
                    onPress = {() => {this.signup()}}>
                        <Text style={{color:'#fff'}}>SIGN UP</Text>
                    </TouchableOpacity>
                    {this.state.errorMsg ? <Text style = {{color :'red'}}>{this.state.errorText}</Text> :
                                      <Text></Text>}
                </View>
                <View style={Style.txt}>
                    <Text>Already Have an Account?</Text><TouchableOpacity onPress = {() => this.props.navigation.navigate('Home')}><Text style={{color:'blue'}}> Login</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}