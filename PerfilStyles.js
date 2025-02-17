import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 30,
    backgroundColor: "white",
  },

  botonAtras: {
    position: "absolute",
    top: 20,
    left: 10,
  },

  botonCerrarSesion: {
    position: "absolute",
    top: 25,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0404B4",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  textoCerrarSesion: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5, 
  },

  contenedorImagen: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 10,
    marginTop: 60, 
  },

  imagenPerfil: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  infoUsuario: {
    alignItems: "center",
    marginTop: 20,
  },

  textoInfo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  tituloFavoritos: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "#6babae",
  },

  textoFavorito: {
    fontSize: 16,
    marginBottom: 5,
  },

  verProyecto: {
    marginTop: 10,
    backgroundColor: "#E6E6E6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

