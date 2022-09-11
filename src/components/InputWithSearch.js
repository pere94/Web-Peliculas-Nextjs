import React from 'react';
import { endPointsApi } from '/src/services/endPointsApi';
import { GetApi } from '/src/services/GetApi';

function InputWithSearch({ label, inputRef }) {
    const [actorsList, setActorsList] = React.useState([]);
    const [valueInput, setValueInput] = React.useState('');

    React.useEffect(() => {
        if (valueInput != '') {
            const getActors = async () => {
                const actors = await GetApi(endPointsApi.actors.all(1, valueInput));
                setActorsList(actors.results);
            };
            getActors();
        }
    }, [valueInput]);

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setValueInput(event.target.value);
    };

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <input
                ref={inputRef}
                onChange={handleInputChange}
                id="contSearcher__filtros-actors"
                list="actors"
                placeholder="Actor Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500"
            />
            <datalist id="actors">
                {actorsList.map((item) => (
                    <option key={'Actor-' + item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </datalist>
        </>
    );
}

export { InputWithSearch };
