import React from 'react';  
import { Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './PrincipalStyles';
import { useNavigation } from '@react-navigation/native'; 
import { Image } from 'react-native';

export default function Principal() {
  const navigation = useNavigation(); 

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Evita que el teclado cubra los campos
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
          </View>

          <View style={styles.textContainer2}>
            <Text style={styles.text2}>
              Bienvenido a tu BatizArchive 
            </Text>
          </View>

          <Image
            style={styles.imagenLogo}
            source={require('./assets/logoBatiz.jpeg')}
          />
          

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>INICIO DE SESIÓN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button2}>
            <Text style={styles.buttonText2}>REGISTRARSE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.button2}>
            <Text style={styles.buttonText2}>INICIO</Text>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.footer}>
          </View>
      </KeyboardAvoidingView>
    );
}
