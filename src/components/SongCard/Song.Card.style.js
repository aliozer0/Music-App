import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10, 
  },
  info_container: {
    flexDirection: 'row',
    flex:1,
    alignItems:'center'
  },

  year: {
    fontSize: 12,
    justifyContent: 'center',
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
    soldout_container: {
      borderWidth: 1,
      borderColor: 'red',
      padding: 5,
      borderRadius: 5,
    },
    sold_title: 
    {color:'red'},  
    content_container:{
        flexDirection:'row'
    },
    
  
});
