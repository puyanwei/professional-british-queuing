# British Professional Queuing

This is a kata from https://www.codewars.com/kata/the-supermarket-queue/train/javascript

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
So, for example:

```
queueTime([5,3,4], 1)
```

Should return 12 because when n=1, the total time is just the sum of the times

```
queueTime([10,2,3,3], 2)
```

Should return 10 because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished.

```
queueTime([2,3,10], 2)
```

Should return 12

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.

//all numbers gets deducted by the lowest, lowest is removed and next number in array is added. That number removed should be added to array, and then summed to get the total time.
