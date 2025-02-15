import React from 'react';  
import { Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './InicioStyles'; 
import { useNavigation } from '@react-navigation/native';  

export default function Inicio() {
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Encabezado */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon name="account-circle" size={30} color="blue" />
          <Text style={styles.title}>Mi cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Barra de búsqueda */}
        <View style={styles.searchBar}>
          <View style={styles.categoryDropdown}>
          <Text style={styles.title}>Carreras</Text>
         
          </View>
          <TextInput style={styles.searchInput} placeholder="Buscar aquí" />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de proyectos */}
        <Text style={styles.sectionTitle}>ÚLTIMOS AGREGADOS</Text>

        {/* Tarjeta de proyecto */}
        <View style={styles.projectCard}>
          <Image style={styles.projectImage} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text style={styles.projectCareer}>Carrera</Text>
          <Text style={styles.projectTitle}>NOMBRE DEL PROYECTO</Text>
          <Text style={styles.projectGroup}>Grupo</Text>
          <View style={styles.cardFooter}>
            <Icon name="heart-outline" size={24} color="gray" />
            <TouchableOpacity style={styles.projectButton}>
              <Text style={styles.projectButtonText}>Ver proyecto</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
