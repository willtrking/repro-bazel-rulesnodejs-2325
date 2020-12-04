import * as React from 'react';
import styles from './App.module.css';

export interface AppProps {

    optionalText?: string;
}
const App: React.FC<AppProps> = ({optionalText}) => {
    return (
        <div className={styles.yellow}>
            Hello World
            {optionalText && <div>{optionalText}</div>}
        </div>
    )
}

export default App;