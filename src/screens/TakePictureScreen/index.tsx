import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, Platform } from "react-native";
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { handleFlashMode, takePicture, readImageAsBase64 } from "./utils";

import { Button } from "../../components/Button";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";
import { goBack, navigate } from "../../services/navigation";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Macro } from "../../components/Macro";

import { api } from "../../services/api";
import { showMessage } from "react-native-flash-message";

export function TakePictureScreen() {
    const camRef = useRef(null)

    const [loading, setLoading] = useState(false)
    const [hasPermission, setHasPermission] = useState('pending');
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [enableFlash, setEnableFlash] = useState(false)
    const [capturedPhoto, setCapturedPhoto] = useState({ uri: '', widht: null, height: null })
    const [photoPreview, setPhotoPreview] = useState(false)
    const [receivedPhoto, setReceivedPhoto] = useState(null)
    const [macros, setMacros] = useState({'protein': 0, 'carb': 0, "fat": 0})

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

    async function sendPicture() {
        try {
            setLoading(true)
            const base64 = await readImageAsBase64(capturedPhoto.uri)
            const res = await api.post('model', { data: base64 }).then(
                (response) => {
                    setMacros(response.data.data[0]['macro_nutrients'])
                    const base64_string = response.data.data[0]['prediction']
                    const img = base64_string.split('\'')[1]
                    setReceivedPhoto(img)
                }
            )
        } catch (error: any) {
            showMessage({
                message: error,
                icon: 'danger',
                type: 'danger',
            });
        }
        finally {
            setLoading(false)
        }
    }

    if (photoPreview) {
        return (
            <SafeAreaView style={styles.previewContainer}>
                <Header onBackPress={() => setPhotoPreview(false)} onCancelPress={() => goBack()} />
                <Image
                    style={styles.photoPreview}
                    source={
                        receivedPhoto ?
                            { uri: 'data:image/jpeg;base64,' + receivedPhoto } :
                            { uri: capturedPhoto.uri }}
                />
                {receivedPhoto ?
                    (
                        <View style={styles.identified}>

                            <View style={styles.macros}>
                                <Macro title={"protein"} value={macros['protein']} carb={false} />
                                <Macro title={"carb"} value={macros['carb']} carb={true} />
                                <Macro title={"fat"} value={macros['fat']} carb={false} />

                            </View>

                        </View>
                    )
                    : (
                        <Button
                            loading={loading}
                            text='Send'
                            OnPress={() => sendPicture()}
                            textColor={colors.white}
                            extraStyle={{
                                backgroundColor: colors.background,
                            }}
                        />
                    )
                }

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
                        setReceivedPhoto(null)
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