/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View, SegmentedControlIOS } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import PNLAR, { Testing } from './js/PNLAR/PNLAR';
import ARData from './js/PNLAR/res/ARData.json';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

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
    const detailState =
    {
      textLangTitle: '',
      textLangDetail: 'Tap to select the laguage',
    }
    return {
      ...detailState
    }
  },

  render: function () {
    if (showARScene) {
      return (
        <View style={styles.viewStyle}>
          <SwipeUpDown
            itemMini={<Text style={styles.textStyle}>{this.state.textLangTitle}</Text>}// Pass props component when show full
            itemFull={<Text style={styles.textStyle}>{this.state.textLangDetail}</Text>}// Pass props component when show full

            onShowMini={() => console.log('mini')}
            onShowFull={() => console.log('full')}
            onMoveDown={() => console.log('down')}
            onMoveUp={() => console.log('up')}
            animation="easeInEaseOut"
            swipeHeight={60} // Default 60
            disablePressToShow={false} // Press item mini to show full
            style={{
              backgroundColor: 'white',
              zIndex: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderTopWidth: 5,
              borderLeftWidth: 5,
              borderRightWidth: 5,
              borderColor: 'black',
            }} // style for swipe
          />
          <ViroARSceneNavigator
            initialScene={{ scene: PNLAR }}
            apiKey={apiKey}
            viroAppProps={{ onAnchored: this.onAnchored }}
          />
        </View>

      );
    }
  },
  onAnchored(marker) {
    this.setState({
      textLangTitle: String(ARData[marker - 1].value[0].title),
      textLangDetail: String(ARData[marker - 1].value[0].detail),
      tapJp: true
    })
  },
})

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: "#424242",
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: "Thonburi",
    lineHeight: 30,
    textAlign: "left"
  }
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;