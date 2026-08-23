/*
You are given n people and a matrix knows[i][j].

knows[i][j] = 1 means person i knows person j.

A celebrity must satisfy both:
Celebrity knows nobody → their entire row is 0.
Everybody knows the celebrity → their entire column is 1 except themselves.

Example:
      0  1  2
0     0  1  0
1     0  0  0
2     1  1  0

Person 1 is celebrity because:
Person 1 knows nobody → row 1 = [0,0,0]
Everybody knows person 1 → column 1 = [1,0,1]

Key Observation:- There should be only ONE celebrity
*/
