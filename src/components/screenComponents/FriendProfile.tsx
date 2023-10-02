import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { BodyProfile, ProfileButton } from './BodyProfile';
import { FriendProfileData } from './DataBase';

const FriendProfile = ({ navigation, route }: any) => {
    const userProfile = route.params.data;
    return (
        <View style={styles.container}>
            <View style={styles.layoutWrapper}>
                {/* Header area */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Icon name='arrow-back' color={'black'} size={30} />
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <Text style={styles.txtName}>{userProfile.profileName}</Text>
                        <TouchableOpacity>
                            <Icon2 name='dots-three-vertical' size={20} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 40, paddingVertical: 10, }}>
                    <BodyProfile userProfile={userProfile} />
                </View>
                <ProfileButton />
                <View
                    style={{ marginTop: 50 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            FriendProfileData.map((item, index) => (
                                item.id === userProfile.id ? null : <View
                                    key={index}
                                    style={{ marginRight: 20, width: 160, height: 185, borderWidth: 0.5, borderColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                    <Icon3 style={{ position: 'absolute', top: 5, right: 5 }} name='close' size={30} color={'grey'} />
                                    <Image
                                        style={{ width: 85, height: 85, borderRadius: 50 }}
                                        source={item.profileImage} />
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.profileName}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    layoutWrapper: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    txtName: {
        color: 'black',
        fontSize: 18,
        fontFamily: "Lobster-Regular",
        marginLeft: 10,
    }
})
export default FriendProfile