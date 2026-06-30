/*
Imagine you have some books arranged in a row.
Each book contains some number of pages.

Example:
Books = [25, 46, 28, 49, 24]

Suppose there are 2 students.
Your job is to distribute all books among these students.

But there are some rules.

Rule 1: Every book must be assigned
Rule 2: One book cannot be divided
Rule 3: Every student must get at least one book
Rule 4: Books must remain contiguous:
[10,20,30,40]
Allowed: Student1 → 10 20
Not Allowed: Student1 → 10 30
*/

/*
We want
The minimum possible value of the maximum pages assigned to any student.

SIMPLE: We want the student who gets the most pages to still have as few pages as possible.
*/

// -=======================================================================
// -=======================================================================
// -=======================================================================
// -=======================================================================

// 1. Brute Force Solution
/*
The answer (maximum pages assigned to a student) can only lie between:

Maximum pages in a single book (minimum possible answer)
Sum of all pages (maximum possible answer)
*/

/*
Pseudo Code
Find maxBook
Find totalPages

For pages = maxBook to totalPages

    studentsNeeded = countStudents(pages)

    If studentsNeeded <= m
        return pages
*/

// Returns how many students are required if
// each student can read at most maxPages.
function countStudents(arr, maxPages) {
  let students = 1; // First student
  let currentPages = 0; // Pages assigned to current student

  for (let pages of arr) {
    // Assign book to current student if possible
    if (currentPages + pages <= maxPages) {
      currentPages += pages;
    } else {
      // Otherwise assign the book to a new student
      students++;
      currentPages = pages;
    }
  }

  return students;
}

function bookAllocation(arr, m) {
  // Impossible if students are more than books
  if (m > arr.length) return -1;

  // Lowest possible answer
  let low = Math.max(...arr);

  // Highest possible answer
  let high = arr.reduce((sum, page) => sum + page, 0);

  // Check every possible answer one by one
  for (let pages = low; pages <= high; pages++) {
    const studentsNeeded = countStudents(arr, pages);

    // First valid answer is the minimum possible answer
    if (studentsNeeded <= m) {
      return pages;
    }
  }

  return -1;
}

// Example
const books = [25, 46, 28, 49, 24];
const students = 4;

/*
Time Complexity
countStudents() → O(n)
We check every value from maxBook to sum
Overall: O((sum - maxBook) × n)

Space Complexity ---> O(1)
*/

// 2. Binary Search Solution (Optimal)

/*
Pseudo Code
low = maximum book pages
high = total pages

While low <= high
    mid = (low + high) / 2
    studentsNeeded = countStudents(mid)

    If studentsNeeded <= m
        answer = mid
        high = mid - 1

    Else
        low = mid + 1

Return answer
*/

function bookAllocationBinary(arr, m) {
  // Impossible case
  if (m > arr.length) return -1;

  // Search space
  let low = Math.max(...arr);
  let high = arr.reduce((sum, page) => sum + page, 0);

  let answer = -1;

  while (low <= high) {
    // Middle value (candidate answer)
    const mid = low + Math.floor((high - low) / 2);

    // Students required if each student
    // can read at most mid pages
    const studentsNeeded = countStudents(arr, mid);

    if (studentsNeeded <= m) {
      // Allocation is possible.
      // Try to minimize the answer.
      answer = mid;
      high = mid - 1;
    } else {
      // Need more pages per student.
      low = mid + 1;
    }
  }

  return answer;
}

console.log(bookAllocationBinary(books, students));

/*
The search space is:

maxBook → totalPages
Binary Search takes:

O(log(sum - maxBook))

Overall: O(n × log(sum - maxBook))
Space Complexity ---> O(1)
*/
