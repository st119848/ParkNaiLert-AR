"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from 'react-native-router-flux';

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
	ViroARSceneNavigator,
} from "react-viro";
import MarkerDetail from '../MarkerDetail/MarkerDetail'

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
								Actions.detail();
							}
						}
						key={index}
						pauseUpdates={this.state.pauseUpdates}>
						<Viro3DObject
							scale={[0, 0, 0]}
							source={require("../../../assets/3D/jar.obj")}
							resources={[require("../../../assets/3D/jar.mtl")]}
							type='OBJ'
							materials={this.state.texture}
							onClick={this._toggleButtons}
							position={[0.05, 0, 0.05]}
							rotation={[0, 0, -90]}
							visible={this.state["isShow" + marker]}
							animation={{ name: "scaleObject", run: this.state.animateObject }}
						/>
						<ViroSpotLight
							innerAngle={5}
							outerAngle={25}
							direction={[0, -1, 0]}
							position={[0, 5, 1]}
							color='#ffffff'
							castsShadow={true}
							shadowMapSize={2048}
							shadowNearZ={2}
							shadowFarZ={7}
							shadowOpacity={0.7}
						/>
						<ViroQuad
							rotation={[-90, 0, 0]}
							position={[0, -0.001, 0]}
							width={2.5}
							height={2.5}
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

const styles = StyleSheet.create({
	textStyle: {
		flex: 0.5,
		fontFamily: "Rosemary, Thonburi, Pingfang HK",
		fontSize: 20,
		color: "#ffffff",
		lineHeight: 20,
		textAlignVertical: "top",
		textAlign: "left",
		fontWeight: "bold",
		includeFontPadding: false,
	},
	card: {
		flexDirection: "column",
	},
	cardWrapper: {
		flexDirection: "row",
		alignItems: "flex-start",
		padding: 0.001,
		flex: 0.5,
	},
});

export default PNLAR;
