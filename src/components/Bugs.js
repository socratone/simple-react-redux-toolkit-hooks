import React from 'react';
import { useSelector } from 'react-redux';

const Bugs = () => {
  // dispatch가 실행되면 useSelector가 변경된 state를 가져온다.
  const bugs = useSelector(state => state.entities.bugs);

  return ( 
    <ul>
      {bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}
    </ul> 
  );
}
 
export default Bugs;