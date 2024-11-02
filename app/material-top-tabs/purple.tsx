import { View, Button } from 'react-native';
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';

export default function PurpleScreen({ navigation }) {
  return (
    <View className='flex-1 justify-center items-center gap-5'>
      <View className='items-center gap-1'>
        <H1 className='text-purple-500'>Purple tab</H1>
        <Muted>Swipe to see other tabs</Muted>
      </View>
      <Button title="blue" onPress={() => {
        navigation.getParent().navigate('tab_navigator', { screen: 'Blue'})
      }}>
        <Text>
          Go to <Text className='text-blue-500 font-bold'>blue</Text> tab
        </Text>
      ></Button>
    </View>
  );
}
