import {useState, useEffect} from 'react';
import styles from './style.css'
import {debug} from 'util';

const Progress = (props) => {
  return <div className={styles.progress}>
    {
      props.isHorizon ? 
        <div className={styles.horizonLists}>
          {
            props.info.map(item => {
              return  <div className={styles.listItem}>
                        <div className={styles.circle}></div>
                        <div className={styles.line}></div>
                        <div className={styles.info}>{item}</div>
                      </div>
            })
          }
        </div>
      :
        <div className={styles.verticalLists}>
          {
            props.info.map((item,index) => {
              return <div className={styles.listItem}>
                  <div className={styles.circle}></div>
                  <div className={index === (props.info.length -1) ? '' : styles.line}></div>
                  <div className={styles.info}>{item}</div>
                </div>
              })
            }
        </div>
    }
  </div>
}
Progress.defaultProps = {
  info: [],
  isHorizon: true
}
export default Progress