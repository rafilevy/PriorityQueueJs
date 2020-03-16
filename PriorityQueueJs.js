//An efficient implementation of a priority queue
//Implemented using a binary heap
class PriorityQueue {
    /**
     * The constructor function for the PriorityQueueClass
     * @param {function(a, b): number} comparator - A comparator function for items in the queue, returns 0 if a==b, +ve if a>b, -ve if a<b
     */
    constructor(comparator = (a,b)=>a==b ? 0 : a>b ? 1 : - 1) {
        this.array = [];
        this.size = 0;
        this.compare = comparator;
    }

    /**
     * Insert an item into the priority queue
     * @param {any} a - The value to be inserted
     */
    insert(a) {
        this.array[this.size] = a;
        this.percolateUp(this.size);
        this.size++;
    }

    /**
     * Returns the highest priority item in the queue without removing it
     * @returns {any} head - The highest priority item in the queue
     */
    peek() {
        if (this.size == 0) {
            console.error("The queue is empty!")
            return null;
        }
        return this.array[0];
    }

    /**
     * Removes the highest priority item from the queue and returns it
     * @returns {any} head - The highest priority item in the queue
     */
    extractMin() {
        if (this.size == 0) {
            console.error("The queue is empty!")
            return null;
        }
        let minEl = this.array[0];
        this.array[0] = this.array[this.size - 1];
        this.size--;
        delete this.array[this.size];
        this.percolateDown(0);
        return minEl;
    }

    /**
     * Changes the key of an item in the queue
     * @param {*} a - The item who's key is to be changed
     * @param {*} newValue - The value to change the item's key to
     */
    changeKey(a, newValue) {
        let index = this.array.indexOf(item);
        if (index == null) throw (new Error("This item does not exist in the queue"));
        this.array[index] = newValue;
        if (this.compare(a, newValue) < 0) this.percolateUp(index);
        else this.percolateDown(index);
    }

    percolateUp(index) {
        for (let i=index; i>0; i=Math.floor((i-1)/2)) {
            if (this.compare(this.array[i], this.array[Math.floor((i-1)/2)]) >= 0) return;
            let temp = this.array[i];
            this.array[i] = this.array[Math.floor((i-1)/2)];
            this.array[Math.floor((i-1)/2)] = temp;
        }
    }

    percolateDown(index) {
        let i = index;
        while (true) {
            if (i*2 +1 >= this.size) return;
            if (2*i +2 >= this.size) {
                if (this.compare(this.array[i], this.array[2*i+1]) > 0) {
                    let temp = this.array[i];
                    this.array[i] = this.array[2*i +1];
                    this.array[2*i+1] = temp;
                }
                return;
            }
            if ((this.compare(this.array[i], this.array[2*i+1]) < 0) && (this.compare(this.array[i], this.array[2*i+2]) < 0)) return;
            let swapChild = this.compare(this.array[2*i+1], this.array[2*i+2]) <  0 ? 2*i+1 : 2*i +2;
            let temp = this.array[i];
            this.array[i] = this.array[swapChild];
            this.array[swapChild] = temp;
            i = swapChild;
        }
    }

    /**
     * @returns {boolean} a boolean indicating if the queue is empty
     */
    isEmpty() {
        return this.size == 0;
    }

}