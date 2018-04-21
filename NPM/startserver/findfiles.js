

exports.findFiles =  function findfiles(path, filter){
	console.log('in filefinder');
	var fs = require('fs');
	fs.readdir(path,function(err, data){
		if(err){
		return(err, null);
	} else {
		//console.log(data);
		var filtered = data.filter(function(file){
			//console.log(file);
			return file.includes('.' + filter);
		});
		//console.log(filtered);
		
		filtered.forEach(function(file){
			console.log(file);
		});
		return (null,filtered);
	}
	});
};