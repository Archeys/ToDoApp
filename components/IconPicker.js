import React, { useState } from "react";
import { View, StyleSheet, FlatList, ListItem } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import icons from "../constants/icons"
import colors from "../constants/colors"

const IconPicker = props => {
    const onSelectIcon = (iconName, iconColor) => {
        props.registerIcon({ name: iconName, color: iconColor });
    }

    return (
        <View style={styles.screen}>
            <View style={props.icon.name === icons.default ? styles.selectedIcon : styles.icon}>
                <Ionicons name={icons.default}
                    size={50}
                    color={colors.green}
                    onPress={() => onSelectIcon(icons.default, colors.green)} />
            </View>
            <View style={props.icon.name === icons.person ? styles.selectedIcon : styles.icon}>
                <Ionicons
                    name={icons.person}
                    size={50}
                    color={colors.red}

                    onPress={() => onSelectIcon(icons.person, colors.red)} />
            </View>
            <View style={props.icon.name === icons.school ? styles.selectedIcon : styles.icon}>
                <Ionicons
                    name={icons.school}
                    size={50}
                    color={colors.purple}
                    onPress={() => onSelectIcon(icons.school, colors.purple)} />
            </View>
            <View style={props.icon.name === icons.star ? styles.selectedIcon : styles.icon}>
                <Ionicons
                    name={icons.star}
                    size={50}
                    color={colors.orange}

                    onPress={() => onSelectIcon(icons.star, colors.orange)} />
            </View>
            <View style={props.icon.name === icons.trophy ? styles.selectedIcon : styles.icon}>
                <Ionicons
                    name={icons.trophy}
                    size={50}
                    color={colors.grey}
                    onPress={() => onSelectIcon(icons.trophy, colors.grey)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%"
    },
    icon: {
        padding: 5
    },
    selectedIcon: {
        borderRadius: 10,
        opacity: 0.6,
        borderWidth: 2,
        borderStyle: "dotted",
        justifyContent: "center",
        padding: 2
    }
})

export default IconPicker;
