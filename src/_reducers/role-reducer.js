import {GET_ROLE,NEW_ROLE,SHOW_MODAL_ROLE,EDIT_ROLE, DELETE_ROLE,SHOW_ERROR_MESSAGE} from '../_constants/types'
const initialState = {
  modaldata:{},
  errors:{},
  roles: [],
  role:{},
  messages:{},
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ROLE:
        return {
          ...state,
          roles:action.payload
        };
      case NEW_ROLE:
        return {
          ...state,
          roles:state.roles.concat(action.payload),
          modaldata:{show:false}
        };
        case EDIT_ROLE:
        return {
          ...state,
          messages:'ROLE_UPDATED',
          roles:state.roles.map(role=>{
            if(role.id==action.payload.id) 
            {
            return action.payload;
            }else{
              return role;
            }}),
          modaldata:{show:false}
        };
        case DELETE_ROLE:
        return{
            ...state,
            roles:state.roles.filter(role=>role.id!==action.payload)
          }

      // case SHOW_ERROR_MESSAGE:
      // return {
      //   ...state,
      //   show:true,
      //   errors: action.payload
      // }
        case SHOW_MODAL_ROLE:
            return {
              ...state,
              modaldata:action.modaldata,
              role:action.payload
            };
      default:
        return state;
    }
  }