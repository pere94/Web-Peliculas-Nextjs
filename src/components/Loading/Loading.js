import React from 'react';
import styles from './Loading.module.css';

function Loading({activeLoading}) {
    const [showLoading, setShowLoading] = React.useState(true);
    
    React.useEffect(() => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, 1000);
    }, [activeLoading]);

    return (
        <>
            {showLoading ? 
                <div className={styles.Loading}>
                    <div className={styles.dotWave}>
                        <div className={styles.dotWave__dot}></div>
                        <div className={styles.dotWave__dot}></div>
                        <div className={styles.dotWave__dot}></div>
                        <div className={styles.dotWave__dot}></div>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    );
}

export {Loading};