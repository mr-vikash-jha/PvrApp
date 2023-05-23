import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: ''}}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreens}
          options={{tabBarLabel: 'Home', tabBarLabelStyle: {color: 'black'},
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused ? (
            <Icon name="home" size={30} color="#900" />
          ) :(
            <Icon name="home" size={30} color='green' />
          ),
        }} 
        />
          <Tab.Screen
          name="ProfileScreen"
          component={ProfileStackScreens}
          options={{tabBarLabel: 'profile', tabBarLabelStyle: {color: 'black'},
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused ? (
            <Icon name="person" size={30} color="#900" />
          ) :(
            <Icon name="person-outline" size={30} color='green' />
          ),
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
