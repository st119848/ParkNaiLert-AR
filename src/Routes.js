import { createStackNavigator, createAppContainer } from 'react-navigation';
import PNLAR from './components/PNLAR/PNLAR'

const AppStack = createStackNavigator( 
    {  
        PNLAR: PNLAR,
        ScanTheObject: ScanTheObject,
    },   
  );            
  const AppNavigatorContainer = createAppContainer(AppStack);

  export default class Routes extends React.Component {
    render() {
      return <AppNavigatorContainer />;
    }
  }