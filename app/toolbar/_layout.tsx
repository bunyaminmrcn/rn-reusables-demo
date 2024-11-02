import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Copy, ToyBrick } from 'lucide-react-native';


const Tabs = createBottomTabNavigator();
import Main from './index';
import ToolbarPrimitive from './toolbar-primitive';

export default function ToolbarTabsLayout() {
  return (
    <>
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
          name='toolbar-primitive'
          component={ToolbarPrimitive}
          options={{
            title: 'Primitive',
            tabBarIcon({ color, size }) {
              return <ToyBrick color={color} size={size} />;
            },
          }}
        />
      </Tabs.Navigator>
    </>
  );
}

type RootTabs = React.ComponentProps<typeof Tabs>;
type ScreenOptions = RootTabs['screenOptions'];

const screenOptions: ScreenOptions = {
  headerShown: false,
};
