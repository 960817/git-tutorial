import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen'
const Stack = createNativeStackNavigator();
const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Main" component={MainScreen} options={{
				headerShown : false
			}}/>
			<Stack.Screen name="Detail" component={DetailScreen} />
		</Stack.Navigator>
	)
}

export default RootStack
