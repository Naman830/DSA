/*
SHORT SUMMARY 

We are minimizing
    Largest Distance
NOT
    Average Distance
NOT
    Total Distance

Always think:
"What is the biggest gap after placing new stations?
That biggest gap should be as small as possible.
*/

/*
You are given:

A sorted array stations[] representing the positions of existing gas stations.
An integer k, representing the number of new gas stations you can build.

Your task is to place exactly k new gas stations between the existing stations so that:

The maximum distance between any two adjacent gas stations becomes as small as possible.

Return that minimum possible maximum distance.


Example
stations = [1, 7]
k = 2

Initially
1 ---------------------- 7

Distance = 6
We can add two stations.

Best placement:

1 ---- 3 ---- 5 ---- 7

Distances:
2
2
2

Maximum distance = 2
Answer = 2
*/

// 1. Brute Force Solution
/*
Pseudocode
Find the interval with the largest current section.
Add one gas station to that interval.
Update its largest section.

extraStations[] = 0

Repeat k times
    maxGap = -1
    index = -1

    For every interval

        currentGap =
        originalGap /
        (extraStations[i] + 1)

        if currentGap > maxGap

             maxGap = currentGap
             index = i

    extraStations[index]++
    
Return maximum current gap
*/
