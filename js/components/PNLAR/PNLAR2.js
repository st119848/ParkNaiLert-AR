"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic20 from "../../../assets/20.jpeg";
import Pic21 from "../../../assets/21.jpeg";
import Pic22 from "../../../assets/22.jpeg";
import Pic23 from "../../../assets/23.jpeg";
import Pic24 from "../../../assets/24.jpeg";
import Pic25 from "../../../assets/25.jpeg";
import Pic26 from "../../../assets/26.jpeg";
import Pic27 from "../../../assets/27.jpeg";
import Pic28 from "../../../assets/28.jpeg";
import Pic29 from "../../../assets/29.jpeg";
import Pic30 from "../../../assets/30.jpeg";
import Pic31 from "../../../assets/31.jpeg";
import Pic32 from "../../../assets/32.jpeg";
import Pic33 from "../../../assets/33.jpeg";
import Pic34 from "../../../assets/34.jpeg";


import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const createReactClass = require("create-react-class");

const PNLAR2 = createReactClass({
	allMarkers: ["20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],

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
							Actions.detail2({ // go to markerDetail
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
	},
});

ViroARTrackingTargets.createTargets({
	"20": {
		source: Pic20,
		orientation: "Left",
		physicalWidth: ARData[19].physicalWidth, // real world width in meters
	},
	"21": {
		source: Pic21,
		orientation: "Left",
		physicalWidth: ARData[20].physicalWidth, // real world width in meters
	},
	"22": {
		source: Pic22,
		orientation: "Left",
		physicalWidth: ARData[21].physicalWidth, // real world width in meters
	},
	"23": {
		source: Pic23,
		orientation: "Left",
		physicalWidth: ARData[22].physicalWidth, // real world width in meters
	},
	"24": {
		source: Pic24,
		orientation: "Left",
		physicalWidth: ARData[23].physicalWidth, // real world width in meters
	},
	"25": {
		source: Pic25,
		orientation: "Left",
		physicalWidth: ARData[24].physicalWidth, // real world width in meters
	},
	"26": {
		source: Pic26,
		orientation: "Left",
		physicalWidth: ARData[25].physicalWidth, // real world width in meters
	},
	"27": {
		source: Pic27,
		orientation: "Left",
		physicalWidth: ARData[26].physicalWidth, // real world width in meters
	},
	"28": {
		source: Pic28,
		orientation: "Left",
		physicalWidth: ARData[27].physicalWidth, // real world width in meters
	},
	"29": {
		source: Pic29,
		orientation: "Left",
		physicalWidth: ARData[28].physicalWidth, // real world width in meters
	},
	"30": {
		source: Pic30,
		orientation: "Left",
		physicalWidth: ARData[29].physicalWidth, // real world width in meters
	},
	"31": {
		source: Pic31,
		orientation: "Left",
		physicalWidth: ARData[30].physicalWidth, // real world width in meters
	},
	"32": {
		source: Pic32,
		orientation: "Left",
		physicalWidth: ARData[31].physicalWidth, // real world width in meters
	},
	"33": {
		source: Pic33,
		orientation: "Left",
		physicalWidth: ARData[32].physicalWidth, // real world width in meters
	},
	"34": {
		source: Pic34,
		orientation: "Left",
		physicalWidth: ARData[33].physicalWidth, // real world width in meters
	}
});

export default PNLAR2;
