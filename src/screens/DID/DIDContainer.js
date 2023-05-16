import React from "react";
import { Button, FlatList, View, Text, StyleSheet } from "react-native";
import DIDPreview from "./DIDPreview";

const DIDContainer = () => {

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
            <Text style={styles.topHeading}>Your DIDs</Text>
            <View>
                <DIDPreview />
                {/* <FlatList
                data={userDIDs}
                renderItem={(item)=>
                    <View style={styles.previewBox}>
                        <View style={styles.boxTop}>
                            <Text>{item.dIDName}</Text>
                            <Text>More</Text>
                        </View>
                        <View>
                            <Text>{item.dID}</Text>
                            <View>
                                <Button title="Share" />
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={item=>item.id}
            /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topHeading: {
        fontSize: 25,
        color: "#333",
        marginBottom: 20,
        
    },
    previewBox: {
        backgroundColor: "#afa",
        borderRadius: 20,
        marginBottom: 20,
    },
    boxTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});


export default DIDContainer;
