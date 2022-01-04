import * as FileSystem from 'expo-file-system';

export function handleFlashMode(flash: boolean) {
    if (flash) return 'on'
    return 'off'
}

export async function takePicture(camRef: any, setPhoto: Function) {
    if (camRef) {
        const data = await camRef.current.takePictureAsync()
        setPhoto(data)
    }
}

export async function readImageAsBase64(imagePath: string) {
    const data = await FileSystem.readAsStringAsync(imagePath, {encoding: FileSystem.EncodingType.Base64})
    return data
}