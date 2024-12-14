import styles from './style.module.css';

import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Link({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className={styles.link} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
        <a href={href}>{title}</a>
      </motion.div>
    )
  }