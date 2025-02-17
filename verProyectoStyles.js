import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
  },
  botonAtras: {
    marginTop:20,
    position: "absolute",
    top: 20,
    left: 10,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  imagenProyecto: {
    width: 330,
    height: 200,
    backgroundColor: '#D3D3D3', 
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF2CC',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    marginBottom: 20,
  },
  infoContainer2: {
    backgroundColor: '#9fedfe',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    marginBottom: 20,
    marginTop:20,
  },

  infoTexto: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
  sectionText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#bbced2',
  },
});
