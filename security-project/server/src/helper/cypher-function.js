module.exports.cypherFunction = (array, key) => {
    for (let i = 0; i < key; ++i) {
        const lastEle = array.pop();
        if (lastEle !== undefined) {
            array.unshift(lastEle);
        }
    }
    return array;
}

module.exports.XOR = (arr, arr2) => {
    if (arr.length != arr2.length) {
        throw new Error("array lengths are not equal! XOR");
    }

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] ^ arr2[i]);
    }

    return res;
}