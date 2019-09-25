'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

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
  ViroFlexView
} from 'react-viro';

const createReactClass = require('create-react-class');

const ARCarDemo = createReactClass({

  allMarkers : ["logo", "logo2", "logo3"],

  getInitialState() {
    const baseState = 
      {
        texture: 'white',
        playAnim: false,
        animateCar: false,
        isShow: false
      }
    const varyState = {}
    this.allMarkers.forEach( (marker) => {
      varyState['isShow' + marker] = false;
     })
    return {...baseState, ...varyState}
  },

  render: function () {
   

    return (
      <ViroARScene>
        { this.allMarkers.map( (marker) => (
          <ViroARImageMarker target={marker} onAnchorFound={ () => this._onAnchorFound(marker)} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./res/3D/jar.obj')}
            resources={[require('./res/3D/jar.mtl'),]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            position={[0.05, 0, 0.05]}
            rotation={[0, 0, -90]}
            visible={ this.state["isShow" + marker]}
            animation={{ name: "scaleCar", run: this.state.animateCar, }} />
          <ViroFlexView
            rotation={[-90, -90, 0]}
            height={0.03}
            width={0.05}
            style={styles.card}
            visible={ this.state["isShow" + marker]}
          >
            <ViroFlexView
              style={styles.cardWrapper}
            >
              <ViroText
                textClipMode="None"
                text={String(ARData.value[0].detail)}
                scale={[.015, .015, .015]}
                position={[-0.05, 0, 0.05]}
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

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5} height={2.5}
            arShadowReceiver={true}
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
    this.allMarkers.forEach( (marker) => {

       if(this.state['isShow' + marker] ){
         console.log("all not show false ")
        allNotShow = false;
       }
     });
    if(allNotShow){
      let stateForSet = { animateCar: true};
      stateForSet[ "isShow"+marker] = true;
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
  logo: {
    source: require('./res/Test3.jpg'),
    orientation: "Left",
    physicalWidth: 0.165 // real world width in meters
  },
  logo2: {
    source: require('./res/logo2.png'),
    orientation: "Left",
    physicalWidth: 0.165 // real world width in meters
  },
  logo3: {
    source: require('./res/logo.png'),
    orientation: "Left",
    physicalWidth: 0.165 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleCar: {
    properties: { scaleX: .002, scaleY: .002, scaleZ: .002, },
    duration: 5000, easing: "bounce"
  },
});

const styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: "Thonburi, Pingfang HK",
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
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
  },
});

module.exports = ARCarDemo;