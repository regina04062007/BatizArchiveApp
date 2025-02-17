import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    //marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#7E21A3',
    height: 100, 
    marginBottom: 40,
    borderBottomWidth: 10,
    borderTopWidth: 40,
    borderTopColor: '#000000',
    borderBottomColor: '#000000',
  },
  textContainer2: {
    width:'100%',
    textAlign: 'center', 
    marginBottom: 20,
  },
  text2: {
    color: '#9A20E0',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },
  imagenLogo: {
    width: 270,  
    height: 270, 
    resizeMode: 'contain', 
    marginBottom: 30,
  },
  button: {
    width: '80%', 
    height: 50,
    backgroundColor: '#7E21A3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button2: {
    width: '80%', 
    height: 50,
    backgroundColor: '#7E21A3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    width: '100%',
    backgroundColor: '#000000',
    height: 30, 
  },
});
