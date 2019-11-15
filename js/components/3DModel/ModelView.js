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
	Span,
} from "./style";

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	render: function() {
		return (
			<Theme>
				<Header />
				<Container>
					<HandBox>
						<ArrowUp
							source={require("../../../assets/hand_images/arrow-up.png")}
						/>
						<Span>
							<ArrowLeft
								source={require("../../../assets/hand_images/arrow-left.png")}
							/>
							<HandImage
								source={require("../../../assets/hand_images/hand.png")}
							/>
							<ArrowRight
								source={require("../../../assets/hand_images/arrow-right.png")}
							/>
						</Span>
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
