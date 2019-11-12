import React from 'react';
import { Row , Column , Touch , View} from '../Style';
import view from './style'

export default class Header extends React.Component {
    render() {
		return (
            <View style={view.header}>
                <Row>
                    <Column width={"25%"} AlignItem="flex-start">
                        <Touch onPress = {() => {}}>
                            
                        </Touch>
                    </Column>
                    <Column width={"25%"}  AlignItem="flex-end">
                        <Touch onPress = {() => {}}>

                        </Touch> 
                    </Column>
                </Row> 
            </View>
		);
	}
}