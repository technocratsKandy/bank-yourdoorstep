/****
	filename : main.js
	description : server side entry point
****/

$(function() {
	var callId;
	kandy.setup({

		remoteVideoContainer: $('#incoming-video')[0],
		localVideoContainer: $('#outgoing-video')[0],

		listeners: {
			callincoming: onCallIncoming,
			oncall: onCall,
			callanswered: onCallAnswer,
			callended: onCallTerminate,
			callrejected: onCallRejected,
			messagesavailable: onMessagesAvailable
		}
	});

	function onCallIncoming() {
		console.log('Call incoming');
	}

	function onCall(call) {
		console.log('Calling');
	}

	function onCallAnswer() {
		console.log('call answered');
	}

	function onCallTerminate() {
		console.log('call terminated');
	}

	function onCallRejected() {
		console.log('call rejected');
	}


	function onCallIncoming(call, isAnonymous) {
		callId = call.getId();
		console.log('call id:' + callId);
		if (!isAnonymous) {
			$('#username-incoming').text(call.callerName + ' Calling!');
			console.log('Call comming from' + call.callerName);
		} else {
			$('#username-incoming').text('Anonymous Calling');
			console.log('Call comming from anonymous');
		}
	}

	function onMessagesAvailable(call, isAnonymous) {
		console.log('New message available');

		//Getting incoming message
		kandy.messaging.getIm(function(data) {
			console.log('getting message');

			// data object is an array of incoming messages sent on successful getIM()
			// Iterate through data object & append messages to DOM
			data.messages.forEach(function(msg) {
				if (msg.messageType == 'chat' && msg.contentType === 'file') {
					//if(msg.messageType == 'chat') {
					console.log(msg.message.timestamp + "  " + msg.message.content_name);
					console.log('sender userid' + msg.sender.user_id);
					var $username = $('<h5>').text(msg.sender.user_id);
					var uuid = msg.message.content_uuid;
					var thumbnailURL = kandy.messaging.buildFileThumbnailUrl(uuid);
					var $fileName = $('<a>').text(msg.message.content_name).attr({
						'href': kandy.messaging.buildFileUrl(uuid),
						'target': '_blank'
					});
					var $file = $('<img>').attr('src', thumbnailURL).css('width', '20px');
					//var $chatItem = $('<div class="well text-left">'); 
					console.log(thumbnailURL);
					/*$chatItem.append($username, $file, $fileName);
					$('#chat-messages').append($chatItem); */
					$('#results').append($file).append($fileName);
				} else {
					// When the recieved messageType is not chat, display message type
					console.log('received type' + msg.messageType + 'received content type ' + msg.contentType);
				}
			});
		},

		function() {
			alert('error recieving IMs');
		});
	}

	$('#btnAnswer').click(function() {
		kandy.call.answerCall(callId, true);
		$('#start_button').click();
	});
	kandy.login('DAK198cc096c4a645a2b32dc2b21736f47a',
		'user1@technocrats.gmail.com',
		'1odioeatenetur1',

	function() {
		console.log('login success. ready to handle call request');
	},

	function() {
		console.log('login failed');
	});


});