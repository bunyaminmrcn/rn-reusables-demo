import { Button, View } from 'react-native';
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';

export default function GreenScreen({ navigation }) {
  return (
    <View className='flex-1 justify-center items-center gap-5'>
      <View className='items-center gap-1'>
        <H1 className='text-green-500'>Green tab</H1>
        <Muted>Swipe to see other tabs</Muted>
      </View>
      <Button title='purple' onPress={() => {
        navigation.getParent().navigate('tab_navigator', { screen: 'Purple'})
      }}>
        <Text>
          Go to <Text className='text-purple-500 font-bold'>purple</Text> tab
        </Text>
      </Button>
    </View>
  );
}
