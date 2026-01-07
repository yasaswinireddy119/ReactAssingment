import { db } from "../firebase/firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export const getTodos = async (uid) => {
  const snapshot = await getDocs(collection(db, "todos"));
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(todo => todo.uid === uid);
};

export const addTodo = (todo) =>
  addDoc(collection(db, "todos"), todo);

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
