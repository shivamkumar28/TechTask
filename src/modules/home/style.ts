import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    itemContainer: {
        flex: 1,
        margin: 8,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: Colors.white,
        elevation: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    imgView: {
        width: 90,
        height: 90,
        padding: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden'
    },
    fullView: {
        width: '100%',
        height: '100%',
    },
    detailView: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-around',
    },
    name: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.black
    },
    subTitle: {
        fontSize: 15,
        color: Colors.black
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5
    },
    green: {
        width: 8,
        height: 8,
        borderRadius: 5,
    },
    species: {
        fontSize: 12,
        color: Colors.black
    },
    switchV: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    searchV: {
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        margin: 8,
        borderRadius: 8,
        paddingHorizontal: 8

    }
})