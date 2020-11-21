import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen50176766Navigator from '../features/BlankScreen50176766/navigator';
import BlankScreen49176764Navigator from '../features/BlankScreen49176764/navigator';
import Maps176746Navigator from '../features/Maps176746/navigator';
import Additem176745Navigator from '../features/Additem176745/navigator';
import Maps176741Navigator from '../features/Maps176741/navigator';
import UserProfile176737Navigator from '../features/UserProfile176737/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen50176766: { screen: BlankScreen50176766Navigator },
BlankScreen49176764: { screen: BlankScreen49176764Navigator },
Maps176746: { screen: Maps176746Navigator },
Additem176745: { screen: Additem176745Navigator },
Maps176741: { screen: Maps176741Navigator },
UserProfile176737: { screen: UserProfile176737Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
