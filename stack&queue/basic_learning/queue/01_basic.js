/*
Queue
A Queue is a linear data structure that follows the FIFO principle.

FIFO = First In, First Out
The element inserted first is removed first.

Ticket Counter 🎫
A → B → C  →  D
^             ^
Front       Rear

Front = Where people leave.
Rear = Where new people join.
*/

/*
1. Enqueue (Insert)

Empty Queue
Front      Rear
[]

Enqueue(10)
Front Rear
[10]

Enqueue(20)
Front      Rear
[10]       [20]

Enqueue(30)
Front       Rear
[10]  [20]  [30]
*/

/*
2. Dequeue (Remove)

Before
Front       Rear
[10]  [20]  [30]

Dequeue() [FIRST IN FIRST OUT]
Removed = 10

After 
Front   Rear
[20]    [30]
*/

/*
3. Front / Peek
Returns the first element.
Front = 20

4. isEmpty()
Checks if the queue is empty.

Where is Queue Used?
1. Printer queue
2. CPU scheduling
3. Ticket booking systems
4. Breadth First Search (BFS)
5. Task scheduling
*/
