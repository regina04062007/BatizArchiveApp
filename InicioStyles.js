import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding:15,
  },
  header: {
    marginTop:25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 50,
    marginTop:5,
    marginBottom:10,
  },
  title2: {
    color: 'black',
    fontSize: 18,
  },
  buscador: {
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  despliegue: {
    backgroundColor: '#d5d8d8',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buscadorInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buscadorButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  buscadorButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionsContainer: {
    position: 'absolute',
    top: 50, 
    left: 10,
    right: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  optionItem: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'blue',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  proyecto: {
    backgroundColor: '#d5d8d8',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginVertical: 10,
  },
  imagen: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  carrera: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  grupo: {
    color: 'purple',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  Button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
