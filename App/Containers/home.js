import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Style from './style';
export default class signup extends React.Component
{
    componentDidMount()
    {
        AsyncStorage.getItem('username').then((value) => this.setState({uname : value}));
        AsyncStorage.getItem('password').then((value) => this.setState({pass : value}));

    }
    constructor(props)
    {
        super(props);
        this.state = {
            uname : '',
            pass : '',
            username : '',
            password : '',
            email : '',
            phone : '',
            errorMsg : false,
            errorText : '',
            getValue : '',
        };
    }
    login()
    {
        console.log("inside login");
        if( this.state.username == '' || this.state.password == '')
        {
            this.setState({errorMsg:true,errorText:'Please fill all fields'});
            return;
        } 
        const {password , username} = this.state;
        const user = this.state.uname;
        const pass = this.state.pass;
        console.log("User : "+user);
        console.log("Pass : "+pass);
        if(username != user && password != pass)
        {
            alert("Account Not Found");
        }
        else
        {
            AsyncStorage.setItem('isLoggedIn','1');
            this.props.navigation.navigate('Show');
        }
    }
    render()
    {
        return(
            <View style = {Style.container}>
                <View style = {Style.inpFld}>
                    <View style = {Style.title}>
                    <Text style = {Style.titleMain}>Greeksynergy Task</Text>
                    </View>
                    <TextInput placeholder="UserName" 
                    style={Style.inpUser}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={username => this.setState({username, errorMsg: false, errorText: ''})}
                    value={this.state.username}
                    />
                    <TextInput secureTextEntry={true} 
                    autoCorrect={false} 
                    placeholder='password'
                    autoCapitalize = 'none' 
                    style={Style.inpPwd}
                    onChangeText={password => this.setState({password, errorMsg: false, errorText: ''})}
                    value={this.state.password}
                    />
                    {this.state.errorMsg ? <Text style = {{color :'red'}}>{this.state.errorText}</Text> :
                                      <Text></Text>}
                    <TouchableOpacity
                    style={Style.btn}
                    onPress = {() =>{this.login()}}
                    >
                        <Text style={{color:'#fff'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.txt}>
                    <Text>New User?</Text><TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')}><Text style={{color:'blue'}}> Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}