
//RELEMBRANDO: ESTÁ MINIMIZADO.

// import { useState } from "react"
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

// export const App = () => {
//   const [nome,setNome] = useState('REAC NATIVE')
//   const [nomeInput, setNomeInput] = useState('')

//   return(
//     <View style={StyleSheet.container}>
//       <Text style={StyleSheet.texto}>{nome}</Text>
//       <TextInput
//         placeholder="Digite seu nome"
//         onChangeText={setNomeInput}
//         value={nomeInput} 
//       />
//       <TouchableOpacity
//         style={StyleSheet.botao}
//         onPress={() => setNome(nomeInput)}>
//         <Text>CLIQUE AQUI</Text>  
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   botao: {
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 15,
//     marginTop: 16,
//   }
// })

// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, FlatList, Button } from "react-native"
// import { getTasks } from "./src/services/tasksClient";
// import { StatusBar } from "react-native";
// import { Card } from "./src/components/Card";



// const App = () => {
//   const [nome,setNome] = useState('REACT NATIVE');
//   const [tasks, setTasks] = useState([])

//   // const getTasks = async () => {
//   //   const { data } = await api.get("/tasks")
//   //   console.log(data)
//   //   setTasks(data);
//   // }

//   const fetchData = async () => {
//     const taskList = await getTasks();
//     setTasks(taskList)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return(
//     <View style={styles.container}>
//       <StatusBar backgroundColor='grey' barStyle='light-content' />
//       {/* existe, porém não é mais utilizado. */}
//      {/* { DATA.map( item => <Text style={styles.texto}>{item.title}</Text>)} */}
//       <FlatList
//         data={tasks}
//         keyExtractor={ item => item.titulo}
//         renderItem={Card}
//         // renderItem={({item}) => (
//         //   <>
//         //     <Text style={styles.texto}>{item.title}</Text>
//         //     <Button title='DELETAR' onPress={() => setNome(nome + 'a')}/>
//         //   </>
//         //)}
//       />
//       <Text style={styles.texto}>{nome}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor: '#131313',
//   },
//   texto: {
//     color: 'white',
//   }
// })

// export default App


// AULA 5 ROTAS PUPLICAS E PRIVADAS.

// import React, { useState } from "react";
// import { Home } from "./src/screens/Home";
// import { Detalhes } from "./src/screens/Detalhes";
// import { Login } from "./src/screens/Login";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// const Stack = createNativeStackNavigator()
// const RotaPublica = () => {
//   return(
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Privado" component={RotaPrivada}/>
//       </Stack.Navigator>
//   )
// }

// const Tab = createBottomTabNavigator()
// const RotaPrivada = () => {
//   return(
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Detalhes" component={Detalhes} />
//        </Tab.Navigator>
//   )
// }

// const App = () => {
//   // const [logado, setLogado] = useState(true)
//   return(
//     <NavigationContainer>
//       <RotaPublica />
//       {/* {logado ? <RotaPrivada /> : <RotaPublica />} */}
//     </NavigationContainer>
//   );
// }
//
//export default App;

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/AuthContext";


const App = () => {
  const [logado, setLogado] = useState(false)
  return(
    <NavigationContainer>
      {/* {logado ? <RotasPrivadas /> : <RotasPublicas />} */}
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;