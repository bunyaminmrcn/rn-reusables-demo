import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Copy, ToyBrick } from 'lucide-react-native';


const Tabs = createBottomTabNavigator();
import Main from './index';
import Primitive from './label-primitive';

export default function LabelTabsLayout() {
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
        name='label-primitive'
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
