// Precomputation means calculating useful information once in advance and storing it, so that future queries can be answered quickly.

// When we use hashing for this, we store the precomputed data in a:
// HashMap / Object / Map / Array frequency table


/*
Optimal Pseudocode
create empty hash map

for each element in array:
    if element exists in map:
        increase its count
    else:
        store it with count 1

for each query:
    if query exists in map:
        print map[query]
    else:
        print 0
*/