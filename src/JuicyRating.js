import React from 'react';

//hooks
import { useState } from 'react';

//components
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

//Style
import styles from './JuicyRating.module.css';

const stars = [1, 2, 3, 4, 5];

const JuicyRating = (props) => {

  const [rate, setRate ] = useState(props.rate || 0);

  const handleClickRate = (i) => {
    setRate(i+1);
  }

  const printStars = (rate) => {
    const checkRate = (rate, i) => {
      return i < rate ? true : false
    }
    const print = stars.map( (star, i) => {
      return (
        <span key={i}>
          {
            checkRate(rate, i) ?
            <IoIosStar onClick={() => handleClickRate(i)}/>
            :
            <IoIosStarOutline onClick={() => handleClickRate(i)}/>
          }
        </span>
      )
    });

    return print;
  }

  return (
    <div className={styles.rating}>
      { printStars(rate) }
    </div>
  )
}

export default JuicyRating;
