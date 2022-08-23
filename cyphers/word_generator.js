var words = require('an-array-of-french-words')
words = new Set(words)

generateAllCombinationsRecusively = function (master_list, simple_list, availableItems, subsetSize) {
    if (simple_list.length ==  subsetSize) {
        master_list.push(simple_list)
    }
    else if (availableItems.length ==  2) {
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
            generateAllCombinationsRecusively(master_list, l_copy, availableItems_copy, subsetSize)
        }
    }    
}

master_list = []; // ne pas toucher
l = []; // ne pas toucher
availableItems = ['e', 'p', 'm', 'b', 't', 'i', 'd', 'g', 'y', 'u', 'a', 'w']; // modifiable
subsetSize = 6; // modifiable
generateAllCombinationsRecusively(master_list, l, availableItems, subsetSize);

for (l of master_list) {
    word = l.join('')
    if (words.has(word)) {
        console.log(word)
    }
}
