import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageFromAPI } from '../redux/Greetings/greeting';

function Greetings() {
  const selected = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getMessageFromAPI);
  };

  return (
    <div>
      greetings:
      {selected}
      <button type="button" onClick={handleClick}>Generate messages</button>
    </div>
  );
}

export default Greetings;
