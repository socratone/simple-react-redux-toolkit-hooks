import React from 'react';
import { useDispatch } from 'react-redux';
import { bugRemoved } from '../store/bugs';
import styles from './button.module.scss';

const RemoveButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // bugRemoved action을 실행한다.
    dispatch(bugRemoved());
  };

  return ( 
    <button className={styles.button} onClick={() => handleClick()}>
      Remove
    </button> 
  );
}
 
export default RemoveButton;