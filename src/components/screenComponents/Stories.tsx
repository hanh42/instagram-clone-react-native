import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
const storyInfo = [
    {
        id: 1,
        name: 'Your Story',
        image: require('./../storage/images/girl.png')
    },
    {
        id: 2,
        name: 'Nguyễn Thị A',
        image: require('./../storage/images/h1.jpg')
    },
    {
        id: 3,
        name: 'Nguyễn Thị B',
        image: require('./../storage/images/h2.jpg')
    },
    {
        id: 4,
        name: 'Nguyễn Thị C',
        image: require('./../storage/images/h3.jpg')
    },
    {
        id: 5,
        name: 'Nguyễn Thị D',
        image: require('./../storage/images/h4.jpg')
    },
    {
        id: 6,
        name: 'Nguyễn Thị E',
        image: require('./../storage/images/h5.jpg')
    },
    {
        id: 7,
        name: 'Nguyễn Thị F',
        image: require('./../storage/images/h6.jpg')
    },
]

type props = {
    navigation: any
}

const Stories = () => {
    // Variable 
    const navigation = useNavigation();
    // Functions
    const handleClickItemStoryEvent = (item: any) => {
        const data = {
            id: item.id,
            image: item.image,
            name: item.name,
        }
        navigation.navigate('Status', { data });
        
    }
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    storyInfo.map((item, index) => (
                        item.id === 1 ?
                            (
                                <View
                                    key={index}
                                    style={styles.containerStory}>
                                    <Pressable
                                        onPress={() => { handleClickItemStoryEvent(item) }}
                                        style={styles.wrapperStory}>
                                        <Image
                                            key={item.id}
                                            style={styles.image}
                                            source={item.image} />
                                        <Pressable
                                            onPress={() => {
                                                console.log('add more story');
                                            }}
                                            style={styles.icon}>
                                            <Icon
                                                name={'plus-circle'} size={25} color='black' />
                                        </Pressable>
                                    </Pressable>
                                    <View style={styles.wrapperName}>
                                        <Text
                                            numberOfLines={1}
                                            style={styles.txtName}>{item.name}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View
                                    key={index}
                                    style={styles.containerStory}>
                                    <Pressable
                                        onPress={() => { handleClickItemStoryEvent(item) }}
                                        style={styles.wrapperStory}>
                                        <Image
                                            key={item.id}
                                            style={styles.image}
                                            source={item.image} />
                                    </Pressable>
                                    <View style={styles.wrapperName}>
                                        <Text
                                            numberOfLines={1}
                                            style={styles.txtName}>{item.name}</Text>
                                    </View>
                                </View>
                            )
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    wrapperStory: {
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: '#c13584',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    wrapperName: {
        width: '100%',
        position: 'absolute',
        bottom: -2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStory: {
        paddingBottom: 15,
    },
    txtName: {
        color: 'black',
        fontSize: 12,
    }
})

export default Stories