import { useScrollToTop } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';

import * as React from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { COMPONENTS } from '~/lib/constants';
import { ChevronRight } from '~/lib/icons/ChevronRight';
import { cn } from '~/lib/utils';
const Stack = createNativeStackNavigator();
import { COMPONENTS_R } from '../../../lib/constants';

export default function ComponentsScreen({ navigation }) {
  const [search, setSearch] = React.useState('');
  const ref = React.useRef(null);
  const refStack = React.useRef(null);

  useScrollToTop(ref);
  const data= !search ? COMPONENTS_R: COMPONENTS_R.filter(x => x.name.search(search) != -1)
  return (
    <View className='flex-1 px-4'>
      <View className='py-4'>
        <Input
          placeholder='Search UI...'
          clearButtonMode='always'
          value={search}
          onChangeText={setSearch}
        />
      </View>
     
      <FlashList
        ref={ref}
        data={data}
        className='native:overflow-hidden rounded-t-lg'
        estimatedItemSize={49}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (

            <Button
              variant='secondary'
              size='lg'
              className={cn(
                'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between',
                index === 0 && 'rounded-t-lg',
                index === COMPONENTS_R.length - 1 && 'border-b rounded-b-lg'
              )}
              onPress={() => {
                navigation.navigate('sub_stack', { screen: item.name, params: { settingId: 'abc' } })
              }}
            >
              <Text className='text-xl'>{item.name}</Text>
              <ChevronRight className='text-foreground/50' />
            </Button>
        )}
        ListFooterComponent={<View className='py-4' />}
      />
    </View>
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
