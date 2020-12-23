// Importo base de datos de firabase
import { db, auth } from "lib/firebase";
import cookie from "cookie";
const registerUser = async ({ email, password, name }) => {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(async (response) => {
      console.log("Firebase 2 - Usuario creado en base de auth");

      // Crear una nueva entrar en la coleccion usuarios con el mismo ID que el de la autenticacion
      return await db
        .collection("users")
        .doc(response.user.uid)
        .set({
          nombre: name,
          favoritos: [],
          email: email,
          posts: [],
        })
        .then(() => {
          console.log("Firebase 3 - Usuario creado en Base Firestore");
        })
        .catch((error) => console.log("Hubo un error creando el usuario", error));
    })
    .catch((error) => {
      console.error("Error de firebase", error);
    });
};

export default registerUser;
