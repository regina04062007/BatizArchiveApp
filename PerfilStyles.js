import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },

  botonAtras: {
    position: "absolute",
    top: 20,
    left: 10,
  },

  contenedorImagen: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
  },

  imagenPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  infoUsuario: {
    alignItems: "center",
    marginTop: 20,
  },

  textoInfo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  tituloFavoritos: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#6babae",
  },

  textoFavorito: {
    fontSize: 16,
    marginBottom: 5,
  },

  botonCerrarSesion: {
    marginTop: 30,
    backgroundColor: "#ff5c5c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  textoCerrarSesion: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
