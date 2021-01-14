import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { SvgUri } from 'react-native-svg';

import style from './CountryStyles';

interface CountryProps {
  name: string;
  capital: string;
  flag: string;
  population: string;
  currency: string;
  currencySymbol: string;
  amount: string | number;
}
const Country: React.FC<CountryProps> = ({
  name,
  capital,
  flag,
  population,
  currency,
  currencySymbol,
  amount,
}) => {
  return (
    <View style={style.wrapper}>
      <View style={style.logo}>
        <SvgUri uri={flag} width="100%" height="80%" />
      </View>
      <View style={style.content}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.caption}>{capital}</Text>
        <Text style={style.caption}>Population: {population}</Text>
        <Text style={style.caption}>Currency: {currency}</Text>
      </View>
      <View style={style.convertAmountWrapper}>
        <Text style={style.convertAmount}>
          {currencySymbol}
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default Country;
