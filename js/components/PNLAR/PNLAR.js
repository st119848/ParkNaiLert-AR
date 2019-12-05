"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic1 from "../../../assets/1.jpeg";
import Pic2 from "../../../assets/2.jpeg";
import Pic3 from "../../../assets/3.jpeg";
import Pic4 from "../../../assets/4.jpeg";
import Pic5 from "../../../assets/5.jpeg";
import Pic6 from "../../../assets/6.jpeg";
import Pic7 from "../../../assets/7.jpeg";
import Pic8 from "../../../assets/8.jpeg";
import Pic9 from "../../../assets/9.jpeg";
import Pic10 from "../../../assets/10.jpeg";
import Pic11 from "../../../assets/11.jpeg";
import Pic12 from "../../../assets/12.jpeg";
import Pic13 from "../../../assets/13.jpeg";
import Pic14 from "../../../assets/14.jpeg";
import Pic15 from "../../../assets/15.jpeg";
import Pic16 from "../../../assets/16.jpeg";
import Pic17 from "../../../assets/17.jpeg";
import Pic18 from "../../../assets/18.jpeg";
import Pic19 from "../../../assets/19.jpeg";
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
import Pic35 from "../../../assets/35.jpeg";
import Pic36 from "../../../assets/36.jpeg";
import Pic37 from "../../../assets/37.jpeg";
import Pic38 from "../../../assets/38.jpeg";
import Pic39 from "../../../assets/39.jpeg";
import Pic40 from "../../../assets/40.jpeg";
import Pic41 from "../../../assets/41.jpeg";
import Pic42 from "../../../assets/42.jpeg";
import Pic43 from "../../../assets/43.jpeg";
import Pic44 from "../../../assets/44.jpeg";
import Pic45 from "../../../assets/45.jpeg";
import Pic46 from "../../../assets/46.jpeg";
import Pic47 from "../../../assets/47.jpeg";
import Pic48 from "../../../assets/48.jpeg";
import Pic49 from "../../../assets/49.jpeg";
import Pic50 from "../../../assets/50.jpeg";


import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const createReactClass = require("create-react-class");

const PNLAR = createReactClass({
	allMarkers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],

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
	"1": {
		source: Pic1,
		orientation: "Left",
		physicalWidth: ARData[0].physicalWidth, // real world width in meters
	},
	"2": {
		source: Pic2,
		orientation: "Left",
		physicalWidth: ARData[1].physicalWidth, // real world width in meters
	},
	"3": {
		source: Pic3,
		orientation: "Left",
		physicalWidth: ARData[2].physicalWidth, // real world width in meters
	},
	"4": {
		source: Pic4,
		orientation: "Left",
		physicalWidth: ARData[3].physicalWidth, // real world width in meters
	},
	"5": {
		source: Pic5,
		orientation: "Left",
		physicalWidth: ARData[4].physicalWidth, // real world width in meters
	},
	"6": {
		source: Pic6,
		orientation: "Left",
		physicalWidth: ARData[5].physicalWidth, // real world width in meters
	},
	"7": {
		source: Pic7,
		orientation: "Left",
		physicalWidth: ARData[6].physicalWidth, // real world width in meters
	},
	"8": {
		source: Pic8,
		orientation: "Left",
		physicalWidth: ARData[7].physicalWidth, // real world width in meters
	},
	"9": {
		source: Pic9,
		orientation: "Left",
		physicalWidth: ARData[8].physicalWidth, // real world width in meters
	},
	"10": {
		source: Pic10,
		orientation: "Left",
		physicalWidth: ARData[9].physicalWidth, // real world width in meters
	},
	"11": {
		source: Pic11,
		orientation: "Left",
		physicalWidth: ARData[10].physicalWidth, // real world width in meters
	},
	"12": {
		source: Pic12,
		orientation: "Left",
		physicalWidth: ARData[11].physicalWidth, // real world width in meters
	},
	"13": {
		source: Pic13,
		orientation: "Left",
		physicalWidth: ARData[12].physicalWidth, // real world width in meters
	},
	"14": {
		source: Pic14,
		orientation: "Left",
		physicalWidth: ARData[13].physicalWidth, // real world width in meters
	},
	"15": {
		source: Pic15,
		orientation: "Left",
		physicalWidth: ARData[14].physicalWidth, // real world width in meters
	},
	"16": {
		source: Pic16,
		orientation: "Left",
		physicalWidth: ARData[15].physicalWidth, // real world width in meters
	},
	"17": {
		source: Pic17,
		orientation: "Left",
		physicalWidth: ARData[16].physicalWidth, // real world width in meters
	},
	"18": {
		source: Pic18,
		orientation: "Left",
		physicalWidth: ARData[17].physicalWidth, // real world width in meters
	},
	"19": {
		source: Pic19,
		orientation: "Left",
		physicalWidth: ARData[18].physicalWidth, // real world width in meters
	},
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
	},
	"35": {
		source: Pic35,
		orientation: "Left",
		physicalWidth: ARData[34].physicalWidth, // real world width in meters
	},
	"36": {
		source: Pic36,
		orientation: "Left",
		physicalWidth: ARData[35].physicalWidth, // real world width in meters
	},
	"37": {
		source: Pic37,
		orientation: "Left",
		physicalWidth: ARData[36].physicalWidth, // real world width in meters
	},
	"38": {
		source: Pic38,
		orientation: "Left",
		physicalWidth: ARData[37].physicalWidth, // real world width in meters
	},
	"39": {
		source: Pic39,
		orientation: "Left",
		physicalWidth: ARData[38].physicalWidth, // real world width in meters
	},
	"40": {
		source: Pic40,
		orientation: "Left",
		physicalWidth: ARData[39].physicalWidth, // real world width in meters
	},
	"41": {
		source: Pic41,
		orientation: "Left",
		physicalWidth: ARData[40].physicalWidth, // real world width in meters
	},
	"42": {
		source: Pic42,
		orientation: "Left",
		physicalWidth: ARData[41].physicalWidth, // real world width in meters
	},
	"43": {
		source: Pic43,
		orientation: "Left",
		physicalWidth: ARData[42].physicalWidth, // real world width in meters
	},
	"44": {
		source: Pic44,
		orientation: "Left",
		physicalWidth: ARData[43].physicalWidth, // real world width in meters
	},
	"45": {
		source: Pic45,
		orientation: "Left",
		physicalWidth: ARData[44].physicalWidth, // real world width in meters
	},
	"46": {
		source: Pic46,
		orientation: "Left",
		physicalWidth: ARData[45].physicalWidth, // real world width in meters
	},
	"47": {
		source: Pic47,
		orientation: "Left",
		physicalWidth: ARData[46].physicalWidth, // real world width in meters
	},
	"48": {
		source: Pic48,
		orientation: "Left",
		physicalWidth: ARData[47].physicalWidth, // real world width in meters
	},
	"49": {
		source: Pic49,
		orientation: "Left",
		physicalWidth: ARData[48].physicalWidth, // real world width in meters
	},
	"50": {
		source: Pic50,
		orientation: "Left",
		physicalWidth: ARData[49].physicalWidth, // real world width in meters
	}
});

export default PNLAR;
