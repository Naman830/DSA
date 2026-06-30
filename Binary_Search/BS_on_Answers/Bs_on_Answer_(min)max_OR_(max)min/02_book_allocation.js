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
