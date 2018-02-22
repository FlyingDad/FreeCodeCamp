function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line
	var sourceKeys = Object.keys(source);
	//console.log(sourceKeys);
    //console.log(Object.entries(source));
    for(var c = 0; c < collection.length; c++){ // outer
    //collection.forEach(collectionObj => {
        //console.log("outer " + c, arr);
        var match = true;
        if(match == true){
            for(var s = 0; s < sourceKeys.length; s++){  //inner
                //console.log("inner " + s, match);
                if(match == false){console.log("skipping");break;}
                //console.log("sourcekey " + s, match);
                if(!collection[c].hasOwnProperty(sourceKeys[s])){ 
                    //console.log("...setting false");
                    match = false;
                    //console.log(match);
                    break;                   
                } else if (collection[c][sourceKeys[s]] !== source[sourceKeys[s]]){
                        match = false;
                        break;
                } 
            }
            if(match== true){
                //console.log("pushing....");
                arr.push(collection[c]);
            }
        }           
    }
    return arr;
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
  console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
   console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })); // should return [{ "a": 1, "b": 2, "c": 2 }]
  