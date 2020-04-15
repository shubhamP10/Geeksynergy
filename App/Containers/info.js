import React from 'react';
import {View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
    FlatList,
} from 'react-native';
import Style from './style';

export default class info extends React.Component
{
    render()
    {
        return(
            <View style = {Style.infoMain}>
                <Text style = {[Style.infoTxt, {fontSize : 20, color : 'steelblue'}]}>Company Name </Text>
                <Text style = {Style.infoTxt}>Geeksynergy Technologies Pvt Ltd</Text>
                <Text style = {[Style.infoTxt,{fontSize : 20, color : 'steelblue'}]}>Address </Text>
                <Text style = {Style.infoTxt}>Sanjayanagar, Bengaluru-56</Text>
                <Text style = {[Style.infoTxt, {fontSize : 20, color : 'steelblue'}]}>Phone </Text> 
                <Text style = {Style.infoTxt}>XXXXXXXXX09</Text>
                <Text style = {[Style.infoTxt, {fontSize : 20, color : 'steelblue'}]}>Email </Text>
                <Text style = {Style.infoTxt}>XXXXXX@gmail.com</Text>
            </View>
        );
    }
}