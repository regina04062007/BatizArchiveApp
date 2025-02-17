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
      
      <TouchableOpacity style={styles.botonAtras} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonCerrarSesion} onPress={() => navigation.navigate('Principal')}>
        <Icon name="logout" size={24} color="white" />
        <Text style={styles.textoCerrarSesion}>Cerrar sesión</Text>
      </TouchableOpacity>

      <View style={styles.contenedorImagen}>
        <Image source={require('./assets/perfil.png')} style={styles.imagenPerfil} />
      </View>

      <View style={styles.infoUsuario}>
        <Text style={styles.textoInfo}>Nombre:</Text>
        <Text style={styles.textoInfo}>Correo electrónico:</Text>
      </View>

      <Text style={styles.tituloFavoritos}>Proyectos favoritos</Text>
      <TouchableOpacity onPress={() => navigation.navigate('verProyecto')} style={styles.verProyecto}>
        <Text style={styles.textoFavorito}>Proyecto 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('verProyecto')} style={styles.verProyecto}>
        <Text style={styles.textoFavorito}>Proyecto 2</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
