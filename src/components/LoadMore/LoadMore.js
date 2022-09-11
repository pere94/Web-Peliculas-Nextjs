import React from 'react';
import styles from './LoadMore.module.css';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function LoadMore({ handleLoadMoreClick, dirLoad }) {
    const [dirLeft, setDirLeft] = React.useState(false);
    const [dirUp, setDirUp] = React.useState(false);
    const [dirDown, setDirDown] = React.useState(false);

    React.useEffect(() => {
        if (dirLoad == 'Left') {
            setDirLeft(true);
        } else if (dirLoad == 'Up') {
            setDirUp(true);
        } else if (dirLoad == 'Down') {
            setDirDown(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={styles.LoadMore}>
                <button onClick={handleLoadMoreClick} className={styles.LoadMore_button}>
                    <AiOutlineDoubleRight
                        className={`
                        ${styles.LoadMore_icon}
                        ${dirLeft ? styles.Left : ''} 
                        ${dirUp ? styles.Up : ''} 
                        ${dirDown ? styles.Down : ''}
                        `}
                    />
                </button>

                <span className={styles.tooltiptext}>Load more</span>
            </div>
        </>
    );
}

export { LoadMore };
