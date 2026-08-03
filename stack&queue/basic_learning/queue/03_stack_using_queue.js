// Can you make the Queue behave exactly like a Stack?

/*
1. Initially Queue is Empty.
   Queue = []
   Size = 0

2. Queue follows FIFO.
   Push(10), Push(20)
   Queue = [10, 20]

3. But Stack follows LIFO.
   So after every push, rotate the queue.
   Queue = [20, 10]

4. Push(30)
   Queue = [20, 10, 30]

   Rotate again.
   Queue = [30, 20, 10]

5. Pop()
   Remove the front element (30).
   Queue = [20, 10]

   Since we always keep the latest element at the front,
   the queue behaves exactly like a stack.
*/
