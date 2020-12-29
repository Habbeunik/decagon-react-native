import React from 'react';
import { View, Image, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';

import style from './CountryStyles';

const Country = ({ name, capital, flag, population, currency }) => (
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
  </View>
);

export default Country;
