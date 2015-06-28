/****
	filename : main.js
	description : client side entry point
****/
$(function() {

	var callId, call;

	kandy.setup({
		remoteVideoContainer: $('#incoming-video')[0],
		localVideoContainer: $('#outgoing-video')[0],
		listeners: {
			callinitiated: onCallInitiated,
			callinitiatefailed: onCallInitiatedFailed,
			oncall: onCall,
			callended: onCallEnded,
			messagesavailable: onMessagesAvailable
		}
	});

	function onCallEnded(call) {

		console.log('Call Ended');
	}

	function onCall(call) {
		console.log('Call running');
	}

	function onCallInitiated(call) {
		callId = call.getId();
		console.log('Call Started');
	}

	function onCallInitiatedFailed() {
		console.log('Call Failed');
	}

	kandy.login('DAKc16ba7264dd34b848dda50d75af37fc2',
		'user1@zerolatency.gmail.com',
		'1exercitationemde1',

	function() {
		console.log('login success. ready to call');
	},

	function() {
		console.log('login failed');
	});

	$('#btnCall').on('click', function() {
		kandy.call.makeCall("user1@technocrats.gmail.com", true);
	});

	$('#btnEndCall').on('click', function() {
		console.log('request to end call');
		kandy.call.endCall(callId);
	});

	$('#chat-btn').on('click', function() {
		sendMessage();
	});

	function sendMessage() {
		var file = $('#chat-file')[0].files[0];
		var sendTo = $('#chat-contacts').val();

		kandy.messaging.sendImWithFile("user1@technocrats.gmail.com", file, function() {


			var $chatItem = $('<div class="well text-right">')
			//var $username = $('<h5>').text(username);
			var $file = $('<p>').text(file.name);

			//$chatItem.append($username, $file);
			//$('#chat-messages').append($chatItem);
		},

		function() {
			alert('IM send failed');
		});
	}

	function onMessagesAvailable() {

		kandy.messaging.getIm(function(data) {

			data.messages.forEach(function(msg) {

				if (msg.messageType == 'chat' && msg.contentType === 'file') {
					var $username = $('<h5>').text(msg.sender.user_id);
					var uuid = msg.message.content_uuid;
					var thumbnailURL = kandy.messaging.buildFileThumbnailUrl(uuid);
					var $fileName = $('<a>').text(msg.message.content_name).attr({
						'href': kandy.messaging.buildFileUrl(uuid),
						'target': '_blank'
					});
					var $file = $('<img>').attr('src', thumbnailURL).css('width', '20px');
					var $chatItem = $('<div class="well text-left">');

					$chatItem.append($username, $file, $fileName);
					$('#chat-messages').append($chatItem);
				} else {
					console.log('received ' + msg.messageType + ': ');
				}
			});
		},

		function() {
			alert('error recieving IMs');
		});

	}
});