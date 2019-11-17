"use strict";

import React, { Component } from "react";

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

const ObjectScene = createReactClass({
	render: function() {
		return (
			<ViroARScene>
				<ViroAmbientLight color='#ffffff' intensity={200} />
				<Viro3DObject
					source={require("../../../assets/3D/jar.obj")}
					position={[0, 1.45, 0]}
					scale={[0.9, 0.9, 0.9]}
					type='OBJ'
				/>
			</ViroARScene>
		);
	},
});

export default ObjectScene;
