import { useNavigation } from '@react-navigation/native'
import { NavigationActions, StackActions } from "react-navigation";

type Props = {
    routeName: string;
    params: object
}

const config: any = {};

export function setNavigator(nav: any) {
    if (nav) {
        config.navigator = nav;
    }
}

export function navigate({ routeName, params }: Props) {
    if (config.navigator && routeName) {
        let action = NavigationActions.navigate({ routeName, params });
        config.navigator.dispatch(action);
    }
}