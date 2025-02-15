import React from 'react';  
import { Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './PerfilStyles';
import { useNavigation } from '@react-navigation/native'; 
import { Image } from 'react-native';

export default function Perfil() {
  const navigation = useNavigation(); 

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      {/* Botón de retroceso */}
      <TouchableOpacity
        style={styles.botonAtras}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Imagen de perfil */}
      <View style={styles.contenedorImagen}>
        <Image
          source={require('./assets/logoBatiz.jpeg')} // Asegúrate de tener la imagen en esta ruta
          style={styles.imagenPerfil}
        />
      </View>

      {/* Información del usuario */}
      <View style={styles.infoUsuario}>
        <Text style={styles.textoInfo}>Nombre:</Text>
        <Text style={styles.textoInfo}>Correo electrónico:</Text>
      </View>

      {/* Proyectos favoritos */}
      <Text style={styles.tituloFavoritos}>Proyectos favoritos</Text>
      <Text style={styles.textoFavorito}>Proyecto 1</Text>
      <Text style={styles.textoFavorito}>Proyecto 2</Text>

      {/* Botón de cerrar sesión */}
      <TouchableOpacity style={styles.botonCerrarSesion}>
        <Text style={styles.textoCerrarSesion}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
