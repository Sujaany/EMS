import { GET_ROLE, SHOW_MODAL_ROLE, DELETE_ROLE } from "../_constants/types";

export const fetchRoles = () => dispatch => {
  dispatch({
    type: GET_ROLE,
    payload: []
  });
};

export const showModal = (modaldata, roleObj) => dispatch => {
  if (modaldata.action == "ADD") {
    dispatch({
      type: SHOW_MODAL_ROLE,
      modaldata: modaldata,
      payload: {}
    });
  } else if (modaldata.action == "EDIT") {
    dispatch({
      type: SHOW_MODAL_ROLE,
      modaldata: modaldata,
      payload: roleObj
    });
  }
};

export const deleteRole = id => dispatch => {
  dispatch({
    type: DELETE_ROLE,
    payload: id
  });
};
