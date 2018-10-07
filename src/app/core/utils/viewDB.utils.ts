import { element } from 'protractor';
// TODO: apply interfaces to such type of functions

export const createHeaderArray = function(data) {
    if(data && data.length < 2) {
        return data;
    }
    let result = data[0].map((item) => {
        return { name: item.name, values: [] };
    });
    data.forEach(document => {
        document.forEach((element, index, array) => {
            if(element.name === result[index].name) {
                result[index].values.push(element.value);
            }
        });
    });

    return result;
};