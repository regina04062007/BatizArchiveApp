import React from 'react';  
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './CambiarContraStyles';
import { useNavigation } from '@react-navigation/native'; 

export default function CambiarContra() {
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Evita que el teclado cubra los campos
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CAMBIAR CONTRASEÑA</Text>
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.link}>Ingrese una nueva contraseña</Text>
         
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

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirmar contraseña"
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


        <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
          <Text style={styles.buttonText}>RESTABLECER</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}