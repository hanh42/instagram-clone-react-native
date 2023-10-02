import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import ReelsComponent from '../screenComponents/ReelsComponent';

const { width, height } = Dimensions.get('screen');
const Reels = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'relative',
        alignItems: 'center',
      }}>
      <View style={styles.wrapHeader}>
        <Text style={styles.txtHeader}>Reels</Text>
        <Icon name='camera' size={30} color={'#fff'} />
      </View>
      <ReelsComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapHeader: {
    top:10,
    width: '90%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  txtHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

})
export default Reels
