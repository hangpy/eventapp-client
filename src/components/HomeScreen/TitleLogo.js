/** 
 * TitleLogo
 * @author 
 * created on 2019-01-05
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';

/* TODO: logo image will be inserted */

const TitleLogo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>쿠디!</Text>
        </View>
    )
};

export default TitleLogo;


const styles = StyleSheet.create({
	container: {
	    flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        color: '#000',
	    fontSize: 22,
        fontFamily: 'NanumSquareRoundB'
    }
});