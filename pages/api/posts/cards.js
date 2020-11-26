import { db } from "lib/firebase";

const addNewCard = async (data) => {
  return await db.collection("cards").doc().set(data);
};

const getAllCards = async () => {
  let data = [];

  return db
    .collection("cards")
    .get()
    .then((response) => {
      response.forEach((res) => {
        data = [...data, { ...res.data(), id: res.id }];
      });
      return data;
    });
};

const getCard = async (id) => {
  return db
    .collection("cards")
    .doc(id)
    .get()
    .then((response) => response.data());
};

export { addNewCard, getAllCards, getCard };
