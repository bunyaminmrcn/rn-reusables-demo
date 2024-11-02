import type {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  useTheme,
  type ParamListBase,
  type TabNavigationState,
} from '@react-navigation/native';

const TopTabs  = createMaterialTopTabNavigator();

import Blue from './index';
import Red from './red';

import Green from './green';

import Purple from './purple';


export default function MaterialTopTabsLayout() {
  const { colors } = useTheme();
  return (
    <TopTabs.Navigator
      id='tab_navigator'
      initialRouteName='Blue'
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 'auto', minWidth: 100 },
      }}
    >
      <TopTabs.Screen
        name='Blue'
        component={Blue}
        options={{
          title: 'Blue',
        }}
      />
      <TopTabs.Screen
        name='Red'
        component={Red}
        options={{
          title: 'Red',
        }}
      />
      <TopTabs.Screen
        name='Green'
        component={Green}
        options={{
          title: 'Green',
        }}
      />
      <TopTabs.Screen
        name='Purple'
        component={Purple}
        options={{
          title: 'Purple',
        }}
      />
    </TopTabs.Navigator>
  );
}
