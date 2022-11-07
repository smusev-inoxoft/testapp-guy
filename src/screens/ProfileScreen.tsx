import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../shared";

const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.centerText}>You are not logged in</Text>
            <MaterialCommunityIcons name="account-cancel" color={'grey'} size={36} />
        </View>
    )
}

export default ProfileScreen;
