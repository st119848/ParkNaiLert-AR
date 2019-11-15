import React from "react";
import {Container, Row, Column, Touch} from "./style"

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <Container>
                <Row>
                    <Column width={"25%"} AlignItem='flex-start'>
                        <Touch onPress={() => {}}></Touch>
                    </Column>
                    <Column width={"25%"} AlignItem='flex-end'>
                        <Touch onPress={() => {}}></Touch>
                    </Column>
                </Row>
            </Container>
        )
	},
});

module.exports = Header;
