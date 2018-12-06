function chuckNorris(MESSAGE) {
	let binaryMessage = '';  // MESSAGE conv to binary
	let chucksUnary = '';   // will be the solution

	// convert MESSAGE to binary
	for(let i = 0; i < MESSAGE.length; i++){
		binaryMessage += MESSAGE.charCodeAt(i).toString(2);
	}
	let binaryMessageArr = binaryMessage.split('');
	console.log(binaryMessageArr)
	// iterate each bit and create chucks unary
	// output format:
	// two blocks per bit
	// - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
	// - Second block: the number of 0 in this block is the number of bits in the series
	let block = '';
	let counter = 0;
	let currentBit = '';
	binaryMessageArr.forEach(bit => {

		// new sequence
		if(counter === 0 ) {
			currentBit = bit;
			counter++;
			if(bit === '0') {
				// console.log('0')
				block += '00 0'
			} else {
				block += ('0 0')
			}
		} 
		//check for and of sequence, reset
		else if(bit !== currentBit) {
			counter = 0;
			chucksUnary += block + ' ';
			block = '';
			if(bit === '0') {
				// console.log('0')
				block += '00 0'
			} else {
				block += ('0 0')
			}
		} else {
		// analyzing current sequence
			block += '0'
		}
	})

	return chucksUnary;
}


console.log(chuckNorris('C'));

// Here is the encoding principle:

// The input message consists of ASCII characters (7-bit)
// The encoded output message consists of blocks of 0
// A block is separated from another block by a space
// Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):

//  	Example

// Let’s take a simple example with a message which consists of only one character: Capital C. C in binary is represented as 1000011, so with Chuck Norris’ technique this gives:

// 0 0 (the first series consists of only a single 1)
// 00 0000 (the second series consists of four 0)
// 0 00 (the third consists of two 1)
// So C is coded as: 0 0 00 0000 0 00


// Second example, we want to encode the message CC (i.e. the 14 bits 10000111000011) :

// 0 0 (one single 1)
// 00 0000 (four 0)
// 0 000 (three 1)
// 00 0000 (four 0)
// 0 00 (two 1)
// So CC is coded as: 0 0 00 0000 0 000 00 0000 0 00