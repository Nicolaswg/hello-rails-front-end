const GET_MESSAGES = 'message/GET_MESSAGE';
const API_URL = 'http://localhost:3000/api/v1/message';

const initialState = '';

export const getMessage = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const getMessageFromAPI = () => async (dispatch) => {
  await fetch(API_URL)
    .then((response) => response.json)
    .then((json) => {
      dispatch(getMessage(json.message));
    })
    .catch((e) => {
      console.log(e);
    });
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default messageReducer;
