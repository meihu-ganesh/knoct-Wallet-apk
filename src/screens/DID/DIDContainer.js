import React, {useState} from "react";
import {  FlatList, View, Text, StyleSheet, Modal, StatusBar } from "react-native";
import { Button, TouchableHighlight } from "react-native";
// import { Button } from "react-native-elements";
import DIDPreview from "./DIDPreview";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';

const DIDContainer = (props) => {
    
    const selectFile = async () => {
        try {
            const file = await DocumentPicker.pickSingle({});
            console.warn(file);
            console.warn(file.uri);
        } catch (error) {
            if(DocumentPicker.isCancelableError(error)) {
                console.warn("User cancelled the upload" ,error);
            }
            if(DocumentPicker.isCancel(error)){
                console.warn("User cancelled the upload", error);
            }
        }
        
    };
    let displayModal = props.show
    const [showModal, setShowModal] = useState(displayModal);
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
    // const value = props

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
                            <View>
                                <TouchableHighlight onPress={()=> console.warn("More")}>
                                    <Ionicons name="ellipsis-vertical" size={24} color={"#333"} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.boxBottom}>
                            <Text style={styles.didValue}>{item.item.dID}</Text>
                            <View style={styles.btnContainer}>
                                <Button
                                    title="Share"
                                    color="#5f5"
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
            <View>
                <Modal transparent={true} visible={props.show}>
                    <StatusBar 
                        hidden={true}
                    />
                    <View style={{backgroundColor: "#000000aa", flex:1, justifyContent:"flex-end"}}>
                        <View style={styles.bottomModal}>
                            <View style={{flex:0.5 , flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={styles.topHeading}>Add DID</Text>
                            <TouchableHighlight onPress={()=> props.setShowModal(false)}>
                                <Ionicons name="close-outline" size={27} color={"#333"}/>
                            </TouchableHighlight>
                            </View>
                            <TouchableHighlight style={{marginVertical: 0}}>
                                <View style={styles.addDIDContainer}>
                                    <Ionicons name="add-circle-outline" size={25} color={"#333"} />
                                    <View style={{flex: 1, alignContent: "flex-start", marginHorizontal: 15,}}>
                                        <Text style={styles.didName}>Create DID</Text>
                                    </View>
                                    <Ionicons name="chevron-forward-outline" size={20} color={"#333"}/>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{marginVertical: 0}} onPress={selectFile}>
                                <View style={styles.addDIDContainer}>
                                    <Ionicons name="code-download-outline"  size={25} color={"#333"} style={{transform: [{rotate: '180deg'}]}} />
                                    <View style={{flex: 1, alignContent: "flex-start", marginHorizontal: 15,}}>
                                        <Text style={styles.didName}>Import DID</Text>
                                    </View>
                                    <Ionicons name="chevron-forward-outline" size={20} color={"#333"}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal> 
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
    bottomModal:{
        flex: 0.4,
        // height: 100,
        marginHorizontal: 1,
        padding: 20,
        borderRadius: 25,
        backgroundColor: "#eee",
        justifyContent: "flex-start",
    },
    addDIDContainer :{
        // flex: 1,
        flexDirection: "row",
        textAlignVertical: "center",
        justifyContent: "space-between",
        padding: 10,
        marginVertical: 10,
    },
});


export default DIDContainer ;
