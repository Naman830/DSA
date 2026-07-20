/*
dog -> abc

d → a
o → b
g → c

Everything is consistent.
✅ Isomorphic.

Rule 1: We cannot assign a letter two time 
You can never change your mind.
Not like this:

a → x
Later...
a → y
❌ Not allowed!


Rule 2: One friend cannot belong to two letters.
Like this
a ❤️ x
b ❤️ y
c ❤️ z

Not
a ❤️ x
a ❤️ y

or
a ❤️ x
b ❤️ x

Rule 3:     
*/

/*
Approach (Optimal)
We use two HashMaps (Map):

mapST → Stores mapping from string s to string t.
mapTS → Stores mapping from string t to string s.

Why two maps?
The first map ensures one character from s always maps to the same character in t.
The second map ensures two different characters from s don't map to the same character in t.
 */
