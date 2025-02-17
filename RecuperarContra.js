import React from 'react';  
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './RecuperarContraStyles';
import { useNavigation } from '@react-navigation/native'; 

export default function RecuperarContra() {
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
            <Text style={styles.headerText}>RECUPERAR CONTRASEÑA</Text>
          </View>

          <View style={styles.linkContainer2}>
            <Text style={styles.link2}>
              Use su correo Electrónico 
            </Text>
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

          <TouchableOpacity onPress={() => navigation.navigate('CambiarContra')} style={styles.button}>
            <Text style={styles.buttonText}>SIGUIENTE</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}
