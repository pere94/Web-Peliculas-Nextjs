import React from 'react';
import styles from './LoadMore.module.css';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function LoadMore({handleLoadMoreClick}) {
    // const [showLoading, setShowLoading] = React.useState(true);
    
    // React.useEffect(() => {
    //     setShowLoading(true);
    //     setTimeout(() => {
    //         setShowLoading(false);
    //     }, 1500);
    // }, [trendingMode]);

    return (
        <>
            <div className={styles.LoadMore}>
                <button onClick={handleLoadMoreClick} className={styles.LoadMore_button}>
                    <AiOutlineDoubleRight className={styles.LoadMore_icon}/>
                </button>
            </div>
        </>
    );
}

export {LoadMore};