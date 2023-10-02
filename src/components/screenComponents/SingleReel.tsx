import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Image, Pressable } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/Entypo'
import Icon6 from 'react-native-vector-icons/Ionicons'
import Icon7 from 'react-native-vector-icons/Entypo'
import Icon8 from 'react-native-vector-icons/Octicons'
import Icon9 from 'react-native-vector-icons/AntDesign'

type Props = {
    item: any,
    index: number,
    currentIndex: number
}

const { width, height } = Dimensions.get('screen');

const SingleReel = ({ item, index, currentIndex }: Props) => {

    const videoRef = useRef<Video>(null);

    const onBuffer = (event: any) => {
        console.log('buffering', event);
    }

    const onError = (event: any) => {
        console.log('error', event);
    }


    const [mute, setMute] = useState(false);

    const [pause, setPause] = useState(false);

    const [like, setLike] = useState(false);

    return (
        <View style={styles.wrapVideo}>
            <TouchableOpacity
                onPress={() => setPause(!pause)}
                style={styles.container}
            >
                <Video
                    ref={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode='contain'
                    paused={currentIndex !== index || pause}
                    source={item.video}
                    // Tat am thanh
                    muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </TouchableOpacity>
            {
                pause && <Icon7
                    style={styles.muteIcon}
                    name='controller-play' size={30} color={'#fff'} />
            }
            <View style={styles.wrapInfoReel}>
                <View style={styles.left}>
                    <View style={styles.leftChildren}>
                        <View style={styles.wrapAuthorInfo}>
                            <Image
                                style={styles.avatar}
                                source={item.postProfile} />
                            <Text style={styles.name}>Clara santa</Text>
                        </View>
                        <Text
                            numberOfLines={1}
                            style={styles.txtDescriptionLyrics}>Sound of the sad lyrics</Text>
                        <View style={styles.leftLyrics}>
                            <Icon2 name='musical-notes' size={25} color={'#fff'} />
                            <Text style={styles.txtLyrics}>Lan man</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.rightChildren}>
                        <View style={styles.heart}>
                            <TouchableOpacity
                                onPress={() => setLike(!like)}
                                style={styles.iconRight}>
                                {
                                    like ? (
                                        < Icon name='heart' size={25} color={'#fff'} />
                                    ) : (
                                        <Icon9 name='heart' size={25} color={'red'} />
                                    )
                                }
                                <Text style={[styles.numberHeart]}>251k</Text>

                            </TouchableOpacity>
                            <Icon4
                                style={styles.iconRight}
                                name='chatbubble-outline' size={29} color={'#fff'} />
                            <Icon
                                style={styles.iconRight}
                                name='send' size={25} color={'#fff'} />
                            <Icon5
                                style={styles.iconRight}
                                name='dots-three-vertical' size={20} color={'#fff'} />
                            <TouchableOpacity
                                onPress={() => setMute(!mute)}
                            >
                                {
                                    mute ? (
                                        <Icon6
                                            style={styles.iconRight}
                                            name='volume-mute-outline' size={30} color={'#fff'} />
                                    ) : (
                                        <Icon8
                                            style={styles.iconRight}
                                            name='unmute' size={30} color={'#fff'} />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapVideo: {
        width: width,
        height: height,
        position: 'relative',

    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
    },
    muteIcon: {
        position: 'absolute',
        top: height / 2.3,
        left: width / 2.3,
        backgroundColor: 'rgba(52,52,52,0.8)',
        padding: 10,
        borderRadius: 30
    },
    wrapInfoReel: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        bottom: 150,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    leftLyrics: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtLyrics: {
        color: '#fff',
        fontFamily: 'Lobster-Regular',
        fontSize: 18,
        marginStart: 10,
    },
    txtDescriptionLyrics: {
        color: '#fff',
        paddingVertical: 5,
    },
    wrapAuthorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    leftChildren: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    name: {
        marginStart: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    rightChildren: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    numberHeart: {
        color: '#fff',
        fontWeight: 'bold'
    },
    iconRight: {
        marginVertical: 5,
    },
    avatarRight: {
        marginTop: 5,
        width: 45,
        height: 45,
        borderRadius: 5,
    }
})

export default SingleReel;
