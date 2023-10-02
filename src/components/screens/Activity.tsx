import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FriendProfileData } from '../screenComponents/DataBase'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Activity = () => {
  const navigation = useNavigation();
  // Function area
  const handleClickItemEvent = (item: any) => {
    navigation.navigate('FriendProfile', { data: item });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.slogan}>Activity</Text>
        <View style={styles.body}>
          <Text style={styles.title}>This Week</Text>
          {/* follower user notifications*/}
          <View style={styles.header1}>
            {
              FriendProfileData.slice(0, 3).map((item, index) => (
                <TouchableOpacity
                  onPress={() => handleClickItemEvent(item)}>
                  <Text>{item.profileName}, </Text>
                </TouchableOpacity>
              ))
            }
            <Text>Started following you.</Text>
          </View>
          <Text style={styles.title}>Earlier</Text>
          {/* suggestion user notifications*/}
          <View>
            {
              FriendProfileData.slice(3, 6).map((item, index) => {
                const [follow, setFollow] = useState(false);
                return <View style={styles.suggestItemContainer}>
                  <TouchableOpacity
                    style={styles.suggestItem}>
                    <Image
                      style={styles.suggestPersonImage}
                      source={item.profileImage} />
                    <Text style={styles.suggestItemRight}>
                      <Text style={styles.suggestPersonName}>{item.profileName}</Text>
                      , who you might know, is on instagram.</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setFollow(!follow)}
                    style={styles.buttonFollow}>
                    <View style={follow ? styles.wrapButtonFollowing : styles.wrapButtonFollow}>
                      <Text style={follow ? styles.txtFollowing : styles.txtFollow}>{follow ? "Following" : "Follow"}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              })
            }
          </View>
          {/* All suggestion area */}
          <View>
            <Text style={styles.title}>
              Suggestion for you
            </Text>
            {
              FriendProfileData.map((item, index) => {
                const [follow, setFollow] = useState(false);
                const [show, setShow] = useState(true);
                return <TouchableOpacity
                  style={styles.bottomSuggestContainer}>
                  {/* Right */}
                  <View style={styles.left}>
                    {/* Image */}
                    <Image
                      style={styles.suggestPersonImage}
                      source={item.profileImage} />
                    <View style={styles.leftItemInfo}>
                      <Text style={styles.suggestPersonName}>{item.AccountName}</Text>
                      <Text>{item.profileName}</Text>
                      <Text>Suggest for you</Text>
                    </View>
                  </View>
                  {/* Right */}
                  {
                    show ? (<TouchableOpacity
                      onPress={() => setFollow(!follow)}
                      style={styles.buttonFollow}>
                      <View style={follow ? styles.wrapButtonFollowing : styles.wrapButtonFollow}>
                        <Text style={follow ? styles.txtFollowing : styles.txtFollow}>{follow ? "Following" : "Follow"}</Text>
                      </View>
                    </TouchableOpacity>) : ""
                  }
                  {
                    follow ? "" : (
                      <TouchableOpacity
                        onPress={() => {
                          setShow(!show);
                          setFollow(true);
                        }}>
                        <Icon name='close' size={25} color={'grey'} />
                      </TouchableOpacity>)
                  }

                </TouchableOpacity>
              })
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  slogan: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: .9,
    borderBottomColor: '#DEDEDE',
    color: 'black',
    padding: 10,
  },
  body: {
    paddingHorizontal: 10
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  header1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  suggestPersonImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  suggestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    maxWidth: '64%'
  },
  suggestPersonName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  suggestItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  suggestItemRight: {
    flexWrap: 'wrap',
    paddingLeft: 10,
  },
  buttonFollow: {
    width: '20%',
  },
  wrapButtonFollow: {
    width: '100%',
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  wrapButtonFollowing: {
    width: '100%',
    height: 35,
    borderRadius: 6,
    backgroundColor: '#0095e5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtFollowing: {
    color: '#fff',
    fontWeight: 'bold'
  },
  txtFollow: {
    color: 'black',
    fontWeight: 'bold'
  },
  bottomSuggestContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center'
  },
  leftItemInfo: {
    marginStart: 10,
  },
  right: {
    width: '30%',
    height: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Activity