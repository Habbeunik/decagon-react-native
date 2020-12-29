import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import screenStyles from './Styles/ScreenStyles';
import resultStyles from './Styles/ResultStyle';
import Country from '../Components/Country';

const ResultScreen = ({ route, navigation }) => {
  const { searchKey } = route.params;

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchKey) {
      setCountries([]);
    }
  }, [searchKey]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${searchKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log('data', data);
          setCountries(data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const flastListKeyExtractor = useCallback(({ name }) => name, []);
  const renderItem = useCallback(
    ({ item }) => (
      <Country
        name={item.name}
        capital={item.capital}
        flag={item.flag}
        population={item.population}
        currency={item.currencies[0].code}
      />
    ),
    []
  );

  const handleBackClick = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={screenStyles.screen}>
      <TouchableOpacity onPress={handleBackClick}>
        <Text style={resultStyles.back}>{'<- Back'}</Text>
      </TouchableOpacity>
      {isLoading && (
        <View style={{ flex: 1, marginTop: '30%' }}>
          <ActivityIndicator color="green" size={30} />
        </View>
      )}
      {!isLoading && (
        <Fragment>
          {countries.length < 1 ? (
            <View style={resultStyles.emptyContainer}>
              <Text style={resultStyles.emptyText}>No Result Found 🤨</Text>
            </View>
          ) : (
            <Fragment>
              <Text style={resultStyles.headline}>Countries Found</Text>
              <FlatList
                data={countries}
                keyExtractor={flastListKeyExtractor}
                renderItem={renderItem}
              />
            </Fragment>
          )}
        </Fragment>
      )}
    </View>
  );
};

export default ResultScreen;
