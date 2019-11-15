"use strict";

import React from "react";
import {
	StyleSheet,
	View,
	Text,
} from "react-native";
import {
	ViroARScene,
	ViroText
} from "react-viro";
import Header from '../Header/Header'

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({

	render: function() {
        return (
			<ViroARScene>
				<ViroText text="Hello World" position={[0, -.1, -1]} />
			</ViroARScene>
        );
	},
});

export default MarkerDetail;