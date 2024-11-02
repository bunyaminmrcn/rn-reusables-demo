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
import { useWindowDimensions } from 'react-native';

const MaterialTopTabs = createMaterialTopTabNavigator();
 
import Main from './index';
import Primitive from './primitives';

export default function MaterialTopTabsLayout() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  return (
    <>
      <MaterialTopTabs.Navigator
        initialRouteName='index'
        screenOptions={{
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: 'none',
            fontWeight: 'bold',
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.text,
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: width / 2 },
        }}
      >
        <MaterialTopTabs.Screen
          name='index'
          component={Main}
          options={{
            title: 'UI',
          }}
        />
        <MaterialTopTabs.Screen
          name='primitives'
          component={Primitive}
          options={{
            title: 'Primitives',
          }}
        />
      </MaterialTopTabs.Navigator>
    </>
  );
}
