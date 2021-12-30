export function handleFlashMode(flash: boolean){
    if (flash) return 'on'
    return 'off'
}

export function takePicture(camera: any){
    camera.takePictureAsync()
}