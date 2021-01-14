import React, { Fragment, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import Country from '.';

import styles from './CountryStyles';

interface CountryListProps {
  amount: number;
  data: any[];
}
const CountryList: React.FC<CountryListProps> = ({ amount, data }) => {
  const flastListKeyExtractor = useCallback(({ name }) => name, []);

  const renderItem = useCallback(
    ({ item }) => (
      <Country
        name={item.name}
        capital={item.capital}
        flag={item.flag}
        population={item.population}
        currency={item.currencies[0].code}
        currencySymbol={item.currencies[0].symbol}
        amount={amount}
      />
    ),
    [amount]
  );

  return (
    <Fragment>
      <Text style={styles.headline}>Countries Found</Text>
      <FlatList
        data={data}
        keyExtractor={flastListKeyExtractor}
        renderItem={renderItem}
      />
    </Fragment>
  );
};

export default CountryList;
