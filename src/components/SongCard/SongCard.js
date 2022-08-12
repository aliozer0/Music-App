import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Song.Card.style';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.Song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.Song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{props.Song.artist}</Text>
            <Text style={styles.year}>{props.Song.year}</Text>
          </View>

          {props.Song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
