'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import NLdata from './res/NLdata.json';

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

var createReactClass = require('create-react-class');

const NLdata = require('./res/data.js/index.js');

var ARCarDemo = createReactClass({

    getInitialState() {
    return {
      texture: "white",
      playAnim: false,
      animateCar: false,
    }
  },

  render: function () {
    return (
      <ViroARScene>
        <ViroLightingEnvironment source={require('./res/3D/garage_1k.hdr')} />
        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./res/3D/jar.obj')}
            resources={[require('./res/3D/jar.mtl'),
            ]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            position={[0.05, 0, 0.05]}
            rotation={[0, 0, -90]}
            animation={{ name: "scaleCar", run: this.state.animateCar, }} />
          <ViroFlexView
            rotation={[-90, -90, 0]}
            height={0.03}
            width={0.05}
            style={styles.card}
          >
            <ViroFlexView
              style={styles.cardWrapper}
            >
              <ViroText
                textClipMode="None"
                text="HHHHHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhhHHHHHHhhh"
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
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateCar: true,
    })
  },
});

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
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
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroMaterials.createMaterials({
  white: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/3D/object_car_main_Base_Color.png'),
    metalnessTexture: require('./res/3D/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/3D/object_car_main_Roughness.png'),
  }
});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('./res/logo.jpg'),
    orientation: "Left",
    physicalWidth: 0.165 // real world width in meters
  },
  logo2: {
    source: require('./res/logo2.png'),
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

module.exports = ARCarDemo;