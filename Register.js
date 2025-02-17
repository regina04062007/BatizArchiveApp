import React from 'react';  
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './RegisterStyles';
import { useNavigation } from '@react-navigation/native'; 

export default function Register() {
  const navigation = useNavigation(); 
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
           <TouchableOpacity
                  style={styles.botonAtras}
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="arrow-left" size={30} color="black" />
                </TouchableOpacity>
                
          <View style={styles.header}>
            <Text style={styles.headerText}>REGISTRO</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Nombre de Usuario"
              style={styles.input}
            />
            <Icon
              name="account"
              size={28}
              color="#0C5D61"
              style={styles.icon}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Correo Electrónico"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Icon
              name="email"
              size={28}
              color="#0C5D61"
              style={styles.icon}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Contraseña"
              secureTextEntry={true}  
              style={styles.input}
            />
            <Icon
              name="eye"
              size={28}
              color="#0C5D61"
              style={styles.icon}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Código de Activación"
              style={styles.input}
            />
            <Icon
              name="qrcode"
              size={28}
              color="#0C5D61"
              style={styles.icon}
            />
          </View>

          <View style={styles.linkContainer2}>
            <Text style={styles.link2}>
              ¿Ya tienes una cuenta? 
              <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <Text style={{ color: '#0C5D61', fontSize: 15 }}> Iniciar Sesión</Text> 
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}
