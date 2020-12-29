import React, { useCallback, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { mergeStyle } from '../Utils';

import screenStyles from './Styles/ScreenStyles';
import homeStyles from './Styles/HomeStyle';
import Button from '../Components/Button';
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeScreenProps {
  navigation: StackNavigationProp<
    { Home: undefined; Result: { searchKey: string } },
    'Home'
  >;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleButtonClick = useCallback(() => {
    navigation.navigate('Result', { searchKey });
  }, [navigation]);

  return (
    <View style={mergeStyle(screenStyles.screen, homeStyles.home)}>
      <TextInput
        style={homeStyles.searchInput}
        placeholder="Search For Country"
        value={searchKey}
        onChangeText={setSearchKey}
      />
      <Button
        label="Search"
        disabled={!searchKey}
        onPress={handleButtonClick}
      />
    </View>
  );
};

export default HomeScreen;
