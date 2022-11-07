import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: { fontSize: 16, marginBottom: 16 },
    textBold: { fontWeight: '600' },
    textLight: { fontWeight: '200' },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 24
    },
    listItemWrapper: { flexDirection: 'row', paddingVertical: 8 },
    listItemImage: { width: 50, height: 50, marginRight: 16, borderRadius: 4 }
});


export default styles;