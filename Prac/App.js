
import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Family Screen Time
            </Text>

            <Text style={styles.message}>
                Monitor your family's device usage
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#EAF2FF",
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 12,
    },

    message: {
        fontSize: 16,
        textAlign: "center",
        color: "#555555",
    },
});
