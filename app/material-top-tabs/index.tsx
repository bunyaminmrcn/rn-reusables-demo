import { View, Button, Alert } from 'react-native';
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';

export default function BlueScreen({ navigation }) {
  return (
    <View className='flex-1 justify-center items-center gap-5'>
      <View className='items-center gap-1'>
        <H1 className='text-blue-500'>Blue tab</H1>
        <Muted>Swipe to see other tabs</Muted>
      </View>
      <Button title='red' onPress={() => {
        navigation.getParent().navigate('tab_navigator', { screen: 'Red'})
        //console.log()
      }}>
        <Text>
          Go to <Text className='text-red-500 font-bold'>red</Text> tab
        </Text>
    </Button>
    </View>
  );
}
