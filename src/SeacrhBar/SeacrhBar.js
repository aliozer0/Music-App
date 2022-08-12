import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SeacrhBar.Style';

const SeacrhBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSeacrh}></TextInput>
    </View>
  );
};
export default SeacrhBar;
