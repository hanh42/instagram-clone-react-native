import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
                {/* header */}
                <View style={styles.header}>
                    <Pressable
                        onPress={() => {
                            console.log('add');
                        }}>
                        <Icon name='plus-square-o' size={30} color={'black'} />
                    </Pressable>
                    <Text style={styles.brand}>Instagram</Text>
                    <Pressable
                        onPress={() => {
                            console.log('send');
                        }}
                    >
                        <Icon name='send-o' size={30} color={'black'} />
                    </Pressable>
                </View>
                <View>
                    {/* Stories */}
                    <ScrollView>
                        <Stories />
                        <Post />
                    </ScrollView>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    brand: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Lobster-Regular'
    }
})
export default Home
