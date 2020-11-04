import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableHighlightComponent, TouchableHighlightBase } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, Switch, TouchableRipple } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function DrawerContent(props) {

    const [isDarkTheme, SetIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        SetIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInterface}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg'
                                }}
                                size={90}
                            />
                            <View style={{ marginLeft: 8 }}>
                                <Title style={styles.title}>Crimson Innovative {"\n"} Technologies</Title>
                                <Caption style={styles.captions}>Welcome User!</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawersection} >
                        <TouchableNativeFeedback>
                            <DrawerItem
                                label="Home"
                                labelStyle = {  styles.labelstyle }
                                icon={(Color) => (
                                    <MaterialCommunityIcons
                                        name="home"
                                        size={23}
                                         />
                                )}
                                onPress={() => { props.navigation.navigate('Home') }}
                            >
                            </DrawerItem>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <DrawerItem
                                label="FileUpload"
                                labelStyle = {  styles.labelstyle }
                                icon={(Color) => (
                                    <MaterialCommunityIcons
                                        name="file"
                                        size={23}
                                         />
                                )}
                                onPress={() => { props.navigation.navigate('FileUpload') }}
                            >
                            </DrawerItem>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <DrawerItem
                                label="Explore"
                                labelStyle = {  styles.labelstyle }
                                icon={(Color) => (
                                    <MaterialIcons
                                        name="explore"
                                        size={23}
                                         />
                                )}
                                onPress={() => {  }}
                            >
                            </DrawerItem>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                            <DrawerItem
                                label="contact"
                                labelStyle = {  styles.labelstyle }
                                icon={(Color) => (
                                    <MaterialCommunityIcons
                                        name="account"
                                        size={23}
                                         />
                                )}
                                onPress={() => {  }}
                            >
                            </DrawerItem>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback>
                        <DrawerItem
                            label= 'Settings'
                            labelStyle = {  styles.labelstyle }
                            icon={(Color) => (
                                <MaterialCommunityIcons
                                    name="settings"
                                    size={23}
                                     />
                            )}
                            onPress={() => { }}
                        >
                        </DrawerItem>
                        </TouchableNativeFeedback>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preferences}>
                                <Text style={{fontFamily: "sans-serif-condensed"}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <DrawerItem
                label="Sign out"
                labelStyle = {  styles.labelstyle }
                icon={(color, size) => (
                    <MaterialCommunityIcons
                        name="exit-to-app"
                        size={size}
                         />
                )}
            >

            </DrawerItem>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInterface: {
        paddingLeft: 20
    },
    title: {
        fontSize: 19,
        marginTop: 3,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontFamily: "sans-serif-condensed"
    },
    labelstyle : {
        fontFamily: "sans-serif-condensed",
        fontWeight :'bold',
        fontSize: 15
    },
    captions: {
        fontSize: 14,
        lineHeight: 14,
        fontFamily: "sans-serif-condensed"
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragragh: {
        fontWeight: 'bold',
        marginRight: 15,
        fontFamily: "sans-serif-condensed"
    },
    drawersection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});