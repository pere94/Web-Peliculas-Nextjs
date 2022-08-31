import React from 'react';
import styles from './Loading.module.css';

function Loading({trendingMode}) {
    const [showLoading, setShowLoading] = React.useState(true);
    
    React.useEffect(() => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, 1500);
    }, [trendingMode]);

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