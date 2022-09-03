

function Tab({tabsNames, tabNameActive, setTabNameActive}) {

    const handleTabClick = (tab) => {
        setTabNameActive(tab);
    };

    return (
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b 
                border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {tabsNames.map(tab => (
                    <li key={tab} className="mr-2">
                        <a onClick={() => handleTabClick(tab)} href="#" className={`inline-block p-2 bg-gray-100 rounded-t-lg 
                            active dark:bg-gray-800 dark:text-blue-500 
                            ${tabNameActive == tab 
                                ? 'bg-version1 text-version3 dark:bg-version3 dark:text-version1' 
                                : ''}`}>

                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export { Tab };
