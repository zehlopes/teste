import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { RotaPrivada, RotasPrivadas } from "./RotasPrivadas";

const Stack = createNativeStackNavigator();

export const RotasPublicas = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{title:'Meu Login', headerShown: false}} />
        </Stack.Navigator>
    )
}