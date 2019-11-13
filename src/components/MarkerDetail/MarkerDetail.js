"use strict";

import React from "react";
import {
	StyleSheet,
	View,
} from "react-native";

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	getInitialState(marker) {
		
	},

	render: function() {
        return (
            <View style={styles.viewStyle}>
                
            </View>
        );
	},
});

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
    },
    viewBox: {
    
    },
	textStyle: {
	
	},
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = MarkerDetail;