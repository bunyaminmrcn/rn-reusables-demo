import { View, Button } from 'react-native';
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';

export default function RedScreen({ navigation}) {
  return (
    <View className='flex-1 justify-center items-center gap-5'>
      <View className='items-center gap-1'>
        <H1 className='text-red-500'>Red tab</H1>
        <Muted>Swipe to see other tabs</Muted>
      </View>
      <Button title='Green' onPress={() => {
        navigation.getParent().navigate('tab_navigator', { screen: 'Green'})
      }}>
        <Text>
          Go to <Text className='text-green-500 font-bold'>green</Text> tab
        </Text>
        </Button>
    </View>
  );
}
