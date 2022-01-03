import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, Platform } from "react-native";
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { handleFlashMode, takePicture } from "./utils";

import { Button } from "../../components/Button";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";
import { goBack, navigate } from "../../services/navigation";
import { styles } from "./styles";
import { Header } from "../../components/Header";

export function TakePictureScreen() {
    const camRef = useRef(null)
    const [hasPermission, setHasPermission] = useState('pending');
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [enableFlash, setEnableFlash] = useState(false)
    const [capturedPhoto, setCapturedPhoto] = useState({ uri: '', widht: null, height: null })
    const [photoPreview, setPhotoPreview] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status);
        })();
    }, []);

    useEffect(() => {
        if (hasPermission === 'denied') {
            navigate({ routeName: 'HomeScreen', params: {} })
        }
    }, [hasPermission]);

    if (photoPreview) {
        return (
            <SafeAreaView style={styles.previewContainer}>
                <Header onBackPress={() => setPhotoPreview(false)} onCancelPress={() => goBack()}/>
                <Image
                    style={styles.photoPreview}
                    source={{ uri: capturedPhoto.uri }}
                />
                <Button
                    loading={false}
                    text='Send'
                    OnPress={() => {console.log('Pressed!')}}
                    textColor={colors.white}
                    extraStyle={{
                        backgroundColor: colors.background,
                    }}
                />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={{ flex: 1 }}
                type={cameraType} flashMode={handleFlashMode(enableFlash)}
                ref={camRef} />
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
                    onPress={async () => {
                        await takePicture(camRef, setCapturedPhoto)
                        setPhotoPreview(true)
                    }}
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