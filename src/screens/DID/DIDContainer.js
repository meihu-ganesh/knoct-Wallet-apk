import React from "react";
import {  FlatList, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";
// import { Button } from "react-native-elements";
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
                <FlatList
                data={userDIDs}
                renderItem={(item)=>
                    <View style={styles.previewBox}>
                        <View style={styles.boxTop}>
                            <Text style={styles.didName}>{item.item.dIDName}</Text>
                            <Text>More</Text>
                        </View>
                        <View style={styles.boxBottom}>
                            <Text style={styles.didValue}>{item.item.dID}</Text>
                            <View style={styles.btnContainer}>
                                <Button
                                    title="Share"
                                    color="#3f1"
                                    type="outline"
                                />
                                {/* <Button title="Share" onPress={()=>{console.warn(item.item.dIDName);}}/> */}
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={item=>item.id}
            />
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
        padding: 15,
    },
    boxTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    boxBottom: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    didName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    didValue: {
        width: 200,
    },
    btnContainer: {
        width: 100,
    },

});


export default DIDContainer;
