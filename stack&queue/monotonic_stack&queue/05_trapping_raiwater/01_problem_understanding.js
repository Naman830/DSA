/*
Explanation:-

You are given an array where each number represents the height of a vertical bar.
height = [4, 2, 0, 3, 2, 5]

5                 █
4   █             █
3   █       █     █
2   █   █   █ █   █
1   █   █   █ █   █
    ─────────────────
    4   2   0 3 2 5

Now imagine rain falls from above.
Water can get trapped between taller bars.

5                 █
4   █~~~~~~~~~~~~~█
3   █~~~~~~~█~~~~~█
2   █~~~█~~~█~█~~~█
1   █~~~█~~~█~█~~~█
    ─────────────────
The ~ represents trapped water.
*/

/*
Observation:-

1. For water to stay somewhere, it needs: 

LEFT WALL       WATER       RIGHT WALL
   █             ~~~            █
   █             ~~~            █
   █             ~~~            █

Water gets trapped between a left boundary and a right boundary.

2. For every position, we need to know how high the water can rise.
*/
