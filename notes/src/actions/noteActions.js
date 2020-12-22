import Axios from "axios";
import axios from "axios";
import {
    ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS,
    ADD_NOTE_FAIL, NOTE_LIST_REQUEST,NOTE_LIST_SUCCESS,NOTE_LIST_FAIL
  } from "../constants/notesConstants";
  
const addNote = (title, notes) => async (dispatch) => {
    dispatch({ type:ADD_NOTE_REQUEST, payload: { title, notes } });
    try {
      const { data } = await Axios.post("http://localhost:8080/notes", { title, notes });
      console.log(data, "notes")
      dispatch({ type: ADD_NOTE_SUCCESS, payload: data });
     // Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type:  ADD_NOTE_FAIL, payload: error.message });
    }
  }

  const listNotes = () => async (dispatch) => {
    try {
      dispatch({ type: NOTE_LIST_REQUEST });
      const { data } = await axios.get("http://localhost:8080/notes");
      console.log(data, "data");
      dispatch({ type: NOTE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: NOTE_LIST_FAIL, payload: error.message });
    }
  };
export {addNote , listNotes}