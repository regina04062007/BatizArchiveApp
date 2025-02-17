import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  botonAtras: {
    marginTop:20,
    position: "absolute",
    top: 20,
    left: 10,
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
    marginBottom: 45,
  },
  headerText: {
    color: '#000',
    fontSize: 32,
    fontWeight:'500',
    textAlign:'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#0C5D61',
    borderWidth: 1,
    paddingHorizontal: 45,  
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    left: 15,  
    top: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0C5D61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkContainer2: {
    paddingVertical: 5,
    marginTop: 10,
    textAlign:'center',
  },
  link2: {
    color: 'black',
    fontSize: 13,
  },
});
