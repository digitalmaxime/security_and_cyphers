# donnees de l'enonce
# encryptedLetters = [103735,65255,77374,337984,483152]
encryptedLetters = [0,1,263569]
N = 488479
exponent = 487

# init des dictionnaires
alphabetDictionary = {0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j', 10:'k', 11:'l', 12:'m', 13:'n', 
              14:'o', 15:'p', 16:'q', 17:'r', 18:'s', 19:'t', 20:'u', 21:'v', 22:'w', 23:'x', 24:'y', 25:'z'}

dictionary = {}

for index in range(26):
    encryptedLetter = index ** exponent % N
    dictionary[encryptedLetter] = index
    
for number in encryptedLetters:
    print(alphabetDictionary[dictionary[number]], end='')
print()