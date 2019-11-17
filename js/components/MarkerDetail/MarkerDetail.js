"use strict";

import React from "react";
import { ViroARScene, ViroText } from "react-viro";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	TextBox,
	TitleText,
	DetailText,
	ThreeDText,
	ThreeDBox,
	Container,
	Touch
} from "./style";
import { Actions } from 'react-native-router-flux';

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	render: function() {
		return (
			<Theme>
				<Header source={require("../../../assets/white-cross.png")}/>
				<Container>
					<ImageBox>
						<ImageStyle source={require("../../../assets/1.jpeg")} />
					</ImageBox>
					{ this.props.renderText === undefined && 
					<ThreeDBox>
						<Touch onPress={()=>{Actions.model()}}>
							<ThreeDText>3D Available ></ThreeDText>	
						</Touch>
					</ThreeDBox>
					}
					<TextBox>
						<TitleText>Japanese Ceramic Dish Set</TitleText>
						<DetailText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</DetailText>
					</TextBox>
				</Container>
			</Theme>
		);
	},
});

export default MarkerDetail;
