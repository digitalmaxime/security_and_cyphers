import copy

# 0 1 2 3 4
# 0 1 2 4 3
# 0 1 3 2 4
# 0 1 3 4 2
# 0 1 4 1 3
# 0 1 4 3 1
# 0 2 ...


# RECURSIVE GENERAL EXEMPLE
def generateAllCombinationsRecusively(master_list, simple_list, availableItems):
    if len(availableItems) ==  2:
        secondToLastNumber = availableItems.pop()
        lastNumber = availableItems.pop()
        twoLists = (simple_list, copy.copy(simple_list))
        twoLists[1].append(lastNumber)
        twoLists[1].append(secondToLastNumber)
        twoLists[0].append(secondToLastNumber)
        twoLists[0].append(lastNumber)
        master_list.append(twoLists[0])
        master_list.append(twoLists[1])
    else :
        for item in availableItems:
            availableItems_copy = copy.copy(availableItems)
            availableItems_copy.remove(item)
            l_copy = copy.copy(simple_list)
            l_copy.append(item)
            generateAllCombinationsRecusively(master_list, l_copy, availableItems_copy)

master_list = []  
l = []
# availableItems = {'a', 'b', 'c', 'd', 'e'}
availableItems = [1, 2, 3, 4]
generateAllCombinationsRecusively(master_list, l, availableItems)
for l in master_list:
    print(l)
