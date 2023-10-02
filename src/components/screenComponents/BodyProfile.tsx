import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
export const BodyProfile = ({ userProfile }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapItem1}>
                <Image
                    style={styles.avatar}
                    source={userProfile.profileImage} />
                <Text style={styles.wrapItem1TxtName}>{userProfile.profileName}</Text>
            </View>
            <View style={styles.wrapItem1}>
                <Text style={styles.wrapItem1TxtOn}>{userProfile.post}</Text>
                <Text style={styles.wrapItem1TxtUnder}>Post</Text>
            </View>
            <View style={styles.wrapItem1}>
                <Text style={styles.wrapItem1TxtOn}>{userProfile.followers}</Text>
                <Text style={styles.wrapItem1TxtUnder}>Follower</Text>
            </View>
            <View style={styles.wrapItem1}>
                <Text style={styles.wrapItem1TxtOn}>{userProfile.following}</Text>
                <Text style={styles.wrapItem1TxtUnder}>Following</Text>
            </View>
        </View>
    )
}



export const ProfileButton = (id: any) => {
    const [like, setLike] = useState(false);
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => setLike(!like)}
                    style={like ? [styles.ProfileButtonHeader, { borderWidth: 0.5 }] : [styles.ProfileButtonHeader, { backgroundColor: '#38b6ff' }]}>
                    <Text>
                        Follow
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ProfileButtonHeader, { borderWidth: 0.5, borderColor: 'grey' }]}>
                    <Text>
                        Messenger
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapDropDown}>
                    <Icon name='angle-down' size={30} color={'black'} />
                </TouchableOpacity>
            </View>
        </View >
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    wrapItem1: {
        alignItems: 'center'
    },
    wrapItem1TxtName: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapItem1TxtUnder: {
        color: 'grey'
    },
    wrapItem1TxtOn: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    ProfileButtonHeader: {
        width: '42%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapDropDown: {
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})