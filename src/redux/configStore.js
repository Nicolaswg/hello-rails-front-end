import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './Greetings/greeting';

const store = configureStore({ reducer: { messages: messageReducer } });
export default store;
