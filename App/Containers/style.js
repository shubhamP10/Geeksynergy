import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const style = StyleSheet.create ({
    container : {
        alignItems : 'center',
        backgroundColor : '#fff'

    },
    container2 : {
        backgroundColor : '#fff'

    },
    title :
    {
        alignItems :'center',
    },
    postTitle: {
        fontWeight : '500',
        color: '#354287',
        fontFamily : 'times',
        fontSize :  height* 0.035,
        marginLeft: width * 0.04,
      },
      rowBG:{
        alignItems : 'center',
        justifyContent : 'center',
        height: height * 0.45,
        width : width * 0.9,
        backgroundColor : '#fffcff',
        elevation : 5,
        marginTop : height * 0.01,
        marginBottom: height * 0.01,
        borderRadius : height * 0.015,
        
     },
    titleMain : 
    {
        fontSize : height * 0.03,
        fontWeight : 'bold',
        color : 'steelblue',
        fontFamily : 'times',
    },
    inpFld :
    {
        marginTop : height * 0.05,
        width : width * 0.8,
    },
    inpUser : 
    {
        marginTop : height * 0.05,
        borderWidth : 0.5,
        borderColor : '#000',
        padding : width *0.02,
        borderRadius : width * 0.015,
    },
    inpPwd : 
    {
        marginTop : height * 0.01,
        borderWidth : 0.5,
        borderColor : '#000',
        padding : width *0.02,
        borderRadius : width * 0.015,
    },
    inpMail : 
    {
        marginTop : height * 0.01,
        borderWidth : 0.5,
        borderColor : '#000',
        padding : width *0.02,
        borderRadius : width * 0.015,
    },
    inpPhone : 
    {
        marginTop : height * 0.01,
        borderWidth : 0.5,
        borderColor : '#000',
        padding : width *0.02,
        borderRadius : width * 0.015,
    },
    btn :
    {
        width : width * 0.8,
        backgroundColor : 'green',
        height : height * 0.06,
        marginTop : height * 0.03,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : width * 0.015,
        elevation : 3,
    },
    txt :
    {
        marginTop : height * 0.02,
        flexDirection : 'row',
    },
    infoMain : 
    {
        alignItems : 'center',
        marginTop : height * 0.1,
        flexDirection : 'column',
        justifyContent : 'space-evenly',
    },
    infoTxt :
    {
        fontFamily : 'times',
        fontWeight : 'bold',
        marginTop : height * 0.02,
    },
     postStyle:
    {
      elevation : 2,
      shadowColor: 'gray',
      borderBottomColor: 'gray',
      marginVertical: -10,
      borderRadius : 3,
    },
    menu:
    {
        backgroundColor : '#fff',
        height: height * 0.05,
        flexDirection : 'row',
        padding : width * 0.02,
        elevation : 3,
    },
    menuItem :
    {
        alignItems : "center",
        justifyContent : 'center',
        marginLeft: width * 0.02,
        height : height * 0.035,
        width : width * 0.15,
        elevation :3,
    },
    menuTxt :
    {
        color : 'blue', fontWeight :'bold',fontSize : 18,
    },
    scroll: 
    {
        height : height * 0.9,
    },


});
export default style;