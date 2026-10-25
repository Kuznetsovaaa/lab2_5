export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male') {
        if (!data.hasOwnProperty('income')) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys3 = Object.keys(obj3);

    const allKeys = [...new Set([...keys1, ...keys2, ...keys3])];

    return allKeys.sort();
}

export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        const clonedObj = JSON.parse(JSON.stringify(obj));
        clonedObj.id = i;
        clones.push(clonedObj);
    }

    return clones;
}
