import React from 'react';  
import { Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './verProyectoStyles'; 
import { useNavigation } from '@react-navigation/native';  

export default function verProyecto() {
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Titulo del proyecto</Text>
        
        <View style={styles.imagenProyecto} />

        <View style={styles.infoContainer}>
          <TextInput style={styles.infoTexto} value="Especialidad: " editable={false} />
          <TextInput style={styles.infoTexto} value="Grupo: " editable={false} />
          <TextInput style={styles.infoTexto} value="Integrantes: " editable={false} />
        </View>

        <TextInput style={styles.sectionText} value="Objetivo:" editable={false} />
        <TextInput style={styles.sectionText} value="Eje temático:" editable={false} />
        <TextInput style={styles.sectionText} value="Impacto social:" editable={false} />
        <TextInput style={styles.sectionText} value="Propósito:" editable={false} />
        <TextInput style={styles.sectionText} value="Justificación:" editable={false} />

        <View style={styles.infoContainer2}>
          <Text style={styles.infoTexto}>Accede a nuestra página web para tener acceso a la documentación del proyecto.</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

