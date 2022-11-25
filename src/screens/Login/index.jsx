import { Text, View, Button, TextInput } from "react-native";
import { styles } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { login } from "../../services/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { loginContext } = useContext(AuthContext)
    


    const handleLogin = async () => {
        loginContext()
    }

return (
    <View style={styles.container}>
        <Text>Login</Text>
        <TextInput placeholder="INSIRA SEU LOGIN" onChangeText={setUserName} value={userName}/>
        <TextInput placeholder="INSIRA SUA SENHA" onChangeText={setPassword} value={password}/>
        <Button title="ENTRAR" onPress={() => handleLogin() } />
    </View>
)
}