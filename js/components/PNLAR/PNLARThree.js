"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import PicTest from "../../../assets/24.jpeg";

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

const createReactClass = require("create-react-class");

export const Testing = "Hi world";

const PNLAR = createReactClass({
	allMarkers: ["1", "24", "31"],

	getInitialState(marker) {
		const baseState = {
			texture: "white",
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
			playAnim: false,
			animateObject: true,
			isShow: false,
			bdShow: false,
			caShow: false,
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

	render: function () {
		return (
			<ViroARScene>
				{this.allMarkers.map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						onAnchorFound={() => {
							this.props.sceneNavigator.viroAppProps.onAnchored(marker)
							// to navigate to detail component
							// Actions.detail({
							// 	checkThreeDim: marker, 
							// 	renderText: true, 
							// 	textLangTitle:String(ARData[marker - 1].value[0].title), 
							// 	textLangDetail:String(ARData[marker - 1].value[0].detail)
							// });
							this._onAnchorFound(marker);
						}
						}
						key={index}
						pauseUpdates={this.state.pauseUpdates}>
						<ViroAmbientLight color='#ffffff' />
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

						<Viro3DObject
							source={require("../../../assets/3D/Jar.obj")}
							resources={[require("../../../assets/3D/Jar.mtl")]}
							position={[0.0, 0.0, 0.002]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.bdShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Drum.obj")}
							resources={[require("../../../assets/3D/Drum.mtl")]}
							position={[0.0, 0.0, 0.002]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.caShow}
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
		alert("3D Working");
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
		};
		if (marker == 24) {
			this.setState({
				bdShow: true
			})
		};
		if (marker == 31) {
			this.setState({
				caShow: true
			})
		};
	},
	_toggleButtons() {
		this.setState({
			animName: this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp",
			playAnim: true,
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
	"1": {
		source: require("../../../assets/1.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[0].physicalWidth, // real world width in meters
	},
	"24": {
		source: PicTest,
		orientation: "Left",
		physicalWidth: ARData[23].physicalWidth, // real world width in meters
	},
	"31": {
		source: require("../../../assets/31.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[30].physicalWidth, // real world width in meters
	}
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
