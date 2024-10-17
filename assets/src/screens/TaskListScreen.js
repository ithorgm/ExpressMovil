import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskListScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tarea 1' },
    { id: '2', title: 'Tarea 2' },
    { id: '3', title: 'Tarea 3' },
  ]);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar tarea..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Título */}
      <Text style={styles.title}>Lista de Tareas</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Todas las tareas</Text>

      {/* Lista de tareas */}
      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />

      {/* Botón para crear nueva tarea */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateTask')}
      >
        <Text style={styles.addButtonText}>Crear Nueva Tarea</Text>
      </TouchableOpacity>

      {/* Barra de navegación */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('PorHacer')}>
          <Icon name="list-outline" size={30} color="#000" />
          <Text>Por Hacer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Completadas')}>
          <Icon name="checkmark-done-outline" size={30} color="#000" />
          <Text>Completadas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pendientes')}>
          <Icon name="time-outline" size={30} color="#000" />
          <Text>Pendientes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Proximas')}>
          <Icon name="calendar-outline" size={30} color="#000" />
          <Text>Próximas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default TaskListScreen;
