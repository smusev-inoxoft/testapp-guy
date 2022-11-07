import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../shared";

const NotificationsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.centerText}>You have no notifications</Text>
            <MaterialCommunityIcons name="bell-off" color={'grey'} size={36} />
        </View>
    )
}

export default NotificationsScreen;
