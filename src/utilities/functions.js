

const getDuplicateItemArray = (array) => {
    let letrasDuplicadas = array.filter((elemento, index) => {
        return array.indexOf(elemento) !== index;
    });
    return letrasDuplicadas;
};


export {getDuplicateItemArray};