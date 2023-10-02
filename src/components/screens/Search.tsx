import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import SearchContent from '../screenComponents/SearchContent'

const Search = () => {

  const [image, setImage] = useState();
  const handleGetImage = (data: any) => {
    setImage(data);
  }
  return (
    <View>
      {/* Search bar */}
      <View style={styles.wrapHeader}>
        <TextInput
          style={styles.txtInput}
          placeholder='Search' />
        <Icon
          style={styles.icon}
          name='search1' size={20} />
      </View>
      {/* Image */}
      <ScrollView>
        <SearchContent handleGetImage={handleGetImage} />
      </ScrollView>
      {/* Modal */}
      {
        image ? (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(52,52,52,52,0.8)',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <View
              style={{
                width: 350,
                height: 450,
                backgroundColor: '#fff',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                elevation:5,
              }}
            >
              <View style={{position:'absolute',top:5,left:10, flexDirection:'row',alignItems:'center'}}>
                <Image source={image} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <Text style={{fontFamily:'Lobster-Regular',fontSize:18,paddingLeft:10,}}>Charlie chu</Text>
              </View>
              <Image source={image} style={{ width: '100%', height: '75%' }} />
            </View>
          </View>
        ) : (
          <View>
            <Text>ko</Text>
          </View>
        )
      }
    </View >
  )
}

const styles = StyleSheet.create({
  wrapHeader: {
    marginVertical: 10,
    marginHorizontal: 25,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    backgroundColor: '#EBEBEB',
    paddingLeft: 40,
    borderRadius: 10,
    width: '100%'
  },
  icon: {
    position: 'absolute',
    left: 10,
  }
})
export default Search