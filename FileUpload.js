import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Modal,
  ActivityIndicator
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import PDFReader from "rn-pdf-reader-js";

const FileUploadStack = createStackNavigator();

const FileUpload = ({ navigation }) => {
  return (
    <FileUploadStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#009387" },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "sans-serif-condensed",
        },
        headerTitle: "File Upload",
      }}
    >
      <FileUploadStack.Screen
        name="File Upload"
        component={FileUploadScreen}
        options={{
          headerLeft: () => (
            <Entypo
              name="menu"
              size={24}
              color="#fff"
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </FileUploadStack.Navigator>
  );
};

const FileUploadScreen = () => {

  const [url, seturl] = useState("");
  const [showpdf, setshowpdf] = useState(false);
  const [modal,setmodal] = useState(false)

  const modalfn = () =>{
      setmodal(true)
      setTimeout(() => {
          setmodal(false)
      }, 2000);
  }
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    modalfn()
    seturl(result.uri)
  };
  return (
    <View style={styles.container}>
      {!showpdf ? (
        <View>
          <Text style={{ textAlign: "center" }}>UPLOAD FILE{"\n"}</Text>
          <Button title="Click to upload" onPress={pickDocument} />
        </View>
      ) : null}
      {url !== "" ? (
        <View>
          {!showpdf ? (
            <View>
              <Text
                style={{ color: "green", fontSize: 20, textAlign: "center" }}
              >
                {"\n"}PDF UPLOADED{"\n"}
              </Text>
              <Button
                title="Tap to see"
                onPress={() => {
                  setshowpdf(true);
                  modalfn()
                  //   console.log(showpdf,"see");
                }}
              />
            </View>
          ) : (
            <Button
              title="Tap to close"
              onPress={() => {
                setshowpdf(false);
                //   console.log(showpdf,"close");
              }}
              color="red"
            />
          )}
          {showpdf == true ? (
            <PDFReader
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                marginBottom: "7%",
              }}
              source={{
                uri: url,
              }}
            />
          ) : null}
        </View>
      ) : null}
      <Modal transparent={true} visible={modal}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={styles.innermodal}>
            <Text style={{textAlign:'center',fontWeight:'bold'}}>Please Wait....{"\n\n"}</Text>
            <ActivityIndicator size="large" style={{flex:1,alignContent:'center'}} color="#000"/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innermodal: {
    backgroundColor: "#fff",
    margin: "25%",
    marginTop: "60%",
    padding: "10%",
    borderRadius: 10,
    flex:0.35
  },
});

export default FileUpload;
