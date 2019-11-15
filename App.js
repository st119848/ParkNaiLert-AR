import React, { Fragment } from 'react';
import ScanTheObject from './js/components/ScanTheObject/ScanTheObject';
import MarkerDetail from './js/components/MarkerDetail/MarkerDetail';

export default class App extends React.Component {
	render() {
	  return (
		<Fragment>
			<ScanTheObject/>
		</Fragment>
	  );
	}
  }

// class initialApp extends React.Component {
// 	render() {
// 	  return (
// 		<Fragment>
// 			<ScanTheObject/>
// 		</Fragment>
// 	  );
// 	}
//   }

//   const AppNavigator = createStackNavigator({
// 	Home: initialApp,
// 	Details: MarkerDetail,
//   });

//   const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
// 	render() {
// 	  return <AppContainer />;
// 	}
//   }

// module.exports = App