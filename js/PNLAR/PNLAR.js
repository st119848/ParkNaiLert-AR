'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import ARData from './res/ARData.json';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  ViroImage,
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

  allMarkers: ["10"],

  getInitialState(marker) {
    const baseState =
    {
      texture: 'white',
      textLangTitle: '',
      textLangDetail: 'Tap to select the laguage',
      marker: "test",
      playAnim: false,
      animateObject: false,
      isShow: false,
      tapTh: false,
      tapEn: false,
      tapCh: false,
      tapJp: false,
    }
    const varyState = {}
    this.allMarkers.forEach((marker) => {
      varyState['isShow' + marker] = false;
    })
    return {
      ...baseState,
      ...varyState
    }
  },

  render: function () {

    return (
      
      <ViroARScene>

        {this.allMarkers.map((marker, index) => (
          <ViroARImageMarker target={marker} onAnchorFound={() => this.props.sceneNavigator.viroAppProps.onAnchored(marker)} key={index} pauseUpdates={this.state.pauseUpdates}>

            <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboard"]} animation={{ name: this.state.animName, run: this.state.playAnim, }}>
              <ViroImage
                source={require('./res/thflag.jpg')}
                width={0.15}
                height={0.10}
                position={[0.3, .1, 0]}
                onClick={() => this._selectTh(marker)}
                animation={{ name: "tapAnimation", run: this.state.tapTh, onFinish: this._animateFinished }}
                shadowCastingBitMask={0} />

              <ViroImage
                source={require('./res/usflag.png')}
                width={0.15}
                height={0.10}
                position={[0.3, 0, 0]}
                onClick={() => this._selectEn(marker)}
                animation={{ name: "tapAnimation", run: this.state.tapEn, onFinish: this._animateFinished }}
                shadowCastingBitMask={0} />

              <ViroImage
                source={require('./res/chflag.png')}
                width={0.15}
                height={0.10}
                position={[0.3, -0.1, 0]}
                onClick={() => this._selectCh(marker)}
                animation={{ name: "tapAnimation", run: this.state.tapCh, onFinish: this._animateFinished }}
                shadowCastingBitMask={0} />

              <ViroImage
                source={require('./res/jpflag.png')}
                width={0.15}
                height={0.10}
                position={[0.3, -0.2, 0]}
                onClick={() => this._selectJp(marker)}
                animation={{ name: "tapAnimation", run: this.state.tapJp, onFinish: this._animateFinished }}
                shadowCastingBitMask={0} />
            </ViroNode>
            <ViroFlexView
              rotation={[-90, -90, 0]}
              transformBehaviors={["billboard"]}
              style={{ flex: 1 }}
              visible={this.state["isShow" + marker]}
              height={3}
              width={1.5}
            >
              <ViroFlexView
                style={styles.cardWrapper}
              >
                <ViroText
                  //textClipMode="None"
                  text={this.state.textLangDetail}
                  scale={ARData[marker - 1].scale}
                  onClick={this._toggleButtons}
                  extrusionDepth={0.1}
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
  _toggleButtons() {
    this.setState({
      animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
  _selectTh(marker) {
    this.setState({
      textLangTitle: String(ARData[marker - 1].value[0].title),
      textLangDetail: String(ARData[marker - 1].value[0].detail),
      tapTh: true
    })
  },
  _selectEn(marker) {
    this.setState({
      textLangTitle: String(ARData[marker - 1].value[1].title),
      textLangDetail: String(ARData[marker - 1].value[1].detail),
      tapEn: true
    })
  },
  _selectCh(marker) {
    this.setState({
      textLangTitle: String(ARData[marker - 1].value[2].title),
      textLangDetail: String(ARData[marker - 1].value[2].detail),
      tapCh: true
    })
  },
  _selectJp(marker) {
    this.setState({
      textLangTitle: String(ARData[marker - 1].value[3].title),
      textLangDetail: String(ARData[marker - 1].value[3].detail),
      tapJp: true
    })
  },
  _animateFinished() {
    this.setState({
      tapTh: false,
      tapEn: false,
      tapCh: false,
      tapJp: false,
    })
  },
});

ViroMaterials.createMaterials({
  white: {
    shininess: 2.0,
    lightingModel: "PBR",
  },
});

ViroARTrackingTargets.createTargets({
  "10": {
    source: require('./res/1.jpeg'),
    orientation: "Left",
    physicalWidth: ARData[0].physicalWidth // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 500, easing: "bounce"
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0, },
    duration: 200,
  },
  scaleObject: {
    properties: { scaleX: .002, scaleY: .002, scaleZ: .002, },
    duration: 5000, easing: "bounce"
  },
  scaleSphereUp: {
    properties: { scaleX: .8, scaleY: .8, scaleZ: .8, },
    duration: 50, easing: "easeineaseout"
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 50, easing: "easeineaseout"
  },
  tapAnimation: [["scaleSphereUp", "scaleSphereDown"],]
});

const styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: "Rosemary, Thonburi, Pingfang HK",
    fontSize: 20,
    color: '#ffffff',
    lineHeight: 20,
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
    includeFontPadding: false
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