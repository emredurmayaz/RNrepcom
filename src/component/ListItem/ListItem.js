import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
<View style={styles.placeName}>
    <Text>{props.placeName}</Text>
</View>
</TouchableOpacity>
);
const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ca9"
    }
});

export default listItem;