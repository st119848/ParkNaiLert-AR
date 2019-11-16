import React from "react";
import {Container, Row, Column, Touch, BackArrow, CloseArrow} from "./style"

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <Container>
                <Row>
                    <Column>
                        { this.props.renderBackArrow === true && 
                            <Touch onPress={() => {}}>
                                <BackArrow/>
                            </Touch>
                        }
                    </Column>
                    <Column>
                        <Touch onPress={() => {}}>
                            <CloseArrow source={require("../../../assets/cross.png")}/>
                        </Touch>
                    </Column>
                </Row>
            </Container>
        )
	},
});

module.exports = Header;
