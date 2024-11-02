import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PortalHost } from '@rn-primitives/portal';
import { DeprecatedUi } from '@rnr/reusables';

import * as React from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Text } from '~/components/ui/text';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';

const { ToastProvider } = DeprecatedUi;
import MaterialTopTabsLayout from './material-top-tabs/_layout'
import TabsLayout from './tabs/_layout';
import ModalScreen from './modal';

const Stack = createNativeStackNavigator();
const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};
import { COMPONENTS_R } from '../lib/constants';
import { View } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'tabs',
};
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Prevent the splash screen from auto-hiding before getting the color scheme.
//SplashScreen.preventAutoHideAsync();

function SubStack() {
  return (<Stack.Navigator id="sub_stack">
    {
      COMPONENTS_R.map((comp: any) => {
        return <Stack.Screen name={comp.name} key={comp.name} component={comp.mod} />
      })
    }
  </Stack.Navigator>)
}
export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        setAndroidNavigationBar(colorScheme);
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      setAndroidNavigationBar(colorTheme);
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      //SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  // FROM CONTEXT

  return (
    <SafeAreaProvider>
      <React.Suspense fallback={<View><Text> Loading </Text></View>}>
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>

          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>

              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName='tabs'

                  screenOptions={{
                    headerBackTitle: 'Back',
                    headerTitle(props) {
                      return <Text className='text-xl font-semibold'>{toOptions(props.children)}</Text>;
                    },
                    headerRight: () => <ThemeToggle />,
                  }}
                >
                  <Stack.Screen
                    name='tabs'
                    component={TabsLayout}
                    options={{
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name='modal'
                    component={ModalScreen}
                    options={{
                      presentation: 'modal',
                      title: 'Modal',
                    }}
                  />

                  <Stack.Screen
                    name="sub_stack"
                    component={SubStack}
                    options={{
                      headerShown: false,
                    }}

                  ></Stack.Screen>

                  <Stack.Screen name='tab_navigator'
                    component={MaterialTopTabsLayout}
                    options={{
                      headerShown: false,
                    }}
                  >
                  </Stack.Screen>
                </Stack.Navigator>

              </NavigationContainer>

            </BottomSheetModalProvider>
            <PortalHost />
          </GestureHandlerRootView>
          <ToastProvider />
        </ThemeProvider>
      </React.Suspense>
    </SafeAreaProvider>
  );
}

function toOptions(name: string) {
  const title = name
    .split('-')
    .map(function (str: string) {
      return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
      });
    })
    .join(' ');
  return title;
}
