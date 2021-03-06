import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { mergeStyle } from '../Utils';

import screenStyles from './Styles/ScreenStyles';
import homeStyles from './Styles/HomeStyle';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { AppStackNavigationProp } from '../Navigation';

const HomeScreen: React.FC<AppStackNavigationProp> = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleButtonClick = useCallback(() => {
    navigation.navigate('Result', { searchKey });
  }, [navigation, searchKey]);

  return (
    <View style={mergeStyle(screenStyles.screen, homeStyles.home)}>
      <Text style={homeStyles.headline}>Search</Text>
      <Text style={homeStyles.caption}>
        Find countries by keywords and check out the corresponding naira values
      </Text>
      <View style={homeStyles.inputWrapper}>
        <Input
          onChangeText={setSearchKey}
          value={searchKey}
          placeholder="Search For Country"
        />
      </View>
      <Button label="Go" disabled={!searchKey} onPress={handleButtonClick} />
    </View>
  );
};

export default HomeScreen;
