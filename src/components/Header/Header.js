import React from "react";
import view from "./style";
import { TouchableOpacity, View } from "react-native";

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <View style={view.header}>
                <View style={view.row}>
                    <View style={view.column} width={"25%"} AlignItem='flex-start'>
                        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
                    </View>
                    <View style={view.column} width={"25%"} AlignItem='flex-end'>
                        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
	},
});

module.exports = Header;
