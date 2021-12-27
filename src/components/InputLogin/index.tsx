import React from "react";
import { Input } from "react-native-elements"

type Props = {
    placeholder: string;
    icon: any;
    onChange: any;
    password ?: boolean
}

export function InputLogin({placeholder, icon, onChange, password}: Props) {
    return (
        <Input
            placeholder={placeholder}
            autoCapitalize="none"
            leftIcon={icon}
            onChangeText={onChange}
            secureTextEntry={password}
        />
    )
}