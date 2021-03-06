import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AppStackNavigationProp } from '../Navigation';

import screenStyles from './Styles/ScreenStyles';
import resultStyles from './Styles/ResultStyle';
import Country from '../Components/Country';
import Input from '../Components/Input';
import Button from '../Components/Button';
import CountryList from '../Components/Country/CountryList';

const ResultScreen: React.FC<AppStackNavigationProp> = ({
  route,
  navigation,
}) => {
  const { searchKey } = route.params;

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [amountInput, setAmountInput] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAmountInputChange = useCallback(
    (value) => {
      if (!Number.isNaN(Number(value))) {
        setAmountInput(value);
      }
    },
    [setAmountInput]
  );

  const saveConversionAmount = useCallback(() => {
    setAmount(Number(amountInput));
  }, [setAmount, amountInput]);

  useEffect(() => {
    if (searchKey) {
      setCountries([]);
    }
  }, [searchKey]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${searchKey}`)
      .then((res) => res.json())
      .then((data: never[]) => {
        if (Array.isArray(data)) {
          setCountries(data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      const currencies = countries
        .map((country) => country.currencies[0].code)
        .join(',');
      const url = `http://data.fixer.io/api/latest?access_key=2bea64202e661e5db5643c0f64a3936b&base=USD&symbols=${currencies}}`;
      console.log('currencies', currencies);
      console.log('url', url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log('rates', data);
          // setAmount(data.result);
        });
      // .finally(() => setIsConverting(false));
    }
  }, [countries]);

  const handleBackClick = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={screenStyles.screen}>
      <TouchableOpacity onPress={handleBackClick}>
        <Text style={resultStyles.back}>{'< Back'}</Text>
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
              <View style={resultStyles.converWrapper}>
                <Input
                  placeholder="Enter Amount In Naira"
                  style={{ flex: 1, marginRight: 10 }}
                  keyboardType="numeric"
                  value={amountInput}
                  onChangeText={handleAmountInputChange}
                />
                <Button
                  label="Convert"
                  onPress={saveConversionAmount}
                  disabled={!amountInput || Number(amountInput) === amount}
                />
              </View>
              <CountryList amount={amount} data={countries} />
            </Fragment>
          )}
        </Fragment>
      )}
    </View>
  );
};

export default ResultScreen;
