import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 32,
    fontWeight:'500',
    textAlign:'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 100,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#0C5D61',
    borderWidth: 1,
    paddingHorizontal: 45,  // Espacio para el ícono
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    left: 15,  // Posiciona el ícono dentro del input
    top: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0C5D61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkContainer2: {
    paddingVertical: 5,
    marginBottom: 50,
    textAlign:'center',
  },
  link2: {
    color: 'black',
    fontSize: 13,
  },
});