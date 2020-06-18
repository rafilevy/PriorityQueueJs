
/**
 * An error specific to priority queue operations
 */
export class PriorityQueueError extends Error {
    constructor(msg?: any) {
        super(msg);
    }
}

/**
 * A priority queue implemented using binomial heaps
 * @template T the type of item being stored in the priority a queue
 */
export class PriorityQueue<T> {

    private array: T[] = [];
    private size: number = 0;
    private compare: (a: T, b: T) => number

    /**
     * The constructor function for a priority queue
     * @param comparator a comparator function for comparing elements
     */
    constructor (comparator?: (a: T, b: T) => number) {
        this.compare = comparator ? comparator : (a: T, b: T) => a > b ? 1 : a==b ? 0 : -1;
    }

    /**
     * Inserts an item into the priority queue
     * @param a the item to be inserted
     */
    insert(a: T): void {
        this.array[this.size] = a;
        this._percolateUp(this.size);
        this.size++;
    }

    /**
     * Returns the highest priority item without removing it
     * @throws `PriorityQueueError` if the queue is empty
     */
    peek(): T {
        if (this.size == 0) {
            throw new PriorityQueueError();
        }
        return this.array[0];
    }

    /**
     * Returns the highest priority item and removes it from the queue
     * @throws `PriorityQueueError` if the queue is empty
     */
    extractMin(): T {
        if (this.size == 0) {
            throw new PriorityQueueError();
        }
        let minEl = this.array[0];
        this.array[0] = this.array[this.size - 1];
        this.size--;
        delete this.array[this.size];
        this._percolateDown(0);
        return minEl;
    }

    /**
     * Swaps out an item in the queue for a new item, can be used to update the key of an item
     * Note: has time complexity O(n)
     * @param item the item to be swapped out of the queue
     * @param newItem the item to be swapped into the queue
     */
    changeItem(item: T, newItem: T) {
        let index = this.array.indexOf(item);
        if (index == null) throw (new Error("This item does not exist in the queue"));
        this.array[index] = newItem;
        if (this.compare(item, newItem) < 0) this._percolateUp(index);
        else this._percolateDown(index);
    }

    private _percolateUp(index: number) {
        for (let i=index; i>0; i=Math.floor((i-1)/2)) {
            if (this.compare(this.array[i], this.array[Math.floor((i-1)/2)]) >= 0) return;
            let temp = this.array[i];
            this.array[i] = this.array[Math.floor((i-1)/2)];
            this.array[Math.floor((i-1)/2)] = temp;
        }
    }

    private _percolateDown(index: number) {
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
     * Returns a boolean indicating whether or not the queue is empty
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

}