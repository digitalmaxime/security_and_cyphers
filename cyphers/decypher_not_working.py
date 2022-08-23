alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
encryptedText = ''
decryptedText = ''

with open('200caracteresChiffres.txt', 'r') as f:
    encryptedText = f.read()

encryptedText = encryptedText.upper()


'''
Simple frequency 
'''

alphabetFrenquencyOfText = {
    'A':0,'B':0,'C':0,'D':0,'E':0,'F':0,'G':0,'H':0,'I':0,'J':0,'K':0,'L':0,'M':0,
    'N':0,'O':0,'P':0,'Q':0,'R':0,'S':0,'T':0,'U':0,'V':0,'W':0,'X':0,'Y':0,'Z':0, '@':0
}

for char in encryptedText:
    alphabetFrenquencyOfText[char] += 1

print("---alphabet frequency---")
print(alphabetFrenquencyOfText)
print()

englishLettreFrenquencyOrder = 'ETAOINSHRDLCUMWFGYPBVKJXQZ'

most_common_letters_in_text = sorted(alphabetFrenquencyOfText, key=alphabetFrenquencyOfText.get, reverse=True)
print("--- most_common_letters_in_text ---")
print(most_common_letters_in_text[1:4])

letterCorrespondance = dict()
# for index, char in enumerate(sortedLetters):
#     letterCorrespondance[char] = englishLettreFrenquencyOrder[index]

# letterCorrespondance = {k: v for k, v in sorted(letterCorrespondance.items())}

'''
Split words around space
'''
SPACE_CHAR = most_common_letters_in_text[0] # because ' ' is the most common char
listOfWords = encryptedText.split(SPACE_CHAR) # because ' ' is the most common char
print("---initial list of words ---")
print(listOfWords)

# for lettre in most_common_3_letters_in_text:
#     listOfWord = encryptedText.split(lettre)
#     print(listOfWord)
#     print()

# for char in encryptedText:
#     if letterCorrespondance[char] == englishLettreFrenquencyOrder[0] or letterCorrespondance[char] == englishLettreFrenquencyOrder[1]:
#         decryptedText += letterCorrespondance[char].lower()
#     else : 
#         decryptedText += char

# listOfWords = decryptedText.split(' ')

# print("---encryptedText---")
# print(encryptedText)
# print()
# print("---decrypted text---")
# print(decryptedText)
# print()
# print("---listOfWords---")
# print(listOfWords)




'''
Trigraphs
'''
print()
print("***TRIGRAPHS***")
first10englishTrigraphs = ['THE', 'AND', 'THA', 'ENT', 'ING', 'ION', 'TIO', 'FOR', 'NDE', 'HAS']
first10englishTrigraphsSet = {'THE', 'AND', 'THA', 'ENT', 'ING', 'ION', 'TIO', 'FOR', 'NDE', 'HAS'}
MOST_COMMUN_TRIGRAPH = 'THE'
# trigraphLetterFrequency = {}
# for triigraph in first10englishTrigraphs:
#     for char in triigraph:
#         if char in trigraphLetterFrequency:
#             trigraphLetterFrequency[char] += 1
#         else :
#             trigraphLetterFrequency[char] = 1
# print('---trigraphLetterFrequency---')
# print(trigraphLetterFrequency)
# print("-----")

trigraphDic = {}
for i in range(len(encryptedText)-3) :  
    if SPACE_CHAR in encryptedText[i:i+3]:
        continue
    
    if encryptedText[i:i+3] in trigraphDic:
        trigraphDic[encryptedText[i:i+3]] += 1
    else :
        trigraphDic[encryptedText[i:i+3]] = 1

most_common_trigraphs_in_text = sorted(trigraphDic, key=trigraphDic.get, reverse=True)
print("--Trigraphs--")
print(most_common_trigraphs_in_text[:3])

# trigraphLetterFrequencyInText = {}
# for triigraph in most_common_trigraphs_in_text:
#     for char in triigraph:
#         if char in trigraphLetterFrequencyInText:
#             trigraphLetterFrequencyInText[char] += 1
#         else :
#             trigraphLetterFrequencyInText[char] = 1
# print('---trigraphLetterFrequency IN TEXT---')
# print(trigraphLetterFrequencyInText)

# letterCorrespondance[most_common_trigraphs_in_text[0][0]] = MOST_COMMUN_TRIGRAPH[0]
# letterCorrespondance[most_common_trigraphs_in_text[0][1]] = MOST_COMMUN_TRIGRAPH[1]
# letterCorrespondance[most_common_trigraphs_in_text[0][2]] = MOST_COMMUN_TRIGRAPH[2]

print("--Letter Correspondance---")    
print(letterCorrespondance)

'''
Digraphs
'''
print()
print("***BIGRAPHS***")
englishDigraphs = ['TH', 'HE', 'IN', 'EN', 'NT', 'RE', 'ER', 'AN', 'TI', 'ES']
englishDigraphsSet = {'TH', 'HE', 'IN', 'EN', 'NT', 'RE', 'ER', 'AN', 'TI', 'ES'}
MOST_COMMUN_DIGRAPH = 'TH'
# digraphLetterFrequency = {}
# for digraph in englishDigraphs:
#     for char in digraph:
#         if char in digraphLetterFrequency:
#             digraphLetterFrequency[char] += 1
#         else :
#             digraphLetterFrequency[char] = 1
# print(digraphLetterFrequency)

digraphDic = {}
for i in range(len(encryptedText)-2) :
    if SPACE_CHAR in encryptedText[i:i+2]:
        continue
    
    if encryptedText[i:i+2] in digraphDic:
        digraphDic[encryptedText[i:i+2]] += 1
    else :
        digraphDic[encryptedText[i:i+2]] = 1

most_common_digraphs_in_text = sorted(digraphDic,  key=digraphDic.get, reverse=True)
print("--Most common Digraphs in text--")
print(most_common_digraphs_in_text[:3])

# find common lettre in most_common_letters_in_text[1] and trigraph and bigraph --> should give 'e'
counter = 1
found = False
e = most_common_letters_in_text[counter]
while not found:
    eInTrigraph = False
    for trigraph in most_common_trigraphs_in_text[:3]:
        if e in trigraph:
            eInTrigraph = True
    
    eInBigraph = False
    for bigraph in most_common_digraphs_in_text[:3]:
        if e in bigraph:
            eInBigraph = True
    
    if eInTrigraph and eInBigraph:
        found = True
    else :
        counter += 1 
        e = most_common_letters_in_text[counter]

# assign e to "e"
letterCorrespondance[e] = 'e'
# mark that you have dealt with e 
alphabet.remove('e')

print('--letterCorrespondance--')
print(letterCorrespondance)

for i in range(len(listOfWords)):
    listOfWords[i] = listOfWords[i].replace(e, letterCorrespondance[e]) 
            
print(listOfWords)