import {
    ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS,
    ADD_NOTE_FAIL,NOTE_LIST_REQUEST,
     NOTE_LIST_SUCCESS ,NOTE_LIST_FAIL 
  } from "../constants/notesConstants"

  function addNoteReducer(state = {}, action) {
    switch (action.type) {
      case ADD_NOTE_REQUEST:
        return { loading: true };
      case ADD_NOTE_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case ADD_NOTE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  function noteListReducer(state = { notes: [] }, action) {
    switch (action.type) {
      case NOTE_LIST_REQUEST:
        return { loading: true, notes: [] };
      case NOTE_LIST_SUCCESS:
        return { loading: false, notes: action.payload };
      case NOTE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export {
    addNoteReducer, noteListReducer
  }