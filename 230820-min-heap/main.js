/////////////////////////////////////////////////
//  MAIN APPLICATION - INSERT MIN HEAP
/////////////////////////////////////////////////

const insertIntoHeap = (heap, val) => {
    let newHeap = [...heap, val];
    let childIdx = newHeap.length - 1;
    let parentIdx = Math.trunc(childIdx / 2);
    // console.log({childIdx});
    // console.log({parentIdx});

    while ( (newHeap[childIdx] < newHeap[parentIdx]) && 
            ( parentIdx > 0 ) ) {
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

console.log("****************************");
console.log("heap: [undefined,10, 12, 16] || val: 8");
console.log(insertIntoHeap([undefined, 10, 12, 16], 8));