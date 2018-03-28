/* jshint esversion: 6 */
$(document).ready(function () {
	const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "ninja", "emongg"];
	// base url to live stream - add channelname to go to live stream
	const twitchTv = 'https://www.twitch.tv/';
	// basre url to check stream status
	const twitchApiStream = 'https:///wind-bow.glitch.me/twitch-api/streams/';
	const cb = '?callback?';

	// array of users
	let streamObjs = [];
	// user object
	function stream(user) {
		this.user = user;
		this.online = false;
		this.id = 0;
		this.game = '';
		this.viewers = 0;
	}


	// getChannelStatus();
const grabContent = user => getChannelStatus(user)
.then(success => console.log('success'));
//.then(html => (console.log('done')));

Promise
    .all(users.map(grabContent))
		.then(() => console.log(`Urls ${users} were grabbed`))
		.then(() => displayUsers());
		

	function getChannelStatus(user) {
		// console.log('test');
		// return 'test';
		// users.forEach(function (user){
			let url = twitchApiStream + user + cb;
			//console.log(user);
			$.getJSON		(twitchApiStream + user + cb, function (data) {
			var newstream = new stream(user);
			if(!data.stream) {
				streamObjs.push(newstream);
				//displayUsers(newstream);
				return;  // channel is offline
			}
			//console.log(data.stream.viewers);
			newstream.game = data.stream.game;
			newstream.id = data.stream._id;
			newstream.online = true;
			newstream.viewers = data.stream.viewers;
			streamObjs.push(newstream);
			console.table(streamObjs);
		// 	//displayUsers(newstream);
		// 	});
		var res = 'shit';
		return res;
		});
		// //displayUsers();
	}

	function displayUsers(){
		console.log('display');
		console.log('objects: ' + streamObjs.length);
			// let table = document.querySelector('table');
			// let row = document.createElement('tr');
			// row.innerHTML = `<td>${newstream.user}</td><td>${newstream.game}</td><td>${newstream.viewers}</td><td>${newstream.online ? 'Online':'Offline'}</td>`;
			// table.appendChild(row);
	}


	// end of doc ready
});