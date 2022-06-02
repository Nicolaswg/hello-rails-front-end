const GET_MESSAGES = 'messages/GET_MESSAGES';
const initialState = 'hello world';

export const getMessage = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const getMessageFromAPI = () => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/messages')
    .then((response) => response.json())
    .then((json) => {
      dispatch(getMessage(json.message));
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
