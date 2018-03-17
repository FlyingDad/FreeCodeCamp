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

	getChannelStatus();

	function getChannelStatus() {
		users.forEach(function (user){
			let url = twitchApiStream + user + cb;
			//console.log(user);
			$.getJSON		(twitchApiStream + user + cb, function (data) {
			var newstream = new stream(user);
			if(!data.stream) {
				streamObjs.push(newstream);
				displayUsers(newstream);
				return;  // channel is offline
			}
			//console.log(data.stream.viewers);
			newstream.game = data.stream.game;
			newstream.id = data.stream._id;
			newstream.online = true;
			newstream.viewers = data.stream.viewers;
			streamObjs.push(newstream);
			//console.table(streamObjs);
			displayUsers(newstream);
			});
		});
		//displayUsers();
	}

	function displayUsers(newstream){
		let table = document.querySelector('table');
		let row = document.createElement('tr');
		row.innerHTML = `<td>${newstream.user}</td><td>${newstream.game}</td><td>${newstream.viewers}</td><td class="${newstream.online ? 'online':'offline'}">${newstream.online ? 'Online':'Offline'}</td>`;
		table.appendChild(row);
		row.addEventListener('click', openChannel);
	}

	function openChannel(e){
		//get cell index of click, if #3(status), then we open twitch page
		if(e.toElement.cellIndex !== 3){
			return;
		}
		console.log(e);
		// array element 1 is the table row
		let row = e.path[1];
		let channel = row.querySelectorAll('td');
		//  3rd in nodelist is online/offline cell
		// let status = $(channel[3]).text();
		// 1st in nodelist is username
		let user = $(channel[0]).text()
		// if(status === 'Offline'){
		// 	console.log('Offline');
		// 	return;
		// }
		// console.log(user);
		window.open(twitchTv + user, '_blank');
	}


	// end of doc ready
});