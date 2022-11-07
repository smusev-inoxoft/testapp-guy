import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FeedScreen, NotificationsScreen, ProfileScreen } from '../screens';
import { BottomMenuParamList } from './types';

const Tab = createMaterialBottomTabNavigator<BottomMenuParamList>();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="FeedScreen"
            activeColor="#e45e63"
            barStyle={{ backgroundColor: 'white' }}
            screenOptions={{
            }}
        >
            <Tab.Screen
                name="FeedScreen"
                component={FeedScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabsNavigator;
