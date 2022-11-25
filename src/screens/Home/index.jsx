import { useState, useEffect, useContext} from "react"
import { View, Text,  FlatList, Button } from "react-native"
import { getTasks } from "../../services/tasksClient"
import { Card } from "../../components/Card"
import { StatusBar } from "react-native"
import { styles } from "./styles"
import { AuthContext } from "../../contexts/AuthContext"

export const Home = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);
    const { logoutContext } = useContext(AuthContext)

    const fetchData = async () => {
        const taskList = await getTasks();
        setTasks(taskList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' barStyle='light-content' />
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Card item={item} />}
            />
            <Button title="Detalhes" onPress={() => navigation.navigate('Detalhes')} />
            <Button title="LOGOUT" onPress={() => logoutContext()} />
        </View>
    );
};



