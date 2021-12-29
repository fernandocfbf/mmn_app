import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Camera } from 'expo-camera';
import { Button } from "../../components/Button";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

export function TakePictureScreen() {
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    console.log(hasPermission)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (
        <Camera style={{ flex: 1 }} type={cameraType}>
            <Button
                OnPress = {() => console.log('picture taked')}
                text = {'something'} 
                textColor = {colors.white}
                extraStyle={{
                    position: 'absolute',
                    bottom: metrics.baseMargin,
                    backgroundColor: colors.background,
                }}
            />
        </Camera>
    )
}