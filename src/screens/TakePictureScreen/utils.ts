export function handleFlashMode(flash: boolean){
    if (flash) return 'on'
    return 'off'
}

export async function takePicture(camRef: any, setPhoto: Function){
    if(camRef){
        const data = await camRef.current.takePictureAsync()
        setPhoto(data)
    }
}