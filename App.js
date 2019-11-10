"use strict";

import React, { Component } from "react";
import {
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SegmentedControlIOS,
} from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";
import PNLAR, { Testing } from "./src/components/PNLAR/PNLAR";
import ARData from "./assets/ARData.json";
import { AppRegistry } from "react-native";
import { ViroARSceneNavigator } from "react-viro";

var createReactClass = require("create-react-class");
/*
 * TODO: Add your API key below!!
 */
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";
/*
var arScenes = {
  'PNLAR': require('./js/PNLAR/PNLAR.js'),
}
*/

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
	getInitialState(marker) {
		const detailState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
		};
		return {
			...detailState,
		};
	},

	render: function() {
		if (showARScene) {
			return (
				<View style={styles.viewStyle}>
					<ViroARSceneNavigator
						initialScene={{ scene: PNLAR }}
						apiKey={apiKey}
						viroAppProps={{ onAnchored: this.onAnchored }}
					/>
            <View style={styles.viewBox}>
              <Text style={styles.textStyle}>
                  Scan The Object
              </Text>
            </View>
				</View>
			);
		}
	},
	onAnchored(marker) {
		this.setState({
			textLangTitle: String(ARData[marker - 1].value[0].title),
			textLangDetail: String(ARData[marker - 1].value[0].detail),
			tapJp: true,
		}); 
	},
});

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
  },
  viewBox: {
    backgroundColor: "black",
  },
	textStyle: {
		color: "white",
		fontSize: 35,
		fontFamily: "Thonburi",
		lineHeight: 39,
    textAlign: "center",
    paddingBottom: 30,
	},
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;