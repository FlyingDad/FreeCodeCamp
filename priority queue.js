function PriorityQueue () {
	this.collection = [];
	this.printCollection = function() {
		console.log(this.collection);
	};
	// Only change code below this line
	this.enqueue = function(e){
		let priorityQueueStart = Infinity;
		if(this.collection.length){
			priorityQueueStart = this.collection[0][1];
			//console.log(this.collection[insertIndex][1])
		}
		let newQueuePriority = e[1];
		insertIndex = 0;
		
		while(newQueuePriority >= priorityQueueStart && insertIndex < this.collection.length ){
			insertIndex += 1;
			
			if (this.collection[insertIndex]) {
				priorityQueueStart = this.collection[insertIndex][1];
			}
		}
		this.collection.splice(insertIndex, 0, e);
	}
	this.dequeue = () => this.collection.shift();
	this.size = () => this.collection.length;
	this.front = () => this.collection[0];
	this.isEmpty = () => this.collection.length ? false : true;
		// Only change code above this line
}

let testQ = new PriorityQueue();
testQ.enqueue(['first', 1])
testQ.enqueue(['sec', 2])
testQ.enqueue(['third', 1])
testQ.enqueue(['fourth', 3])
testQ.enqueue(['fifth', 1])
testQ.dequeue()
console.log(testQ.size())
console.log(testQ.front())
console.log(testQ.isEmpty())
testQ.printCollection()