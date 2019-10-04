'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ARData from './res/ARData.json';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
  ViroText,
  ViroConstants,
  ViroFlexView,
  ViroARSceneNavigator
} from 'react-viro';

const createReactClass = require('create-react-class');

const PNLAR = createReactClass({

  allMarkers: ["1"],

  getInitialState() {
    const baseState =
    {
      texture: 'white',
      playAnim: false,
      animateObject: false,
      isShow: false
    }
    const varyState = {}
    this.allMarkers.forEach((marker) => {
      varyState['isShow' + marker] = false;
    })
    return { ...baseState, ...varyState }
  },

  render: function () {

    return (
      <ViroARScene>
        {this.allMarkers.map((marker) => (
          <ViroARImageMarker target={marker} onAnchorFound={() => this._onAnchorFound(marker)} pauseUpdates={this.state.pauseUpdates}>
            <ViroFlexView
              rotation={[-90, -90, 0]}
              transformBehaviors={["billboard"]}
              style={styles.card}
              visible={this.state["isShow" + marker]}
              height={0.3}
              width={0.5}
            >
              <ViroFlexView
                style={styles.cardWrapper}
              >
                <ViroText
                  textClipMode="None"
                  text={String(ARData[marker - 1].value[0].detail)}
                  scale={ARData[marker - 1].scale}
                  position={Array.from([
                    (parseFloat(ARData[marker - 1].textPosition[0]) + parseFloat(ARData[marker - 1].corePosition[0])),
                    (parseFloat(ARData[marker - 1].textPosition[1]) + parseFloat(ARData[marker - 1].corePosition[1])),
                    (parseFloat(ARData[marker - 1].textPosition[2]) + parseFloat(ARData[marker - 1].corePosition[2]))
                  ])}
                  style={styles.textStyle}
                />
              </ViroFlexView>
            </ViroFlexView>
            <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0, -1, 0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7}
            />

          </ViroARImageMarker>
        ))}

      </ViroARScene>
    );
  },
  _onAnchorFound(marker) {

    // Show only when isShow is all false 
    let allNotShow = true;
    console.log(marker);
    this.allMarkers.forEach((marker) => {

      if (this.state['isShow' + marker]) {
        console.log("all not show false ")
        allNotShow = false;
      }
    });
    if (allNotShow) {
      let stateForSet = { animateObject: true };
      stateForSet["isShow" + marker] = true;
      this.setState(stateForSet);
    }
  },
});

ViroMaterials.createMaterials({
  white: {
    shininess: 2.0,
    lightingModel: "PBR",
  }
});

ViroARTrackingTargets.createTargets({
  "1": {
    source: require('./res/1.jpeg'),
    orientation: "Left",
    physicalWidth: ARData[0].physicalWidth // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleObject: {
    properties: { scaleX: .002, scaleY: .002, scaleZ: .002, },
    duration: 5000, easing: "bounce"
  },
});

const styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: "Thonburi, Pingfang HK",
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  }
});

module.exports = PNLAR;