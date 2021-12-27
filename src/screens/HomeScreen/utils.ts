import AsyncStorage from '@react-native-async-storage/async-storage';

export function handleTime() {
    const currentHour = new Date().getHours()
    if (currentHour < 12) return 'Good morning'
    else if (currentHour < 18) return 'Good afternoon'
    return 'Good night'
}