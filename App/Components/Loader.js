import {ActivityIndicator, Modal, Text, View, StyleSheet, TouchableWithoutFeedback, Button} from "react-native";
import React, {PureComponent} from 'react';


class Loader extends PureComponent {

    submithandler() {
        console.log("Button pressed");
        this.setState({loading: false});
    }

    render() {
        return <Modal
            visible={this.props.loading}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {
                return}}>
        
            <View style={styles.modalBackground}>

                <View style={styles.activityIndicatorWrapper}>

                    <ActivityIndicator
                        animating={true}/>

                </View>

            </View>


        </Modal>;
    }


}

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 50,
      width: 50,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
  
  });
  
export default Loader