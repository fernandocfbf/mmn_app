import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { handleFlashMode, takePicture } from "./utils";

import { Button } from "../../components/Button";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";
import { navigate } from "../../services/navigation";
import { styles } from "./styles";

export function TakePictureScreen() {
    let camera: Camera

    const [hasPermission, setHasPermission] = useState('pending');
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [enableFlash, setEnableFlash] = useState(false)

    console.log(hasPermission)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status);
        })();
    }, []);

    useEffect(() => {
        if (hasPermission === 'denied') {
            navigate({ routeName: 'HomeScreen', params: {} })
        }
    }, [hasPermission]);

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={{ flex: 1 }}
                type={cameraType} flashMode={handleFlashMode(enableFlash)}
                ref={(r) => {
                    camera = r
                }} />
            <View style={styles.content}>
                <MaterialIcons
                    name='flip-camera-android'
                    size={24}
                    color={colors.white}
                    onPress={() => {
                        setCameraType(
                            cameraType === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}
                />
                <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={() => camera.takePictureAsync()}
                >
                    <View style={styles.center} />
                </TouchableOpacity>

                <Ionicons
                    name={enableFlash ? 'flash' : 'flash-off'}
                    size={24} color={colors.white}
                    onPress={() => setEnableFlash(!enableFlash)}
                />
            </View>
        </SafeAreaView>

    )
}