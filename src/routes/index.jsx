import { RotasPrivadas } from "./RotasPrivadas"
import { RotasPublicas } from "./RotasPublicas"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { View, ActivityIndicator } from "react-native"


export const Routes = () => {
    const { logado, loading } = useContext(AuthContext)

    if(loading) return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000GG" />
        </View> 
    )
    return logado ? <RotasPrivadas /> : <RotasPublicas />}
        
    