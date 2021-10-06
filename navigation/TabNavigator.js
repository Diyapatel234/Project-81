import  React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
       <Tab.Navigator 
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => { 
          let iconName; 
          if (route.name === 'Feed') { 
            iconName = focused 
            ? 'book' 
            : 'book-outline'; 
            } 
        else if (route.name === 'CreateStory') { 
          iconName = focused 
          ? 'create' 
          : 'create-outline'; 
          } 
          return <Ionicons name={iconName} size={size} color={color} />; 
          }, 
        })} 
          tabBarOptions={{ 
            activeTintColor: 'orange', 
            inactiveTintColor: 'gray', 
            }} > 
        <Tab.Screen name="Feed" component={Feed} /> 
        <Tab.Screen name="CreateStory" component={CreateStory} /> 
      </Tab.Navigator>
    )
}
export default BottomTabNavigator