import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import SearchScreen from "./SearchScreen"
import NotificationScreen from "./NotificationScreen"
import MessageScreen from "./MessageScreen"
const Tab = createBottomTabNavigator();
const MainScreen = () => {
	return (
		<Tab.Navigator initialRouteName="Home" tabBarOptions={{
			activeTintColor: '#fb8c00',
			showLabel: false,
		}}>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				title : '홈',
				tabBarIcon : ({color, size}) => (
					<Icon name= "home" color={color} size={size} />
				)
			}}/>
			<Tab.Screen name="Search" component={SearchScreen} options={{
				title : '검색',
				tabBarIcon : ({color, size}) => (
					<Icon name = "search" color={color} size={size} />
				)
			}}/>
			<Tab.Screen name="Notification" component={NotificationScreen} options={{
				title : "알림",
				tabBarIcon : ({color, size}) => (
					<Icon name = "notification" csolor={color} size={size}/>
				)
			}}/>
			<Tab.Screen name="Message" component={MessageScreen} options={{
				title : "메세지",
				tabBarIcon : ({color, size}) => (
					<Icon name = "message" color={color} size={size} />
				)
			}}/>
		</Tab.Navigator>
	)
}

export default MainScreen
