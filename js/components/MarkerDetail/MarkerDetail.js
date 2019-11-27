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
import { ScrollView } from 'react-native';

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
					{ this.props.renderText === true && 
						<ThreeDBox>
							<Touch onPress={()=>{Actions.model()}}>
								<ThreeDText>3D Available ></ThreeDText>	
							</Touch>
						</ThreeDBox>
					}
					<ScrollView>
						<TextBox>
							<TitleText>{ this.props.marker }</TitleText>
							<DetailText>
								{ this.props.textLangDetail }
							</DetailText>
						</TextBox>
					</ScrollView>
				</Container>
			</Theme>
		);
	},
});

export default MarkerDetail;
