import React from "react";
import { View, Text } from 'react-native'
import { Button } from "../../components/Button";
import { colors } from "../../global/colors";
import { navigate } from "../../services/navigation";

export function HomeScreen() {
    return (
        <View>
            <Text>
                HOME SCREEN
            </Text>
            <Button
                text='Use another account'
                OnPress={() => {
                    navigate({routeName: 'LoginScreen', params: {}})
                }}
                textColor={colors.dark_gray}
                extraStyle={{
                    marginTop: 300,
                    backgroundColor: colors.white,
                    borderColor: colors.dark_gray,
                    borderWidth: 2,
                }}
            />
        </View>
    )
}