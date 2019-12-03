"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import PicTest from "../../../assets/24.jpeg";

import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const createReactClass = require("create-react-class");

const PNLAR = createReactClass({
	allMarkers: ["1", "24", "31"],

	getInitialState(marker) {
		const baseState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
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
							//to navigate to detail component
							Actions.detail({ // go to markerDetail
								renderText: true,
								textLangTitle: String(ARData[marker - 1].value[0].title),
								textLangDetail: String(ARData[marker - 1].value[0].detail),
								showARScene:this.props.sceneNavigator.viroAppProps.showARScene,
								marker:marker // send marker to the markerDetail
							});
							this._onAnchorFound(marker);
						}}
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
		alert(marker);
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

export default PNLAR;
