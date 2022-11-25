import { Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'

export const Detalhes = ( {navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>DETALHES</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}><Text style={styles.textoBotao}>IR PARA HOME</Text></TouchableOpacity>
        </View>
    )
}