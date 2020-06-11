import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth5360Navigator from '../features/EmailAuth5360/navigator';
import UserProfile35285Navigator from '../features/UserProfile35285/navigator';
import BlankScreen25284Navigator from '../features/BlankScreen25284/navigator';
import BlankScreen35283Navigator from '../features/BlankScreen35283/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth5360: { screen: EmailAuth5360Navigator },
UserProfile35285: { screen: UserProfile35285Navigator },
BlankScreen25284: { screen: BlankScreen25284Navigator },
BlankScreen35283: { screen: BlankScreen35283Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
