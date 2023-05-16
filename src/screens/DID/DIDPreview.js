import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";

const DIDPreview = () => {

    const userDIDs = [
        {
            id: 1,
            dIDName: "Default DID",
            dID : "did:key:gfdbdfvfd5s9r1r1vfd15v1d6v1d5vd0",
        },
        {
            id: 2,
            dIDName: "Ganesh DID",
            dID : "did:key:weqgtrjuyjftfd22545ar4bdn531se",
        },
    ];

    return (
        <View>
            {
                userDIDs.map((item) =>
                // console.warn(item.dIDName)
                // <Text>{item.dIDName}</Text>
                    <View style={styles.previewBox}>
                        <View style={styles.boxTop}>
                            <Text style={styles.holderDIDName}>{item.dIDName}</Text>
                            <Text>More</Text>
                        </View>
                        <View style={styles.boxBottom}>
                            {/* <Text style={styles.holderDIDValue}>{item.dID}</Text> */}
                            <Text>{item.dID}</Text>
                            <View>
                            {/* <View style={styles.btnContainer}> */}
                                <Button title="Share" color="#6f8" />
                            </View>
                        </View>
                    </View>
                    )}
        </View>
    );
};

const styles = StyleSheet.create({
    previewBox: {
        backgroundColor: "#1b1",
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
    },
    boxTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    // boxBottom: {
    //     flex: 1,
    //     flexDirection: "row",

    // },
    // holderDIDName: {
    //     fontSize: 20,
    //     fontWeight: "bold",
    // },
    // holderDIDValue: {
    //     fontSize: 15,
    // },
    // btnContainer: {
    //     width: 150,
    // }
});

export default DIDPreview;
