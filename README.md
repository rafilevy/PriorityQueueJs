# PriorityQueueJs

An efficient implementation of priority queue's in javascript - implemented with binary heaps

<a name="PriorityQueue"></a>

## PriorityQueue
**Kind**: global class  

* [PriorityQueue](#PriorityQueue)
    * [new PriorityQueue(comparator)](#new_PriorityQueue_new)
    * [.insert(a)](#PriorityQueue+insert)
    * [.peek()](#PriorityQueue+peek) ⇒ <code>any</code>
    * [.extractMin()](#PriorityQueue+extractMin) ⇒ <code>any</code>
    * [.changeKey(a, newValue)](#PriorityQueue+changeKey)
    * [.isEmpty()](#PriorityQueue+isEmpty) ⇒ <code>boolean</code>

<a name="new_PriorityQueue_new"></a>

### new PriorityQueue(comparator)
The constructor function for the PriorityQueueClass


| Param | Type | Description |
| --- | --- | --- |
| comparator | <code>function</code> | A comparator function for items in the queue, returns 0 if a==b, +ve if a>b, -ve if a<b |

<a name="PriorityQueue+insert"></a>

### priorityQueue.insert(a)
Insert an item into the priority queue

**Kind**: instance method of [<code>PriorityQueue</code>](#PriorityQueue)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>any</code> | The value to be inserted |

<a name="PriorityQueue+peek"></a>

### priorityQueue.peek() ⇒ <code>any</code>
Returns the highest priority item in the queue without removing it

**Kind**: instance method of [<code>PriorityQueue</code>](#PriorityQueue)  
**Returns**: <code>any</code> - head - The highest priority item in the queue  
<a name="PriorityQueue+extractMin"></a>

### priorityQueue.extractMin() ⇒ <code>any</code>
Removes the highest priority item from the queue and returns it

**Kind**: instance method of [<code>PriorityQueue</code>](#PriorityQueue)  
**Returns**: <code>any</code> - head - The highest priority item in the queue  
<a name="PriorityQueue+changeKey"></a>

### priorityQueue.changeKey(a, newValue)
Changes the key of an item in the queue

**Kind**: instance method of [<code>PriorityQueue</code>](#PriorityQueue)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | The item who's key is to be changed |
| newValue | <code>\*</code> | The value to change the item's key to |

<a name="PriorityQueue+isEmpty"></a>

### priorityQueue.isEmpty() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PriorityQueue</code>](#PriorityQueue)  
**Returns**: <code>boolean</code> - a boolean indicating if the queue is empty
