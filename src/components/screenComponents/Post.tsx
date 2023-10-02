import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Fontisto';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { Pressable } from 'react-native';

const dataX = [
  {
    id: 1,
    postTitle: 'mr charlie',
    postPersonImage: require('../storage/images/girl.png'),
    postImage: require('../storage/images/h1.jpg'),
    likes: 123,
    isLiked: true,
  },
  {
    id: 2,
    postTitle: 'mr jenny',
    postPersonImage: require('../storage/images/girl.png'),
    postImage: require('../storage/images/h2.jpg'),
    likes: 123,
    isLiked: false,
  },
  {
    id: 3,
    postTitle: 'ms kim',
    postPersonImage: require('../storage/images/girl.png'),
    postImage: require('../storage/images/h3.jpg'),
    likes: 123,
    isLiked: true,
  },
  {
    id: 4,
    postTitle: 'mr panda',
    postPersonImage: require('../storage/images/girl.png'),
    postImage: require('../storage/images/h4.jpg'),
    likes: 123,
    isLiked: false,
  },
]
const Post = () => {

  const [data, setData] = useState(dataX);
  const renderItem = (item: any, index: any) => {
    return (
      <View style={styles.wrapPost}>
        {/* Header */}
        <View style={styles.headerPost}>
          <View style={styles.wrapAvatarLeft}>
            <Image
              style={styles.postAvatar}
              source={item.postPersonImage} />
            <Text style={styles.txtName}>{item.postTitle}</Text>
          </View>
          <Icon name='dots-three-vertical' size={15} color={'black'} />
        </View>
        {/* Body */}
        <View style={styles.wrapImagePost}>
          <Image
            style={styles.imagePost}
            source={item.postImage} />
        </View>
        {/* Bottom */}
        <View style={styles.bottomWrapper}>
          {/* Icon */}
          <View style={styles.wrapAction}>
            <View style={styles.bottomLeft}>
              <Pressable
                onPress={() => handleClickHeartEvent(item)}>
                <Icon
                  style={styles.bottomIconLeft}
                  name={item.isLiked ? ('heart') : ('heart-outlined')} size={30} color={item.isLiked ? ('red') : ('black')} />
              </Pressable>
              <Icon2
                style={styles.bottomIconLeft}
                name='chatbubble-outline' size={25} color={'black'} />
              <Icon3 name='send' size={25} color={'black'} />
            </View>
            <Icon4 name='favorite' size={25} color={'black'} />
          </View>
          {/* Text and comment */}
          <View>
            <Text>{item.isLiked ? (`Like by you and ${item.likes} person`) : (`Like by ${item.likes} person`)}</Text>
            <Text style={styles.title}>Chúc bạn có một ngày tốt lành nhé!</Text>
            <Text>View all comment</Text>
            <View style={styles.wrapComment}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={styles.postAvatarComment}
                  source={item.postPersonImage} />
                <TextInput
                  style={styles.txtInputComment}
                  placeholder='Add a comment' />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Icon
                  style={styles.bottomIconLeft}
                  name='emoji-happy' color={'black'} size={25} />
                <Icon
                  style={styles.bottomIconLeft}
                  name='emoji-neutral' color={'black'} size={25} />
                <Icon name='emoji-sad' color={'black'} size={25} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const handleClickHeartEvent = (item: any) => {
    const dataNew = data.filter((itemX: any) => {
      if (itemX.id === item.id) {
        itemX.isLiked = !itemX.isLiked;
      }
      return itemX;
    });
    setData(dataNew);
  }
  return (
    <>
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 25,
  },
  wrapPost: {
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  wrapAvatarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    fontFamily: 'Lobster-Regular',
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  wrapImagePost: {
    width: '100%',
    height: 400,
  },
  imagePost: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  bottomWrapper: {
    padding: 20,
  },
  wrapAction: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomLeft: {
    flexDirection: 'row',
  },
  bottomIconLeft: {
    paddingRight: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black'
  },
  postAvatarComment: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  wrapComment: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtInputComment: {
    borderBottomColor: 'grey',
    paddingLeft: 10,
  }
})
export default Post