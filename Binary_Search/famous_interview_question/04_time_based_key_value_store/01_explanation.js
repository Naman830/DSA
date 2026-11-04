/*
1. Explain the question
You need to implement a data structure that stores multiple values for the same key, each associated with a timestamp.

https://youtu.be/OWKIm52pUC4?si=G8Qc0P3_o7YpUuQZ

You need to implement two functions:
1. set(key, value, timestamp) – Store the key-value pair with its timestamp.
2. get(key, timestamp) – Return the value associated with the largest timestamp that is less than or equal to the given timestamp.
If no such timestamp exists, return "".

Example:
set("foo", "bar", 1);
set("foo", "bar2", 4);

get("foo", 1); // "bar"
get("foo", 3); // "bar"
get("foo", 4); // "bar2"
get("foo", 5); // "bar2"


Notice that get("foo", 3) returns "bar" because timestamp 1 is the largest timestamp less than or equal to 3
*/
