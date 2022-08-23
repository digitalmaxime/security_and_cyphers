var words = require('an-array-of-french-words')

// console.log(words.filter(d => /mots/.test(d)))

generateAllCombinationsRecusively = function (master_list, simple_list, availableItems) {
    if (availableItems.length ==  2) {
        secondToLastNumber = availableItems.pop()
        lastNumber = availableItems.pop()
        twoLists = [simple_list, [...simple_list]]
        twoLists[1].push(lastNumber)
        twoLists[1].push(secondToLastNumber)
        twoLists[0].push(secondToLastNumber)
        twoLists[0].push(lastNumber)
        master_list.push(twoLists[0])
        master_list.push(twoLists[1])
    }
    else {
        for (item of availableItems) {
            availableItems_copy = availableItems.filter(ele => ele != item);
            l_copy = [...simple_list]
            l_copy.push(item)
            generateAllCombinationsRecusively(master_list, l_copy, availableItems_copy)
        }
    }    
}

master_list = [];  
l = [];
availableItems = ['a', 'b', 'c', 'd']
// availableItems_copy = availableItems.filter(ele => ele == 'abc');
// console.log(availableItems_copy)
generateAllCombinationsRecusively(master_list, l, availableItems)

for (l of master_list) {
    console.log(l)
}
