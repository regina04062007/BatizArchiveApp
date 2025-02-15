import React from 'react';  
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './LoginStyles';
import { useNavigation } from '@react-navigation/native'; 

export default function Login() {
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Evita que el teclado cubra los campos
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>INICIO DE SESIÓN</Text>
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
            color="#0EA18E"
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
            color="#0EA18E"
            style={styles.icon}
          />
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RecuperarContra')}> 
              <Text style={{ color: '#0EA18E', fontSize: 15 }}> Recuperar contraseña</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.linkContainer2}>
          <Text style={styles.link2}>
            ¿Todavía no tienes cuenta? 
            <TouchableOpacity onPress={() => navigation.navigate('Register')}> 
              <Text style={{ color: '#0EA18E', fontSize: 15 }}> Regístrate</Text> 
            </TouchableOpacity>
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}