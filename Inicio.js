import React, { useState } from 'react';  
import { Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './InicioStyles'; 
import { useNavigation } from '@react-navigation/native';  

export default function Inicio() {
  const navigation = useNavigation(); 
  const [showOptions, setShowOptions] = useState(false);

  const mostrarOpciones = () => {
    setShowOptions(!showOptions);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon name="account-circle" size={43} color="blue" position="absolute" />
          <Text style={styles.title}>Mi cuenta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buscador}>
        <View style={styles.despliegue}>
          <Text style={styles.title2}>Carreras</Text>
          <TouchableOpacity onPress={mostrarOpciones}>
            <Icon name={showOptions ? "chevron-up" : "chevron-down"} size={24} color="black" />
          </TouchableOpacity>
        </View>

        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Tronco Común</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Programación</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Mecatrónica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Sistemas Digitales</Text>
            </TouchableOpacity>
          </View>
        )}

        <TextInput style={styles.buscadorInput} placeholder="Buscar aquí" />
        <TouchableOpacity style={styles.buscadorButton}>
          <Text style={styles.buscadorButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>ÚLTIMOS AGREGADOS</Text>

        {/* Proyectos */}
        <View style={styles.proyecto}>
          <Image style={styles.imagen} source={require('./assets/rob.jpeg')} />
          <Text style={styles.carrera}>Carrera</Text>
          <Text style={styles.titulo}>NOMBRE DEL PROYECTO</Text>
          <Text style={styles.grupo}>Grupo</Text>
          <View style={styles.footer}>
            <Icon name="heart-outline" size={24} color="gray" />
            <TouchableOpacity onPress={() => navigation.navigate('verProyecto')} style={styles.Button}>
              <Text style={styles.buttonText}>Ver proyecto</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.proyecto}>
          <Image style={styles.imagen} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text style={styles.carrera}>Carrera</Text>
          <Text style={styles.titulo}>NOMBRE DEL PROYECTO</Text>
          <Text style={styles.grupo}>Grupo</Text>
          <View style={styles.footer}>
            <Icon name="heart-outline" size={24} color="gray" />
            <TouchableOpacity onPress={() => navigation.navigate('verProyecto')} style={styles.Button}>
              <Text style={styles.buttonText}>Ver proyecto</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.proyecto}>
          <Image style={styles.imagen} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text style={styles.carrera}>Carrera</Text>
          <Text style={styles.titulo}>NOMBRE DEL PROYECTO</Text>
          <Text style={styles.grupo}>Grupo</Text>
          <View style={styles.footer}>
            <Icon name="heart-outline" size={24} color="gray" />
            <TouchableOpacity onPress={() => navigation.navigate('verProyecto')} style={styles.Button}>
              <Text style={styles.buttonText}>Ver proyecto</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

