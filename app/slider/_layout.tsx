import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Copy, ToyBrick } from 'lucide-react-native';

const Tabs = createBottomTabNavigator();
import Main from './index';
import Primitive from './slider-primitive';

export default function SliderTabsLayout() {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name='index'
        component={Main}
        options={{
          title: 'Reusable',
          tabBarIcon({ color, size }) {
            return <Copy color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name='slider-primitive'
        component={Primitive}
        options={{
          title: 'Primitive',
          tabBarIcon({ color, size }) {
            return <ToyBrick color={color} size={size} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
}

type RootTabs = React.ComponentProps<typeof Tabs>;
type ScreenOptions = RootTabs['screenOptions'];

const screenOptions: ScreenOptions = {
  headerShown: false,
};
