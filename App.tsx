import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import các màn hình của bạn ở đây
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';

//  Variable area
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            color = focused ? 'black' : color;
            size = focused ? size + 8 : size;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
            size = focused ? size + 8 : size;
            color = focused ? 'black' : color;
          } else if (route.name === 'Reels') {
            iconName = focused ? 'play-circle-o' : 'play-circle-o';
            size = focused ? size + 8 : size;
            color = focused ? 'black' : color;
          } else if (route.name === 'Activity') {
            iconName = focused ? 'heart-o' : 'heart-o';
            size = focused ? size + 8 : size;
            color = focused ? 'black' : color;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
            size = focused ? size + 8 : size;
            color = focused ? 'black' : color;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Reels' component={Reels} />
      <Tab.Screen name='Activity' component={Activity} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
