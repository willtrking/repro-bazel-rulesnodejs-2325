import * as React from 'react';
import styles from './FancyDiv.module.css';

export const FancyDiv: React.FC<{text: string;}> = ({text}) => {

    return (<div className={styles.fancy}>{text}</div>);
}