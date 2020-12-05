import React from 'react';
import { useDispatch } from 'react-redux';
import { bugAdded } from '../store/bugs';
import styles from './button.module.scss';

const AddButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // bugAdded action을 실행한다.
    dispatch(bugAdded({ description: 'Bug'}));
  };

  return ( 
    <button className={styles.button} onClick={() => handleClick()}>
      Add
    </button> 
  );
}
 
export default AddButton;