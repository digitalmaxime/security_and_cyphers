encryptedText = ''
textWithSpaces = ''
with open('200caracteresChiffres.txt', 'r') as f:
    encryptedText = f.read()

encryptedText = encryptedText.upper()

alphabetFrenquencyOfText = {
    'A':0,'B':0,'C':0,'D':0,'E':0,'F':0,'G':0,'H':0,'I':0,'J':0,'K':0,'L':0,'M':0,
    'N':0,'O':0,'P':0,'Q':0,'R':0,'S':0,'T':0,'U':0,'V':0,'W':0,'X':0,'Y':0,'Z':0, '@':0
}

for char in encryptedText:
    alphabetFrenquencyOfText[char] += 1

most_common_letters_in_text = sorted(alphabetFrenquencyOfText, key=alphabetFrenquencyOfText.get, reverse=True)

SPACE_CHAR = most_common_letters_in_text[0] # because ' ' is the most common char

for char in encryptedText:
    if char == SPACE_CHAR:
        textWithSpaces += ' '
    elif char == '@':
        textWithSpaces += SPACE_CHAR
    else : 
        textWithSpaces += char
        
with open('fromated_text', 'w') as f:
    f.write(textWithSpaces)