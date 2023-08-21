/////////////////////////////////////////////////
//  MAIN APPLICATION - INSERT MIN HEAP
/////////////////////////////////////////////////

class MinHeap {
    constructor() {
        this.heap = [undefined];
    }

    insertOne(val) {
        let newHeap = [...this.heap, val];

        let childIdx = newHeap.length - 1;
        let parentIdx = Math.trunc(childIdx / 2);
        // console.log({childIdx});
        // console.log({parentIdx});

        while ((newHeap[childIdx] < newHeap[parentIdx]) &&
            (parentIdx > 0)) {
            // swap parent and child
            let temp = newHeap[childIdx];
            newHeap[childIdx] = newHeap[parentIdx];
            newHeap[parentIdx] = temp;

            // get new parent and child indexes
            childIdx = parentIdx;
            parentIdx = Math.trunc(childIdx / 2);
        }

        this.heap = newHeap;
    }

    print() {
        let heap = this.heap;
        console.log({ heap });
    }
}

const insertIntoHeap = (heap, val) => {
    let newHeap = [...heap, val];
    let childIdx = newHeap.length - 1;
    let parentIdx = Math.trunc(childIdx / 2);
    // console.log({childIdx});
    // console.log({parentIdx});

    while ((newHeap[childIdx] < newHeap[parentIdx]) &&
        (parentIdx > 0)) {
        // swap parent and child
        let temp = newHeap[childIdx];
        newHeap[childIdx] = newHeap[parentIdx];
        newHeap[parentIdx] = temp;

        // get new parent and child indexes
        childIdx = parentIdx;
        parentIdx = Math.trunc(childIdx / 2);
    }

    return newHeap;
}

console.log("////////////////////////////////////");
console.log("// Insert Min Heap");
console.log("////////////////////////////////////\n");

console.log("****************************");
console.log("heap: [undefined] || val: 10");
console.log(insertIntoHeap([undefined], 10));

console.log("\n****************************");
console.log("heap: [undefined,10, 12, 16] || val: 8");
console.log(insertIntoHeap([undefined, 10, 12, 16], 8));

console.log("\n****************************");
console.log("heap: [undefined,3, 8, 10, 11, 9, 20, 14] || val: 7");
console.log(insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7));

console.log("\n****************************");
console.log("Insert 10, 12, 16, 8 into empty heap");
const heap1 = new MinHeap();
heap1.insertOne(10);
heap1.insertOne(12);
heap1.insertOne(16);
heap1.insertOne(8);
heap1.print();

console.log("\n****************************");
console.log("Create heap: 3, 8, 10, 11, 9, 20 14");
const heap2 = new MinHeap();
heap2.insertOne(3);
heap2.insertOne(8);
heap2.insertOne(10);
heap2.insertOne(11);
heap2.insertOne(9);
heap2.insertOne(20);
heap2.insertOne(14);
heap2.print();

console.log("\n*** Insert 7 to the above heap");
heap2.insertOne(7);
heap2.print();