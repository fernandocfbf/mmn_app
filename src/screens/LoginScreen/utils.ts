import AsyncStorage from '@react-native-async-storage/async-storage';


export function closeModal(modalRef: any) {
    if (modalRef.current != null) modalRef.current.close()
}

export function openModal(modalRef: any) {
    if (modalRef.current != null) modalRef.current.open()
}

export async function isAlredyLogged(modalRef: any, alternative?: any, elseCondition?: boolean) {
    await AsyncStorage.getItem('email').then((alreadyLogged) => {
        if (alreadyLogged && modalRef.current != null) modalRef.current.open()
        else if (elseCondition && alternative != null) alternative.current.open()
    })
}

export async function getUserInitials(setName: any) {
    return AsyncStorage.getItem('username').then((name) => {
        if (name) {
            const fullName = name.split(' ');
            const initials = fullName[0].charAt(0) + fullName[1].charAt(0);
            setName(initials);
        }
    })
}