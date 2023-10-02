import { View, Text, StyleSheet, StatusBar, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';
const Status = ({ route, navigation }: any) => {
    // Variable
    let timer: any;
    let animation: any;
    const { id, name, image } = route.params.data;
    const [progress] = useState(new Animated.Value(0));
    // Function
    const handleClickIconClose = () => {
        navigation.goBack();
    }

    const handlePauseStory = () => {
        console.log('pause');
        clearTimeout(timer);
        animation.stop();
    }

    useEffect(() => {
        timer = setTimeout(() => {
            handleClickIconClose();
        }, 5000);
        animation = Animated.timing(progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        }).start();

        return () => {
            clearTimeout(timer)
        };
    }, []);


    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
                {/* Top */}
                <View style={styles.top}>
                    <View style={styles.topHeader}>
                        <Animated.View style={{
                            width: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0%', '100%'] // Increase the width from 0% to 100%
                            }),
                            height: 2,
                            backgroundColor: '#fff',
                            position: 'absolute',
                        }} />
                    </View>
                    <View style={styles.wrapInfo}>
                        <View style={styles.topLeft}>
                            <Image
                                style={styles.avatar}
                                source={image} />
                            <Text style={styles.name}>{name}</Text>
                        </View>
                        <Pressable
                            onPress={handleClickIconClose}>
                            <Icon name='close' size={25} color={'#fff'} />
                        </Pressable>
                    </View>
                </View>
                {/* Body */}
                <Pressable
                    onLongPress={() => handlePauseStory()}
                    style={styles.body}>
                    <Image source={image} style={styles.image} />
                </Pressable>
                {/* Bottom */}
                <View style={styles.bottom}>
                    <View style={styles.bottomAction}>
                        <TextInput
                            multiline={true}
                            placeholderTextColor={'#fff'}
                            style={styles.txtInput}
                            placeholder='Send message' />
                        <Icon2 name='send-o' size={20} color={'#fff'} />
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    top: {
        paddingHorizontal: 10,
        flex: 1.5,
    },
    body: {
        flex: 10,
    },
    bottom: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff'
    },
    wrapInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        paddingLeft: 10,
    },
    topHeader: {
        width: '100%',
        height: 2,
        backgroundColor: 'grey',
        marginVertical: 10,
    },
    txtInput: {
        width: '70%',
        height: '90%',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 20,
        color: '#fff'
    },
    bottomAction: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
export default Status