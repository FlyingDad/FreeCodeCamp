function candles(candlesNumber, makeNew) {

	let leftovers = candlesNumber, candlesBurned = candlesNumber, newCandles = 0;


	while(leftovers >= makeNew) {
		newCandles = Math.floor(leftovers / makeNew);
		leftovers -= (newCandles * makeNew);
		candlesBurned += newCandles
		leftovers += newCandles;
	}
	
	// console.log(candlesBurned, leftovers)
	return candlesBurned
}

// When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

// You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?

// Example

let candlesNumber = 5, makeNew = 2;//, the output should be
console.log(candles(candlesNumber, makeNew));// = 9.

// Here is what you can do to burn 9 candles:

// burn 5 candles, obtain 5 leftovers;
// create 2 more candles, using 4 leftovers (1 leftover remains);
// burn 2 candles, end up with 3 leftovers;
// create another candle using 2 leftovers (1 leftover remains);
// burn the created candle, which gives another leftover (2 leftovers in total);
// create a candle from the remaining leftovers;
// burn the last candle.
// Thus, you can burn 5 + 2 + 1 + 1 = 9 candles, which is the answer.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer candlesNumber

// The number of candles you have in your possession.

// Guaranteed constraints:
// 1 ≤ candlesNumber ≤ 15.