import { db } from "lib/firebase";

const getUserById = async (id) => {
  return db
    .collection("users")
    .doc(id)
    .get()
    .then((response) => response.data());
};

export { getUserById };
