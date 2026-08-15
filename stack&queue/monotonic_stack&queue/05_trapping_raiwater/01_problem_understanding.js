/*
Trapping Rain Water

Explanation:
- Each number represents the height of a vertical bar.

  height = [4, 2, 0, 3, 2, 5]

  5                 █
  4   █             █
  3   █       █     █
  2   █   █   █ █   █
  1   █   █   █ █   █
      ─────────────────
      4   2   0 3 2 5

- When it rains, water can get trapped between taller bars.

  5                 █
  4   █~~~~~~~~~~~~~█
  3   █~~~~~~~█~~~~~█
  2   █~~~█~~~█~█~~~█
  1   █~~~█~~~█~█~~~█

- '~' represents trapped water.
*/

//=================================================================================================
//=================================================================================================
//=================================================================================================

/*
Key Observation:

1. Water can be trapped only when there is a boundary
   on both the left and right.

       LEFT WALL       RIGHT WALL
          █               █
          █~~~~~~~water~~~█
          █~~~~~~~water~~~█

2. For every position, we need to know:
   - Tallest wall on the left
   - Tallest wall on the right
   - Height of the current bar
*/

//=================================================================================================
//=================================================================================================
//=================================================================================================

/*
Thinking Process:

       LEFT MAX       RIGHT MAX
          ↓              ↓
          █~~~~~~~~~~~~~~█  ← water level
          █~~~~~~█~~~~~~~█
          █~~~~~~█~~~~~~~█
                 ↑
            current bar

Ask for every position:

1. What is the tallest wall on my left?
2. What is the tallest wall on my right?
3. What is my current bar height?

The shorter boundary decides how high the water can rise.
*/
