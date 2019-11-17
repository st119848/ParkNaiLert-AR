"use strict";

import React from "react";
import { ViroARScene, ViroText } from "react-viro";
import Header from "../Header/Header";
import {
	Theme,
	Container,
	DescriptionText,
	HandImage,
	ArrowUp,
	ArrowDown,
	ArrowRight,
	ArrowLeft,
	HandBox,
	Row,
} from "./style";
import { Viro3DObject } from "react-viro";

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	render: function() {
		return (
			<Theme>
				<Header source={require("../../../assets/white-cross.png")} renderBackArrow={true}/>
				<Container>
				<Viro3DObject source={{uri:"http://example.org/myobject.obj"}}
          		position={[-0.0, -5.5, -1.15]}
          		materials={["heart"]}
          		type="OBJ" />

					<HandBox>
						<ArrowUp
							source={require("../../../assets/hand_images/arrow-up.png")}
						/>
						<Row>
							<ArrowLeft
								source={require("../../../assets/hand_images/arrow-left.png")}
							/>
							<HandImage
								source={require("../../../assets/hand_images/hand.png")}
							/>
							<ArrowRight
								source={require("../../../assets/hand_images/arrow-right.png")}
							/>
						</Row>
						<ArrowDown
							source={require("../../../assets/hand_images/arrow-down.png")}
						/>
					</HandBox>
					<DescriptionText>
						Tap and hold on the object, then drag around to see every
						perspective of the object.
					</DescriptionText>
				</Container>
			</Theme>
		);
	},
});

export default MarkerDetail;
