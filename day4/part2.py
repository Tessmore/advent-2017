"""
    --- Part Two ---

    For added security, yet another system policy has been put in place. Now, a valid passphrase must contain no two words that are anagrams of each other - that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

    For example:

    abcde fghij is a valid passphrase.
    abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
    a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
    iiii oiii ooii oooi oooo is valid.
    oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
    Under this new system policy, how many passphrases are valid?
"""


from collections import Counter

valid = 0


with open("input.txt", 'r') as f:
    content = f.read().split("\n")

    for line in content:
        words = [''.join(sorted(s)) for s in line.split(" ")]
        counts = Counter(words)

        if counts.most_common(1)[0][1] < 2:
            valid += 1


print(valid)
