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

const getCardByUser = async (user_id) => {
  return db
    .collection("cards")
    .where("user_id", "==", user_id)
    .get()
    .then(function (querySnapshot) {
      let cards = [];

      querySnapshot.forEach(function (doc) {
        cards = [...cards, { id: doc.id, ...doc.data() }];
      });

      return cards;
    });
};

const deleteCardById = async (id) => {
  try {
    return db
      .collection("cards")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });

  } catch (error) {
    console.log(`ERROR`, error);
  }
};

const updateCard = async (card, id) => {
  try {
    return db
      .collection("cards")
      .doc(id)
      .update(card)
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });

  } catch (error) {
    console.log(`ERROR`, error);
  }
}

export { addNewCard, getAllCards, getCard, getCardByUser, deleteCardById, updateCard };
