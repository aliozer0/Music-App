import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SeacrhBarStyle from './SeacrhBar/SeacrhBar.Style';
import SeacrhBar from './SeacrhBar';

function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard Song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handeleSeacrh = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SeacrhBar onSeacrh={handeleSeacrh} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
export default App;
