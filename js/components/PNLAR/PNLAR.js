"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";

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
	ViroBox,
	ViroSphere,
	ViroSpotLight,
	ViroQuad,
	ViroText,
	ViroConstants,
	ViroFlexView,
	ViroARSceneNavigator,
	ViroAmbientLight,
} from "react-viro";
import MarkerDetail from "../MarkerDetail/MarkerDetail";
import ObjectScene from "./ObjectScene";

const createReactClass = require("create-react-class");

export const Testing = "Hi world";

const PNLAR = createReactClass({
	allMarkers: ["10"],

	getInitialState(marker) {
		const baseState = {
			texture: "white",
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
			playAnim: false,
			animateObject: true,
			isShow: false,
			tapTh: false,
			tapEn: false,
			tapCh: false,
			tapJp: false,
		};
		const varyState = {};
		this.allMarkers.forEach(marker => {
			varyState["isShow" + marker] = false;
		});
		return {
			...baseState,
			...varyState,
		};
	},

	render: function() {
		return (
			<ViroARScene>
				{this.allMarkers.map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						onAnchorFound={() => 
							{
								this.props.sceneNavigator.viroAppProps.onAnchored(marker)
								this.props.sceneNavigator.push({scene:ObjectScene});
								// to navigate to detail component
								//Actions.detail({renderText: true});
							}
						}
						key={index}
						pauseUpdates={this.state.pauseUpdates}>
					</ViroARImageMarker>
				))}
			</ViroARScene>
		);
	},
	_onAnchorFound(marker) {
		// Show only when isShow is all false
		let allNotShow = true;
		console.log(marker);
		this.allMarkers.forEach(marker => {
			if (this.state["isShow" + marker]) {
				console.log("all not show false ");
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
			animName: this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp",
			playAnim: true,
		});
	},
	_animateFinished() {
		this.setState({
			tapTh: false,
			tapEn: false,
			tapCh: false,
			tapJp: false,
		});
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
		source: require("../../../assets/1.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[0].physicalWidth, // real world width in meters
	},
});

ViroAnimations.registerAnimations({
	scaleUp: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 500,
		easing: "bounce",
	},
	scaleDown: {
		properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
		duration: 200,
	},
	scaleObject: {
		properties: { scaleX: 0.002, scaleY: 0.002, scaleZ: 0.002 },
		duration: 5000,
		easing: "bounce",
	},
	scaleSphereUp: {
		properties: { scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8 },
		duration: 50,
		easing: "easeineaseout",
	},
	scaleSphereDown: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 50,
		easing: "easeineaseout",
	},
	tapAnimation: [["scaleSphereUp", "scaleSphereDown"]],
});

export default PNLAR;
