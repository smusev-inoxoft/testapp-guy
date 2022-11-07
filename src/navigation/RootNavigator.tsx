import React from "react";
import { RootStackParamList } from "./types";
import {HomeScreen} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: true
            }}
            initialRouteName="HomeScreen">
            <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Test app' }}
            />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
