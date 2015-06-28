/**
 * Copyright 2015, Genband
 * Version 2.2.2
 * kandy
 * @singleton
 */

/*eslint-disable */

(function( window, undefined ) {
'use strict';

// private copy of response codes
var responseCodes = {
    OK: 0,
    internalServerError: 1,
    tokenExpired: 10,
    permissionDenied: 11,
    usageQuotaExceeded: 12,
    insufficientFunds: 13,
    validationFailed: 14,
    missingParameter: 15,
    invalidParameterValue: 16,
    badParameterValue: 17,
    unknownRequest: 18,
    noData: 19,
    alreadyExists: 50,
    invalidIdentifier: 51,
    invalidPassword: 52,
    doesNotExist: 53,
    invalidCountryCode: 54,
    invalidCredentials: 55,
    ajaxError: 5000,
    wsError: 6000,
    wsAlreadyOpened: 6001,
    wsNotFound: 6002,
    wsCreateError: 6003,
    wsNotAuth: 6004
};

var api = {
    /**
     * Version of this release
     * @type String
     */
    version: '2.2.2',
    // public copy of response codes
    responseCodes: JSON.parse(JSON.stringify(responseCodes))

};

var _nofunc = function(){};
var _logger = {
        'info': _nofunc,
        'warn': _nofunc,
        'error': _nofunc,
        'debug': _nofunc
    };

function _setLogLevel(level){

    var lError = false, lWarn = false, lInfo = false, lDebug = false;
    if(window.console && console.warn && console.error && console.info){
        if(level === 'debug'){
            lError = lWarn = lInfo = lDebug = true;
        }if(level === 'info'){
            lError = lWarn = lInfo = true;
        } else if(level === 'warn'){
            lError = lWarn = true;
        } else if(level === 'error'){
            lError = true;
        }

        if(lDebug){
            _logger.debug = window.console.log.bind(window.console, 'kandy debug: %s');
        }

        if(lInfo){
            _logger.info = window.console.info.bind(window.console, 'kandy info: %s');
        }

        if(lWarn){
            _logger.warn = window.console.warn.bind(window.console, 'kandy warn: %s');
        }

        if(lError){
            _logger.error = window.console.error.bind(window.console, 'kandy error: %s');
        }
    }
}

//default log level
_setLogLevel('warn');

var _events = {};


_events = {};

/**
 * @event callinitiated
 * Fired when an outgoing call is initiated
 * @param {Call} fcs.call.OutgoingCall object
 * @param {String} number ID of the callee
 */
_events.callinitiated = null;

/**
 * @event callinitiatefailed
 * Fired when an attempt to initiate an outgoing call fails
 * @param {String} reasonText The reason for the failure or empty string
 */
_events.callinitiatefailed = null;

/**
 * @event callincoming
 * Fired when a call is coming in
 * @param {Call} call The call object
 */
_events.callincoming = null;

/**
 * @event callended
 * Fired when a call has ended
 * @param {string} call The call object
 */
_events.callended = null;

/**
 * @event callendfailed
 * Fired when a call fails to end
 * @param {string} call The call object
 */
_events.callendfailed = null;

/**
 * @event callanswered
 * Fired when a call is answered
 * @param {Call} call The call object
 * @param {Boolean} isAnonymous True if the all is anonymous
 */
_events.callanswered = null;

/**
 * @event callanswerfailed
 * Fired when a failure occurs when answering a call
 * @param {Call} call The call object
 */
_events.callanswerfailed = null;

/**
 * @event oncall
 * Fired while on call
 * @param {Call} call The call object
 */
_events.oncall = null;


_events.media = null;


/**
 * @event presencenotification
 * @param {String} username Username of presence event
 * @param {String} state Presence state
 * @param {String} description Presence description
 * @param {String} activity Presence activity
 * Fired when presence notification is received
 */
_events.presencenotification = null;

/**
 * @event loginsuccess
 * @depracated
 * Fired when logged on
 */
_events.loginsuccess = null;

/**
 * @event setupsuccess
 * Fired when logged on
 */
_events.setupsuccess = null;

/**
 * @event setupfailed
 * Fired when a login attempt fails
 */
_events.setupfailed = null;

/**
 * @event loginfailed
 * @depracated
 * Fired when logged on
 */
_events.loginfailed = null;

/**
 * @event callrejected
 * Fired when a call is rejected
 * @param {Call} call The call object
 */
_events.callrejected = null;

/**
 * @event callrejectfailed
 * Fired when a call rejection fails
 * @param {Call} call The call object
 */
_events.callrejectfailed = null;

/**
 * @event callignored
 * Fired when a call ignore succeeds
 * @param {Call} call The call object
 */
_events.callignored = null;

/**
 * @event callignorefailed
 * Fired when a call ignore fails
 * @param {Call} call The call object
 */
_events.callignorefailed = null;

/**
 * @event remotehold
 * Fired other party puts call on hold
 * @param {Call} call The call object
 */
_events.remotehold = null;

/**
 * @event remoteunhold
 * Fired other party releases hold on call
 * @param {Call} call The call object
 */
_events.remoteunhold = null;

/**
 * @event onconnectionlost
 * Fired when connection to comms server dies
 */
_events.onconnectionlost = null;

/**
 * @event onmessagesavailable
 * Fired when new messages available
 */
_events.messagesavailable = null;

/**
 * @method _fireEvent
 * Fires passed event
 * @private
 */
function _fireEvent() {
    var eventName = Array.prototype.shift.apply(arguments);

    if (_events[eventName]) {
        _events[eventName].apply(null, arguments);
    }
}

/**
 * @property {Object} _config Configuration for KandyAPI.Phone.
 * @private
 */
var _config = {
    listeners: {},
    kandyApiUrl: 'https://api.kandy.io/v1.2',
    mediatorUrl: 'http://service.kandy.io:8080/kandywrapper-1.0-SNAPSHOT',
    messageProvider: 'fring',
    pstnOutNumber: '71',
    sipOutNumber: '72',
    allowAutoLogin: false,
    kandyWSUrl: null,
    fcsConfig: {
        restPlatform: 'kandy', // 'spidr' or 'kandy'
        kandyApiUrl: 'https://api.kandy.io/v1.1/users/gateway',
        useInternalJquery: false
    },
    spidrApi: {
        cors: true,
        disableNotifications: null,
        notificationType: fcs.notification.NotificationTypes.WEBSOCKET,
        useInternalJquery: false,
        websocketProtocol: 'wss'
    },
    spidrMedia: {
      pluginMode: 'auto',
      pluginLogLevel: 2
    }
};

/**
 * @property {String} _userDetails. User Details gotten from login
 * @private
 */
var _userDetails = null;

/**
 * @property {Boolean} _autoReconnect. Auto Reconnection configuration
 * @private
 */

var _autoReconnect = true;

/**
 * @property {Boolean} _registerForCalls. Register for Calls configuration
 * @private
 */

var _registerForCalls = true;

/**
 * checking a parameter exists in an URL
 * @param url
 * @param paramKey
 */
var _isParamKeyInUrl = function (url, paramKey) {
    paramKey = paramKey.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + paramKey + '=([^&#]*)'),
            results = regex.exec(url);
    return results != null;
};

/**
 * this method is for setting up default values for an ajax call
 * @param options = {
 * type: 'GET',
 * url: 'http://localhost/api',
 * data: {foo: 'bar'},
 * contentType: 'application/json'
 * acceptType: 'application/json'
 * success: function(response){...},
 * failure: function(){...}
 * }
 * @private
 */
var _kandyAjax = function (options) {

    // set the default method as GET
    if (options.type === undefined || !options.type) {
        options.type = 'GET';
    }

    // set the url for the ajax call
    options.url = (options.kandyApiUrl || _config.kandyApiUrl) + options.url;

    // check if the url doesn't contain 'key' as param,then add userDetails.user_access_token as 'key'
    if (!_isParamKeyInUrl(options.url, 'key')) {
        options.url += ((options.url.indexOf('?') < 0) ? '?' : '&');
        options.url += 'key=' + encodeURIComponent(_userDetails.user_access_token);
    }

    _ajax(options);
};

/**
 *
 * @param options = {
 * type: 'GET',
 * url: 'http://localhost/api',
 * data: {foo: 'bar'},
 * contentType: 'application/json'
 * acceptType: 'application/json'
 * success: function(response){...},
 * failure: function(){...}
 * }
 * @private
 */
var _ajax = function (options) {
    var contentType = options.contentType,
            acceptType = options.acceptType,
            success = options.success,
            failure = options.failure,
            type = options.type,
            url = options.url,
            data = options.data,
            caller = options.caller;

    // set the default content-type as application/json
    if (options.contentType === undefined || !options.contentType) {
        contentType = 'application/json';
    }

    // set the default accept-type as application/json
    if (options.acceptType === undefined || !options.acceptType) {
        acceptType = 'application/json';
    }

    var config = {
        type: type,
        url: url,
        crossDomain: true,
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader('Content-Type', contentType);
            xhrObj.setRequestHeader('Accept', acceptType);
        },
        success: function (response, textStatus, xhr) {
            if (response.status === responseCodes.OK) {
                if (success) {
                    success(response);
                }
            } else {
                if (failure) {
                    failure(xhr.statusText, responseCodes.ajaxError);
                }
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            if (xhr.status === 403 || xhr.status === 401) {
                if (caller === 'KandyAPI.Phone') {
                    unauthorizederror();
                } else {
                    if (failure) {
                        failure(xhr.statusText, responseCodes.ajaxError);
                    }
                }
            } else if (xhr.status === 426) {
                kandyapiupgraderequired();
            } else if (xhr.status === 500) {
                if (failure) {
                    failure(xhr.statusText, responseCodes.ajaxError);
                }
            } else {
                if (failure) {
                    failure(xhr.statusText, responseCodes.ajaxError);
                }
            }
        }
    };

    if (data) {
        // TODO: SHOULD STRINGIFY BE CALLER'S RESPONSIBILITY???
        config.data = JSON.stringify(data);
    }

    $.ajax(config);
};
var unauthorizederror = function () {
    console.log('Unauthorized Error !!!');
};

var kandyapiupgraderequired = function () {
    console.log('Kandy API upgrade required');
};

var _initLogger = function () {
    try {
        fcs.logManager.initLogging(function (x, y, z) {
            if (z.message === 'ERROR') {
                window.console.log(z.message);
            }
            else {
                window.console.log(z.message);
            }
        }, true);
        _logger = fcs.logManager.getLogger('kandy_js');
    } catch (e) {
        // TODO: Shouldn't swallow exceptions silently
    }

};

function _UUIDv4() {
    var s = [],
        itoh = '0123456789ABCDEF';

    // Make array of random hex digits. The UUID only has 32 digits in it, but we
    // allocate an extra items to make room for the '-'s we'll be inserting.
    for (var i = 0; i < 36; i++) {
        s[i] = Math.floor(Math.random() * 0x10);
    }

    // Conform to RFC-4122, section 4.4
    s[14] = 4; // Set 4 high bits of time_high field to version
    s[19] = (s[19] & 0x3) | 0x8; // Specify 2 high bits of clock sequence

    // Convert to hex chars
    for (i = 0; i < 36; i++) {
        s[i] = itoh[s[i]];
    }

    // Insert '-'s
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
}

function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
            continue;
        }

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                out[key] = arguments[i][key];
            }
        }
    }

    return out;
}

function defaults(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
            continue;
        }

        for (var key in arguments[i]) {
            if (!out[key] && arguments[i].hasOwnProperty(key)) {
                out[key] = arguments[i][key];
            }
        }
    }

    return out;

}

//=================================================================
//=======================  WebSocket  =============================
//=================================================================

/**
 * @type Object Registered WebSocket events
 * @private
 */
var _wsEvents = {};

/**
 * @type Object Registered WebSocket handlers for responses
 * @private
 */
var _wsResponses = {};

/**
 * @type WebSocket WebSocket object
 * @private
 */
var _ws = null;

/**
 * @type Timeout Timeout for ping mechanism
 * @private
 */
var _wsPingTimeout;

var _connectionLostTimeout;

var _reconnectCount = 0;

var _onlineEventAttached = false;


/**
 * @method isWebSocketOpened
 * @return {Boolean} indication wether is the WebSocket is opened
 * @private
 */
function isWebSocketOpened() {
    var opened = false;

    if (_ws) {
        opened = (_ws.readyState === 1);
    }

    return opened;
}



function sendWSPing() {
    if (isWebSocketOpened())
    {
        _wsPingTimeout = setTimeout(sendWSPing, 30000);

        var json = {
            message_type: 'ping'
        };
        try {
            _ws.send(JSON.stringify(json));
        } catch (e) {
            window.console.error('Exception in sendWSPing: ' + e.message);
        }
    }
}

function reconnect() {
    window.console.log('reconnecting');

    openWebSocket(function () {
        window.console.log('reconnect success');
        _reconnectCount = 0;
        _fireEvent('onconnectionrestored');
    },
            function () {
                _reconnectCount++;
                window.console.log('failed to reconnect');
                autoReconnect();
            });
}

function autoReconnect() {
    var timeout = (_reconnectCount > 10) ? ((_reconnectCount > 100) ? 60000 : 30000) : 10000;
    _connectionLostTimeout = setTimeout(reconnect, timeout);
}

function onBrowserOnline() {
    window.console.log('browser going online');
    clearTimeout(_connectionLostTimeout);
    _connectionLostTimeout = setTimeout(reconnect, 500);
}

function onBrowserOffline() {
    window.console.log('browser going offline');
    clearTimeout(_wsPingTimeout);
    _ws.close();
}

function buildWebSocketUrlFromDataChannelConfig(dataChannelConfig) {
    var host = dataChannelConfig.data_server_host,
            port = dataChannelConfig.data_server_port,
            is_secure = dataChannelConfig.is_secure;

    //only keep the url because of an issue with REST api 1.1 and 1.2
    var hostMatches = host.match('^(?:https?:\/\/)?(?:www\.)?([^\/]+)');
    var portString = port ? (':' + port) : '';

    return (is_secure ? 'wss' : 'ws') + '://' + hostMatches[1] + portString;
}

/**
 * @method sendWebSocketData
 * Send data through the WebSocket Channel
 * @param {Object} [success] The success callback
 * @param {Object} [failure] The failure callback.
 * @private
 */
function openWebSocket(success, failure) {
    var handshareId;

    if (isWebSocketOpened()) {
        closeWebSocket();
        return;
    }

    window.KandyAPI.getDataChannelConfiguration(
            function (result) {
                _config.kandyWSUrl = buildWebSocketUrlFromDataChannelConfig(result) + '?client_sw_type=js&client_sw_version=' + api.version + '&user_access_token=';

                try {
                    _logger.debug('Opening websocket, UAT = ' + _userDetails.user_access_token);
                    _ws = new WebSocket(_config.kandyWSUrl + encodeURIComponent(_userDetails.user_access_token));

                } catch (wsError) {
                    if (failure) {
                        failure('Error opening websocket', responseCodes.wsCreateError);
                    }
                    return;
                }

                if (_ws !== null && _ws.readyState !== 2 && _ws.readyState !== 3) {

                    _ws.onopen = function (evt) {
                        if (window.addEventListener && !_onlineEventAttached) {
                            window.addEventListener('online', onBrowserOnline);
                            window.addEventListener('offline', onBrowserOffline);
                            _onlineEventAttached = true;
                        }
                        success();
                        sendWSPing();
                    };

                    _ws.onclose = function (evt) {
                        if(_wsPingTimeout){
                            if (_autoReconnect && !_connectionLostTimeout) {
                                window.console.log('connection closed');
                                clearTimeout(_wsPingTimeout);
                                autoReconnect();
                            }

                            if (_reconnectCount === 0) {
                                _fireEvent('onconnectionlost', evt);
                            }
                        }
                    };

                    _ws.onerror = function (evt) {
                        _fireEvent('onconnectionerror', evt);
                    };

                    _ws.onmessage = function (evt) {
                        var message = JSON.parse(evt.data), callbacks, responseCallbacks, callbackItter, callbackLength;
                        if (message.message_type === 'response') {
                            responseCallbacks = _wsResponses[message.id];
                            if (responseCallbacks) {
                                delete _wsResponses[message.id];
                                if (message.status === 0) {
                                    if (responseCallbacks.success) {
                                        responseCallbacks.success();
                                    }
                                }
                                else {
                                    if (responseCallbacks.failure) {
                                        responseCallbacks.failure(message.message, message.status);
                                    }
                                }
                            }
                        } else {
                            if (_wsEvents.hasOwnProperty(message.message_type)) {
                                callbacks = _wsEvents[message.message_type];

                                if (callbacks && callbacks.length > 0) {
                                    callbackLength = callbacks.length;
                                    for (callbackItter = 0; callbackItter < callbackLength; callbackItter++) {
                                        if (typeof callbacks[callbackItter] === 'function') {
                                            callbacks[callbackItter](message);
                                        }
                                    }

                                }
                            }
                        }
                    };
                } else {
                    failure('Error opening websocket', responseCodes.wsCreateError);
                }
            },
            failure
            );
}

/**
 * @method sendWebSocketData
 * Send data through the WebSocket Channel
 * @param {String} data
 * @param {Object} [success] The success callback
 * @param {Object} [failure] The failure callback.
 * @private
 */
function sendWebSocketData(data, success, failure) {
    if (isWebSocketOpened()) {
        if ((success || failure) && (data.id === undefined)) {
            var id = _UUIDv4();
            data.id = id;
            _wsResponses[id] = {success: success, failure: failure};
        }

        try {
            _ws.send(JSON.stringify(data));
        } catch (e) {
            window.console.log('Exception in sendWebSocketData: ' + e.message);
        }

    } else {
        failure();
    }
}

/**
 * @method closeWebSocket
 * Close the Notification Web Socket
 * @private
 */
function closeWebSocket() {
    clearTimeout(_wsPingTimeout);
    _wsPingTimeout = null;
    if (isWebSocketOpened()) {
        _ws.close();
    }
}

/**
 * @method registerWebSocketListeners
 * Register listeners for Web Socket Events
 * @param {Object} listeners
 * @private
 */
function registerWebSocketListeners(listeners) {
    var listner;
    if (listeners) {
        for (var listener in listeners) {
            if (listeners.hasOwnProperty(listener)) {
                if (_wsEvents[listener] === undefined) {
                    _wsEvents[listener] = [];
                }
                _wsEvents[listener].push(listeners[listener]);
            }
        }
    }
}


//=================================================================
//====================  Exposed Methods  ==========================
//=================================================================

/**
 * @method setup
 * Setup the API
 * @param {Object} config Configuration.
 */
api.setup = function (config) {
    // setup default configuration
    _config = extend(_config, config);

    // setup listeners
    if (config.hasOwnProperty('listeners')) {
        for (var listener in config.listeners) {
            _events[listener] = config.listeners[listener];
        }
    }

    if (config.hasOwnProperty('autoreconnect')) {
        _autoReconnect = config.autoreconnect;
    }

    if (config.hasOwnProperty('registerforcalls')) {
        _registerForCalls = config.registerforcalls;
    }


    if (config.hasOwnProperty('loglevel')) {
        _setLogLevel(config.loglevel);
    }

    if(_registerForCalls && _setupCall){
        _setupCall(config);
    }
};


function _getUserAccessToken (domainApiKey, userName, userPassword, success, failure, options) {
    // if username has domain in it remove it
    userName = userName.split('@')[0];

    var paramStr = 'key=' + encodeURIComponent(domainApiKey) +
            '&user_id=' + encodeURIComponent(userName) +
            '&user_password=' + encodeURIComponent(userPassword);

    if (options !== undefined) {
        if (options.client_sw_version !== undefined) {
            paramStr += '&client_sw_version=' + encodeURIComponent(options.client_sw_version);
        }

        if (options.client_sw_type !== undefined) {
            paramStr += '&client_sw_type=' + encodeURIComponent(options.client_sw_type);
        }

        if (options.kandy_device_id !== undefined) {
            paramStr += '&kandy_device_id=' + encodeURIComponent(options.kandy_device_id);
        }
    }

    _kandyAjax(
            {
                url: '/domains/users/accesstokens?' + paramStr,
                success: function (response) {
                    if (success) {
                        success(response.result);
                    }
                },
                failure: function (msg, code) {
                    if (failure) {
                        failure(msg, code);
                    }
                }
            }
    );
}

/**
 * @method getUserAccessToken
 * Retrieves a user access token
 * @param {String} domainApiKey
 * @param {String} userName
 * @param {String} userPassword
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 * @param {client_sw_version: '2.1.0', client_sw_type: 'JS/android/ios', kandy_device_id: YOUR_DEVICE_ID}
 */
api.getUserAccessToken = _getUserAccessToken;

/**
 * @method getLimitedUserDetails
 * Retrieves details about a user
 * @param {String} userAccessToken
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.getLimitedUserDetails = function (userAccessToken, success, failure) {
    var paramStr = 'key=' + encodeURIComponent(userAccessToken);

    _kandyAjax({
        url: '/users/details/limited?' + paramStr,
        success: function (response) {
            if (success) {
                success(response.result.user);
            }
        },
        failure: failure
    });
};

/**
 * @method getLimitedDomainDetails
 * Retrieves details about a domain
 * @param {String} domainAccessToken
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.getLimitedDomainDetails = function (domainAccessToken, success, failure) {
    var paramStr = 'key=' + encodeURIComponent(domainAccessToken);

    _kandyAjax({
        url: '/domains/details/limited?' + paramStr,
        success: function (response) {
            if (success) {
                success(response.result);
            }
        },
        failure: failure
    });
};

/**
 * @method getDevices
 * Retrieves devices for users
 * @param {Function} userAccessToken User Access Token.
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.getDevices = function (userAccessToken, success, failure) {
    var encodedAccessCode = encodeURIComponent(userAccessToken);
    _kandyAjax({
        url: '/users/devices?key=' + encodedAccessCode,
        success: function (response) {
            if (success) {
                success(response.result);
            }
        },
        failure: function (x, e) {
            _logger.error('Error retrieving devices');

            if (failure) {
                failure(x.statusText, responseCodes.ajaxError);
            }
        }
    });
};


/**
 * @method getLastSeen
 * get last seen time stamps for the users passed in
 * @param {Array of String} users
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.getLastSeen = function (users, success, failure) {
    var paramStr = 'users=' + encodeURIComponent(JSON.stringify(users));

    _kandyAjax({
        url: '/users/presence/last_seen?' + paramStr,
        success: function (response) {
            if (success) {
                success(response.result);
            }
        },
        failure: failure
    });
};


/**
 * @method getDataChannelConfiguration
 * get the data channel configuration used to connect to the websocket
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.getDataChannelConfiguration = function (success, failure) {
    var paramStr = 'key=' + encodeURIComponent(_userDetails.user_access_token);

    _kandyAjax({
        url: '/users/configurations/data_channel?' + paramStr,
        success: function (response) {
            if (success) {
                success(response.result);
            }
        },
        failure: failure
    });
};

/**
 * @method getAnonymousUser
 * Get an anonymous user
 * @param {String} domainAccessToken Domain access token
 */
api.getAnonymousUser = function (domainAccessToken, success, failure) {
    var paramStr = 'key=' + encodeURIComponent(domainAccessToken);
    _kandyAjax(
            {
                url: '/domains/access_token/users/user/anonymous?' + paramStr,
                success: function (response) {
                    if (success) {
                        success(response.result);
                    }
                },
                failure: function (msg, code) {
                    if (failure) {
                        failure(msg, code);
                    }
                }
            }
    );
};

/**
 * @method login
 * Login as a user
 * @param {String} domainApiKey
 * @param {String} userName
 * @param {String} userPassword
 * @param {Function} success The success callback.
 * @param {Function} failure The failure callback.
 */
api.login = function (domainApiKey, userName, password, success, failure) {

    var failureFunction = function () {
        _userDetails = null;
        if(failure && typeof failure === 'function'){
            failure();
        }
    };

    // TODO: Rename these to camel case
    var options = {
        client_sw_version: api.version,
        client_sw_type: 'JS',
        kandy_device_id: null
    };

    _getUserAccessToken(domainApiKey, userName, password,
            function (result) {
                var userAccessToken = result.user_access_token;

                api.getLimitedUserDetails(userAccessToken,
                        function (userDetailResult) {
                            _userDetails = userDetailResult;
                            _userDetails.user_password = password;
                            _userDetails.user_access_token = userAccessToken;
                            openWebSocket(
                                    //openWebSocket Success
                                    function () {
                                        _userDetails.devices = [];
                                        api.getDevices(userAccessToken,
                                            function (data) {
                                                _userDetails.devices = data.devices;

                                                if(_registerForCalls && _logInToSpidr){
                                                    _logInToSpidr(function(){
                                                            if(success){
                                                                success(result);
                                                            }
                                                        },
                                                        failureFunction
                                                    );
                                                } else {
                                                    if(success){
                                                        success(result);
                                                    }
                                                }
                                            },
                                            failureFunction
                                        );
                                    },
                                    failureFunction
                                    );
                        },
                        failureFunction
                        );
            },
            failureFunction,
            options
            );

};

/**
 * @method loginSSO
 * Log in with user access token (for single sign-on)
 * @param {String} userAccessToken User access token
 * @param {Function} [success] The success callback.
 * @param {Function} [failure] The failure callback.
 * @param {String} [password] The user password.
 */
api.loginSSO = function (userAccessToken, success, failure, password) {
    _logger.info('loginSSO is not supported for calls at the moment, unless provided with the password');

    var failureFunction = function () {
        _userDetails = null;
        if(failure && typeof failure === 'function'){
            failure();
        }
    };

    // TODO: Rename variables to camel case
    api.getLimitedUserDetails(userAccessToken,
        function (result) {
            _userDetails = result;
            _userDetails.user_access_token = userAccessToken;
            _userDetails.user_password = password;
            openWebSocket(
                    function () {
                        _userDetails.devices = [];
                        api.getDevices(userAccessToken,
                            function (data) {
                                _userDetails.devices = data.devices;

                                if(_registerForCalls && _logInToSpidr){
                                    _logInToSpidr(function(){
                                            if(success){
                                                success(result);
                                            }
                                        },
                                        failureFunction
                                    );
                                } else {
                                    if(success){
                                        success(result);
                                    }
                                }
                            },
                            failureFunction
                        );
                    },
                    failureFunction);
        },
        failureFunction
    );


};

api.logout = function (success) {
    closeWebSocket();
    _logOutOfSpidr(success);
};

api.reconnect = function (success, failure) {
    openWebSocket(success, failure);
};


//=================================================================
//========================  SESSION  ==============================
//=================================================================
api.Session = api.session = (function () {
    var me = {};

    var _listeners = {
    };

    // forward messages to the appropriate session handler
    var _messageHandler = function (message) {
        var simpleType, sessionListeners, sessionListener, listenerCount, listenerItter = 0;

        if (message.message_type === 'sessionNotification') {
            message = message.payload;
        }

        window.console.log('Session message recvd: ' + message.message_type);
        simpleType = message.message_type.replace(/^session/, 'on');
        sessionListeners = _listeners[message.session_id];

        if (sessionListeners) {
            var listnerCount = sessionListeners.length;

            for (listenerItter; listenerItter < listnerCount; listenerItter++) {
                sessionListener = sessionListeners[listenerItter];
                if (sessionListener && sessionListener.hasOwnProperty(simpleType)) {
                    try {
                        sessionListener[simpleType](message);
                    } catch (e) {
                        console.log('could not execute listner: ' + e);
                    }
                }
            }
        }
    };

    registerWebSocketListeners({
        'sessionData': _messageHandler,
        'sessionNotification': _messageHandler
    });


    /**
     * @method setListeners
     * Create a session
     * @param {String} sessionId
     * @param {Object} listeners
     * @param {Function} success Function called when create session succeeds, takes one parameter, sessionId
     * @param {Function} failure Function called when create session fails, takes two parameters: errorMessage, errorCode
     *
     * Example listeners:
     *      {
     *          'onData': onSessionData,
     *          'onActive': onSessionStarted,
     *          'onUserJoinRequest': onSessionUserJoinRequest,
     *          'onUserJoin': onSessionUserJoinRequest,
     *          'onJoinApprove': onSessionJoinApprove,
     *          'onJoinReject': onSessionJoinReject,
     *          'onUserLeave': onSessionUserLeave,
     *          'onUserBoot': onSessionUserBoot,
     *          'onBoot': onSessionBoot,
     *          'onInactive': onSessionEnded,
     *          'onTerminated': onSessionTerminated
     *       }
     */
    me.setListeners = function (sessionId, listeners) {

        if (_listeners[sessionId] === undefined) {
            _listeners[sessionId] = [];
        }

        _listeners[sessionId].push(listeners);
    };


    /**
     * @method create
     * Create a session
     * @param {Object} sessionConfig Contains session_type, session_name, session_description, user_nickname, user_first_name, user_last_name, user_phone_number, user_email
     * @param {Function} success Function called when create session succeeds, takes one parameter, sessionId
     * @param {Function} failure Function called when create session fails, takes two parameters: errorMessage, errorCode
     *
     * Example sessionConfig:
     *   {
     *       session_type: 'support',
     *       session_name: sessionName,
     *       session_description: "Jim's Support Session",
     *       user_nickname: "User 1",
     *       user_first_name: "User",
     *       user_last_name: "One",
     *       user_phone_number: "303-555-1212",
     *       user_email: "user1@gmailicon.com"
     *   }
     */
    me.create = function (sessionConfig, success, failure) {

        _kandyAjax({
            type: 'POST',
            url: '/users/sessions/session',
            data: sessionConfig,
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: function (msg, code) {
                if (failure) {
                    failure(msg, code);
                }
            }
        });
    };


    me.activate = function (sessionId, success, failure) {
        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/sessions/session/id/start',
                    data: {session_id: sessionId},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );

    };

    me.inactivate = function (sessionId, success, failure) {
        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/sessions/session/id/stop',
                    data: {session_id: sessionId},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method sendData
     * Send data to session participants
     * @param {String} sessionId Id of session to send data to
     * @param {Object} data Data to be sent to the session participants
     * @param {function} [success] success callback
     * @param {function} [failure] failure callback
     * @param {String} [destination] full user id for the destination (if none provided, sends to all participants)
     */
    me.sendData = function (sessionId, data, success, failure, destination) {
        sendWebSocketData({
            message_type: 'sessionData',
            session_id: sessionId,
            destination: destination,
            payload: data
        }, success, failure);
    };

    /**
     * @method terminate
     * Delete a session
     * @param {String} sessionId Id of session to delete
     */
    me.terminate = function (sessionId, success, failure) {
        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/sessions/session/id',
                    data: {session_id: sessionId},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method getSessionInfoById
     * Get session info by session ID
     * @param {String} sessionId Id of session
     */
    me.getInfoById = function (sessionId, success, failure) {
        var paramStr = 'session_id=' + sessionId;

        var url = '/users/sessions/session/id?' + paramStr;

        _kandyAjax(
                {
                    url: url,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method getSessionInfoByName
     * Get session info by Name
     * @param {String} sessionName Name of session
     */
    me.getInfoByName = function (sessionName, success, failure) {
        var paramStr = '&session_name=' + sessionName;

        var url = '/users/sessions/session/name?' + paramStr;

        _kandyAjax(
                {
                    url: url,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method getOpenSessions
     * Get open sessions
     */
    me.getOpenSessions = function (success, failure) {

        _kandyAjax(
                {
                    url: '/users/sessions',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };


    /**
     * @method getOpenSessionsByType
     * Get open sessions
     */
    me.getOpenSessionsByType = function (sessionType, success, failure) {
        var paramStr = 'session_type=' + encodeURIComponent(sessionType);

        var url = '/users/sessions?' + paramStr;

        _kandyAjax(
                {
                    url: url,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method getOpenSessionsCreatedByUser
     * Get open sessions created by this user
     */
    me.getOpenSessionsCreatedByUser = function (success, failure) {

        _kandyAjax(
                {
                    url: '/users/sessions/user',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };


    /**
     * @method joinSessionBy
     * Request to join a session by ID
     * @param {String} joinConfig Reason why we are leaving the session
     * @param {Function} [success] Function called when leaving succeeds
     * @param {Function} [failure] Function called when leaving fails
     */
    me.join = function (sessionId, joinConfig, success, failure) {
        joinConfig.session_id = sessionId;

        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/sessions/session/id/participants/participant',
                    data: joinConfig,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method leave
     * Leave a session by session ID
     * @param {String} sessionId Session ID
     * @param {String} [leaveReason] Reason why we are leaving the session
     * @param {Function} [success] Function called when leaving succeeds
     * @param {Function} [failure] Function called when leaving fails
     */
    me.leave = function (sessionId, leaveReason, success, failure) {

        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/sessions/session/id/participants/participant?',
                    data: {session_id: sessionId, leave_reason: leaveReason},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };


    /**
     * @method acceptJoinRequest
     * Admin accepts join request
     * @param {String} sessionId Session ID
     * @param {String} fullUserId Full user ID
     * @param {Function} success Function called when create session succeeds
     * @param {Function} failure Function called when create session fails
     */
    me.acceptJoinRequest = function (sessionId, fullUserId, success, failure) {

        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/sessions/session/id/admin/participants/participant/join',
                    data: {session_id: sessionId, full_user_id: fullUserId},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method rejectJoinRequest
     * Admin rejects join request
     * @param {String} sessionId Session ID
     * @param {String} fullUserId Full user ID
     * @param {String} rejectReason Reason for rejecting the user
     * @param {Function} success Function called when create session succeeds
     * @param {Function} failure Function called when create session fails
     */
    me.rejectJoinRequest = function (sessionId, fullUserId, rejectReason, success, failure) {

        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/sessions/session/id/admin/participants/participant/join',
                    data: {session_id: sessionId, full_user_id: fullUserId, reject_reason: rejectReason},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    /**
     * @method bootUser
     * Admin boots a user from a session
     * @param {String} sessionId Session ID
     * @param {String} fullUserId Full user ID
     * @param {String} bootReason Reason for booting the user
     * @param {Function} success Function called when create session succeeds
     * @param {Function} failure Function called when create session fails
     */
    me.bootUser = function (sessionId, fullUserId, bootReason, success, failure) {

        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/sessions/session/id/admin/participants/participant',
                    data: {session_id: sessionId, full_user_id: fullUserId, boot_reason: bootReason},
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    return me;
}());

//=================================================================
//========================  MESSAGING  ============================
//=================================================================
api.messaging = (function () {

    /**
     * @property {Object} _imContentTypes Holds IM content types.
     * @private
     */
    var _imContentTypes = {
        VIDEO: 'video',
        AUDIO: 'audio',
        IMAGE: 'image',
        FILE: 'file',
        LOCATION: 'location',
        CONTACT: 'contact'
    };

    var me = {};

    function _sendIM(destination, contentType, msg, success, failure, isGroup, messageOptions) {
        var url;
        var uuid = (messageOptions && messageOptions.uuid) || _UUIDv4();
        var message = {
            message: {
                contentType: contentType,
                UUID: uuid,
                message: msg
            }
        };

        if(isGroup){
            message.message.group_id = destination;

            url = '/users/chatgroups/chatgroup/messages';
            //message.messageType = "groupChat";
        } else {
            message.message.destination = destination;
            message.messageType = 'chat';
            url = '/devices/messages?device_id=' + _userDetails.devices[0].id;
        }

        _kandyAjax({
            type: 'POST',
            url: url,
            data: message,
            caller: 'KandyAPI.Phone',
            success: function (response) {
                if (response.status === responseCodes.OK) {
                    if (success) {
                        success(message.message);
                    }
                } else if (failure) {
                    failure(response.message, response.status);
                }
            },
            failure: function (x, e) {
                if (failure) {
                    failure(x.statusText, responseCodes.ajaxError);
                }
            }
        });
        return uuid;
    }

    /**
     * @method _sendImWithAttachment
     * @param {String} destination Destination of message recipient
     * @param {Object} attachment Attachement to be sent
     * @param {String} contentType Content Type of file.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    function _sendImWithAttachment(destination, attachment, contentType, success, failure, isGroup, messageOptions) {
        if (_config.messageProvider === 'fring') {

            var uuid = _UUIDv4();
            messageOptions = messageOptions || {};

            // Upload file and if we get a success send the IM
            me.uploadFile(attachment, function (fileUuid) {

                var message = {
                            mimeType: attachment.type,
                            content_uuid: fileUuid,
                            content_name: attachment.name
                };
                if (messageOptions) {
                    Object.keys(messageOptions).forEach(function(key) {
                        message[key] = messageOptions[key];
                    });
                }
                return _sendIM(destination, contentType, message, success, failure, isGroup, {uuid: uuid});

            }, failure);
            return uuid;
        } else {
            _logger.error('NOT SUPPORTED');
            if(failure){
                failure();
            }
        }
    }

    function _sendImWithLocation(destination, location, success, failure, isGroup) {

        return _sendIM(destination, _imContentTypes.LOCATION, {
            mimeType: 'location/utm',
            media_map_zoom: 10,
            location_latitude: location.location_latitude,
            location_longitude: location.location_longitude
        }, success, failure, isGroup);

    }

    function _sendJSON(user, object, success, failure, isGroup) {
        return _sendIM(user, 'text', {
            mimeType: 'application/json',
            json: JSON.stringify(object)
        }, success, failure, isGroup);
    }

    /**
     * @method sendSMS
     * @param {String} phone number.
     * @param {String} sender number.
     * @param {String} sms text.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Retrieves address book entries.
     */
    me.sendSMS = function (number, sender, text, success, failure) {
        _kandyAjax(
            {
                type: 'POST',
                url: '/devices/smss?device_id=' + _userDetails.devices[0].id,
                data: {message: {
                        source: sender,
                        destination: number,
                        message: {text: text}
                    }},
                caller: 'KandyAPI.Phone',
                success: success,
                failure: failure
            });
    };

    /**
     * @method sendIm
     * @param {String} user Username of message recipient
     * @param {String} text Textual message to be sent to recipient
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a textual instant message to another Kandy user
     */
    me.sendIm = function (user, text, success, failure) {
        if (_config.messageProvider === 'fring') {
            return _sendIM(user, 'text', { 'mimeType': 'text/plain', 'text': text }, success, failure, false);
        } else if (_config.messageProvider === 'spidr') {
            var im = new fcs.im.Message();
            im.primaryContact = user;
            im.type = 'A2';
            im.msgText = text;
            im.charset = 'UTF-8';

            fcs.im.send(im, success, failure);
            return 0;
        }
    };

    me.sendJSON = function (user, object, success, failure) {
        return _sendJSON(user, object, success, failure);
    };

    /**
     * @method sendImWithFile
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendImWithFile = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.FILE, success, failure);
    };

    /**
     * @method sendImWithImage
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendImWithImage = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.IMAGE, success, failure);
    };

    /**
     * @method sendImWithAudio
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendImWithAudio = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.AUDIO, success, failure);
    };

    /**
     * @method sendImWithVideo
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendImWithVideo = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.VIDEO, success, failure);
    };

    me.sendImWithContact = function (user, vCard, success, failure, displayName) {
        return _sendImWithAttachment(user, vCard, _imContentTypes.CONTACT, success, failure, null, {contact_display_name: displayName});
    };

    //TODO TEST
    me.sendImWithLocation = function (user, location, success, failure) {
        return _sendImWithLocation(user, location, success, failure);
    };

    /**
     * @method uploadFile
     * @param {File} file File to be sent
     * @param {Function} success The success callback.
     * @param {UUID} success.uuid The UUID of the uploaded file.
     * @param {Function} failure The failure callback.
     * @param {string}    failure.message Error Message.
     * @param {string}    failure.statusCode Error status code.
     * Uploads file to be used in Rich IM messaging
     */
    me.uploadFile = function (file, success, failure) {
        // Generate a UUID
        var uuid = _UUIDv4();

        // Create a new FormData object.
        var formData = new FormData();

        // Add the file to the request.
        formData.append('file', file, file.name);

        // Set up the request.
        var xhr = new XMLHttpRequest();

        var url = _config.kandyApiUrl + '/devices/content?key=' + _userDetails.user_access_token + '&content_uuid=' + encodeURIComponent(uuid) + '&device_id=' + _userDetails.devices[0].id + '&content_type=' + encodeURIComponent(file.type);

        // Open the connection.
        xhr.open('POST', url, true);

        // Set up a handler for when the request finishes.
        xhr.onload = function () {
            if (xhr.status === 200) {
                var result = JSON.parse(xhr.responseText);

                if (result.status === responseCodes.OK) {
                    // File(s) uploaded.
                    if (success) {
                        success(uuid);
                    }
                }
                else if (failure) {
                    failure(result.message, result.status);
                }

            } else {
                if (failure) {
                    failure('Request Error', '500');
                }
            }
        };

        // Send the Data.
        xhr.send(formData);

        return uuid;
    };

    /**
     * @method buildFileUrl
     * @param {uuid} UUID for file
     * Builds Url to uploaded file
     */
    me.buildFileUrl = function (uuid) {
        return _config.kandyApiUrl + '/devices/content?key=' + _userDetails.user_access_token + '&content_uuid=' + encodeURIComponent(uuid) + '&device_id=' + _userDetails.devices[0].id;
    };

    /**
     * @method buildFileThumbnailUrl
     * @param {uuid} UUID for file
     * @param {string} size of thumbnail 24x24
     * Builds Url to thumbnail uploaded file
     */
    me.buildFileThumbnailUrl = function (uuid, size) {
        if (size === undefined || !size) {
            size = '500x500';
        }

        return _config.kandyApiUrl + '/devices/content/thumbnail?key=' + _userDetails.user_access_token + '&content_uuid=' + encodeURIComponent(uuid) + '&device_id=' + _userDetails.devices[0].id + '&thumbnail_size=' + size;
    };

    /**
     * @method getIm
     * Retrieves IM messages
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * @return {Object} response An array of messages
     * e.g.
     * {
     *    [
     *      {
     "messageType":"chat",
     "sender":
     {
     "user_id":"972542205056",
     "domain_name":"domain.com",
     "full_user_id":"972542205056@domain.com"
     },
     "UUID":"acd2fa752c3c4edf97de8b0a48f622f0",
     "timestamp":"1400510413",
     "message":
     {
     "mimeType": "text/plain",
     "text": "let's meet tonight"
     }
     }
     *    ]
     * }
     */
    me.getIm = function (success, failure, autoClear) {

        _logger.info('Consider using the message event instead of fetching messages');

        if (autoClear === undefined) {
            autoClear = true;
        }

        _kandyAjax({
            url: '/devices/messages?device_id=' + _userDetails.devices[0].id,
            caller: 'KandyAPI.Phone',
            success: function (response) {
                var incoming;
                if (success) {

                    if (response.result.messages.length) {
                        // prepare id list for clearing
                        var idList = response.result.messages.map(function (item) {
                            return item.UUID;
                        });

                        // make sure UUIDs have hyphens
                        response.result.messages = response.result.messages.map(function (msg) {
                            if (msg.UUID.indexOf('-') === -1) {
                                msg.UUID = [msg.UUID.substring(0, 8),
                                    msg.UUID.substring(8, 12),
                                    msg.UUID.substring(12, 16),
                                    msg.UUID.substring(16, 20),
                                    msg.UUID.substring(20, msg.UUID.length)
                                ].join('-');
                            }
                            return msg;
                        });
                    }

                    success(response.result);

                    if (autoClear && response.result.messages.length) {
                        me.clearIm(idList);
                    }
                }
            },
            failure: failure
        });
    };

    /**
     * @method clearIm
     * Retrieves IM messages
     * @param {Array} ids Id of IMs to remove.
     * @param {Function} failure The failure callback.
     * @return {Object} response An array of messages
     */
    me.clearIm = function (ids, success, failure) {
        var i = 0,
                encodeddata,
                url,
                xhr;
        for (i; i < ids.length; i += 10) {
            encodeddata = encodeURIComponent('["' + ids.slice(i, i + 10).join('","') + '"]');
            url = _config.kandyApiUrl + '/devices/messages?key=' + _userDetails.user_access_token +
                    '&messages=' + encodeddata + '&device_id=' + _userDetails.devices[0].id;
            xhr = new XMLHttpRequest();
            xhr.open('DELETE', url);
            xhr.send();
        }
    };

    me.getGroups = function (success, failure){
        _kandyAjax(
                {
                    url: '/users/chatgroups',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.createGroup = function (name, image, success, failure){
        //TODO what should be the image.


        var data = {
            group_name: name,
            group_image: {}
        };


        _kandyAjax(
                {
                    type: 'POST',
                    data: data,
                    url: '/users/chatgroups',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.getGroupById = function (id, success, failure){
        _kandyAjax(
                {
                    url: '/users/chatgroups/chatgroup?group_id=' + id,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.deleteGroup = function (id, success, failure){
        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/chatgroups/chatgroup?group_id=' + id,
                    contentType: 'text/html',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.updateGroup = function (id, name, image, success, failure){

        var data = {
            group_id: id,
            group_name: name,
            group_image: {}
        };



        _kandyAjax(
                {
                    type: 'PUT',
                    data: data,
                    url: '/users/chatgroups/chatgroup',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.addGroupMembers = function (id, members, success, failure){
        var data = {
            members: members
        };
        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/chatgroups/chatgroup/members?group_id=' + id,
                    data: data,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.removeGroupMembers = function (id, members, success, failure){
        var jsonMembers = JSON.stringify(members);

        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/chatgroups/chatgroup/members?group_id=' + id + '&members=' + encodeURIComponent(jsonMembers),
                    contentType: 'text/html',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    me.leaveGroup = function (id, success, failure){
        //chatgroups/chatgroup/members/membership
        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/chatgroups/chatgroup/members/membership?group_id=' + id,
                    contentType: 'text/html',
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    };

    function muteUnmuteGroup(id, success, failure, mute){
        _kandyAjax(
                {
                    type: 'PUT',
                    url: '/users/chatgroups/chatgroup/mute?mute=' + mute + '&group_id=' + id,
                    success: function (response) {
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: function (msg, code) {
                        if (failure) {
                            failure(msg, code);
                        }
                    }
                }
        );
    }

    me.muteGroup = function (id, success, failure){
        muteUnmuteGroup(id, success, failure, true);
    };

    me.unmuteGroup = function (id, success, failure){
        muteUnmuteGroup(id, success, failure, false);
    };

    function muteUnmuteGroupMembers(id, members, success, failure, mute){

        var data = {
            members: members,
            mute: mute,
            group_id: id
        };


        _kandyAjax(
            {
                type: 'PUT',
                data: data,
                url: '/users/chatgroups/chatgroup/members/mute',
                success: function (response) {
                    if (success) {
                        success(response.result);
                    }
                },
                failure: function (msg, code) {
                    if (failure) {
                        failure(msg, code);
                    }
                }
            }
        );
    }

    me.muteGroupMember = function (id, members, success, failure){
        muteUnmuteGroupMembers(id, members, success, failure, true);
    };

    me.unmuteGroupMember = function (id, members, success, failure){
        muteUnmuteGroupMembers(id, members, success, failure, false);
    };


    me.sendGroupIm = function (group_id, text, success, failure) {
        return _sendIM(group_id, 'text', { mimeType: 'text/plain', text: text }, success, failure, true);
    };



    /**
     * @method sendGroupImWithFile
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendGroupImWithFile = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.FILE, success, failure, true);
    };

    /**
     * @method sendGroupImWithImage
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendGroupImWithImage = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.IMAGE, success, failure, true);
    };

    /**
     * @method sendGroupImWithAudio
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendGroupImWithAudio = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.AUDIO, success, failure, true);
    };

    /**
     * @method sendGroupImWithVideo
     * @param {String} user Username of message recipient
     * @param {Object} file File to be sent
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Sends a File message to another Kandy user
     */
    me.sendGroupImWithVideo = function (user, file, success, failure) {
        return _sendImWithAttachment(user, file, _imContentTypes.VIDEO, success, failure, true);
    };

    me.sendGroupJSON = function (user, object, success, failure) {
        return _sendJSON(user, object, success, failure, true);
    };

    me.sendGroupImWithLocation = function (user, location, success, failure) {
        return _sendImWithLocation(user, location, success, failure, true);
    };

    function _notificationHandler(message) {
        var msg = message.message;
        if(msg){
            var msgType = msg.messageType;
            if (msgType === 'chat') {
                _fireEvent('message', msg);
            } else if (msgType === 'groupChat') {
                _fireEvent('chatGroupMessage', msg);
            } else if (msgType === 'chatGroupInvite') {
                _fireEvent('chatGroupInvite', msg);
            } else if (msgType === 'chatGroupBoot') {
                _fireEvent('chatGroupBoot', msg);
            } else if (msgType === 'chatGroupLeave') {
                _fireEvent('chatGroupLeave', msg);
            } else if (msgType === 'chatGroupUpdate') {
                _fireEvent('chatGroupUpdate', msg);
            } else if (msgType === 'chatGroupDelete') {
                _fireEvent('chatGroupDelete', msg);
            }
        }
    }

    registerWebSocketListeners({
        'notification': _notificationHandler
    });

    return me;
}());


//=================================================================
//=========================== PHONE ===============================
//=================================================================
/**
 * @author Russell Holmes
 * KandyAPI.Phone
 * @singleton
 * The Kandy Phone is used to make calls (audio and video), get presence notifications, and send IMs.
 */

var _logInToSpidr;
var _logOutOfSpidr;
var _setupCall;

api.Phone = api.call = api.voice = (function () {
    var me = {};

    /**
     * @property {String} _domainApiKey Domain API Key token.
     * @private
     */
    var _domainApiKey = null;

    /**
     * @property {Object} _callTypes Holds call types.
     * @private
     */
    var _callTypes = {
        INCOMING_CALL: 1,
        OUTGOING_CALL: 2
    };

    /**
     * @property {Object} _presenceTypes Types of presence.
     * @private
     */
    var _presenceTypes = {
        0: 'Available',
        1: 'Unavailable',
        2: 'Away',
        3: 'Out To Lunch',
        4: 'Busy',
        5: 'On Vacation',
        6: 'Be Right Back',
        7: 'On The Phone',
        8: 'Active',
        9: 'Inactive',
        10: 'Pending',
        11: 'Offline'
    };

    /**
     * @property {CallObject} _calls call objects.
     * @private
     */
    var _calls = [];

    var _mediaInitiated = false;

    var _callStates = null;

    var _initMediaDone = false;

    me.MediaErrors = fcs.call.MediaErrors;

    /**
     * @method _startIntraFrame
     * Starts infra-frame coding for compression
     * @param {Object} call The call Object
     * @private
     */
    function _startIntraFrame(call) {
        call.intraframe = setInterval(function () {
            if (call) {
                call.sendIntraFrame();
            } else {
                _stopIntraFrame(call);
            }
        }, 5000);
    }

    /**
     * @method _stopIntraFrame
     * Stops infra-frame coding for compression
     * @private
     */
    function _stopIntraFrame(call) {
        if (call.intraframe) {
            clearInterval(call.intraframe);
        }
    }


    /**
     * @method _handleCallNotification
     * Handles incoming call notifications
     * @param {Call} call The call object
     * @private
     */
    function _handleCallNotification(call) {
        _calls[call.getId()] = call;
        // check if this is an anonymous call
        call.isAnonymous = (call.callerNumber.indexOf('concierge') !== -1);
        _fireEvent('callincoming', call, call.isAnonymous);
    }

    /**
     * @method _handleIncomingCallStateChange
     * Handles incoming call state changes
     * @param {Call} call The call object
     * @param {State} state The state of the call
     * @private
     */
    function _handleIncomingCallStateChange(call, state) {
        var callId = call.getId(),
                holdState;

        call.isIncoming = true;
        call.isOutgoing = false;
        var localCall = _calls[callId];

        if (!localCall) {
            _calls[callId] = localCall = call;
        }

        holdState = call.getHoldState();

        if (holdState === 'REMOTE_HOLD') {
            _logger.info('CALL HELD REMOTELY');
            call.remoteHold = true;
            _fireEvent('remotehold', call);
        } else {
            if (call.remoteHold !== undefined && call.remoteHold) {
                _logger.info('CALL REMOTE HOLD RELEASED');
                _fireEvent('remoteunhold', call);
            }
            call.remoteHold = false;
        }

        if (state === _callStates.IN_CALL) {
            if (holdState === 'LOCAL_HOLD') {
                _logger.info('ON HOLD');
            } else {
                _logger.info('ON CALL');
            }

            if (call.canSendVideo()) {
                _startIntraFrame(localCall);
            }
        //} else if (state === _callStates.RENEGOTIATION) {
        // TODO: Log something?
        } else if (state === _callStates.ON_HOLD) {
            _logger.info('CALL HELD REMOTELY');
        } else if (state === _callStates.RINGING) {
            _logger.info('RINGING');
            _fireEvent('ringing', call.getId());
        } else if (state === _callStates.ENDED) {
            if (call) {
                _stopIntraFrame(localCall);
                if (call.statusCode === 0 || call.statusCode === undefined) {
                    _logger.info('CALL END');
                } else {
                    if ((call.statusCode >= 100 && call.statusCode <= 300)) {
                        _logger.error('WebRTC ERROR');
                    } else {
                        _logger.error('ERROR');
                    }
                }
                delete _calls[callId];
                _fireEvent('callended', call);
            }
        } else if (state === _callStates.REJECTED) {
            _logger.info('REJECTED');
        } else if (state === _callStates.OUTGOING) {
            _logger.info('DIALING');
        } else if (state === _callStates.INCOMING) {
            _logger.info('INCOMING');
        //} else if (state === _callStates.JOINED) {
        // TODO: Log something?
        }
    }

    /**
     * @method _handleOutgoingCallStateChange
     * Handles outgoing call state changes
     * @param {Call} call The call object
     * @param {State} state The state of the call
     * @param (Function) eventNotifier Function that will execute event callbacks
     * @private
     */
    function _handleOutgoingCallStateChange(call, state) {

        var eventNotifier = null;

        if (call.eventNotifier !== undefined && call.eventNotifier !== null) {
            eventNotifier = call.eventNotifier;
        } else {
            eventNotifier = _fireEvent;
        }
        var callId = call.getId(),
                holdState;

        var localCall = _calls[callId];
        localCall.isOutgoing = true;
        localCall.isIncoming = false;

        holdState = call.getHoldState();
        if (holdState === 'REMOTE_HOLD') {
            _logger.info('CALL HELD REMOTELY');
            call.remoteHold = true;
            eventNotifier('remotehold', call);
        } else {
            if (call.remoteHold !== undefined && call.remoteHold) {
                _logger.info('CALL REMOTE HOLD RELEASED');
                eventNotifier('remoteunhold', call);
            }
            call.remoteHold = false;
        }


        if (state === _callStates.IN_CALL) {
            if (holdState === 'LOCAL_HOLD') {
                _logger.info('ON HOLD');
            } else {
                _logger.info('ON CALL');
            }

            if (call.canSendVideo()) {
                _startIntraFrame(localCall);
            }
            eventNotifier('oncall', call);
        //} else if (state === _callStates.RENEGOTIATION) {
        // TODO: Log something?
        } else if (state === _callStates.ON_HOLD) {
            _logger.info('CALL HELD REMOTELY');
        } else if (state === _callStates.RINGING) {
            _logger.info('RINGING');
            _fireEvent('ringing', call.getId());
        } else if (state === _callStates.ENDED) {
            if (call) {
                _stopIntraFrame(localCall);
                if (call.statusCode === 0 || call.statusCode === undefined) {
                    _logger.info('CALL END');
                } else {
                    if ((call.statusCode >= 100 && call.statusCode <= 300)) {
                        _logger.error('WebRTC ERROR');
                    } else {
                        _logger.error('ERROR');
                    }
                }

                if (localCall.isAnonymous && localCall.isOutgoing) {
                    me.logout();
                }

                delete _calls[callId];
                eventNotifier('callended', call);

            }
        } else if (state === _callStates.REJECTED) {
            _logger.info('REJECTED');
        } else if (state === _callStates.OUTGOING) {
            _logger.info('DIALING');
        } else if (state === _callStates.INCOMING) {
            _logger.info('INCOMING');
        } else if (state === _callStates.JOINED) {
            _logger.info('JOINED');
        }
    }

    /**
     * @method _handlePresenceNotification
     * Handles presence notifications, fires the presencenotification event
     * @param {Presence} presence The Presence object
     * @private
     */
    function _handlePresenceNotification(presence) {
        if (presence.state === null) {
            _logger.info('State is empty.');
            return;
        }

        if (presence.name === null) {
            _logger.info('Name is empty.');
            return;
        }
        _fireEvent('presencenotification', presence.name, presence.state, _presenceTypes[presence.state], presence.activity);
    }


    /**
     * @method _supportsLocalStorage
     * @private
     * Checks if local storage is available
     */
    function _supportsLocalStorage() {
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            return false;
        }
    }

    /**
     * @method _setUserInformationLocalStorage
     * @private
     * @param password Password to set
     * Set access token in local storage
     */
    function _setUserInformationLocalStorage(password) {
        localStorage['kandyphone.userinformation'] = _domainApiKey + ';' + _userDetails.full_user_id + ';' + password;
        return true;
    }

    /**
     * @method _getUserInformationLocalStorage
     * @private
     * Get access token from local storage
     */
    function _getUserInformationLocalStorage() {
        return localStorage['kandyphone.userinformation'];
    }

    /**
     * @method _clearAccessTokeLocalStorage
     * @private
     * Clears access token from local storage
     */
    function _clearAccessTokeLocalStorage() {
        localStorage.removeItem('kandyphone.userinformation');
        return true;
    }

    // TODO: Move configuration for different versions into a strategy pattern.

    /**
     * @method _mapSpidrConfigToAPI
     * @private
     * Maps the spider configs retrived from getSpiderConfiguration to fcs configs which can then be passed to fcs.setup
     */
    function _mapSpidrConfigToAPI(spidrConfig) {

        // In newer version (2.2.1+) we don't do any parsing of the parameters and pass them through directly if the server
        // configuration also supports it.
        if (spidrConfig.fcsApi) {
            return spidrConfig.fcsApi;
        }

        return {
            notificationType: fcs.notification.NotificationTypes.WEBSOCKET,
            restUrl: spidrConfig.REST_server_address,
            restPort: spidrConfig.REST_server_port,
            websocketIP: spidrConfig.webSocket_server_address,
            websocketPort: spidrConfig.webSocket_server_port,
            websocketProtocol: (spidrConfig.webSocket_secure !== false ? 'wss' : 'ws'),
            protocol: spidrConfig.REST_protocol,
            serverProvidedTurnCredentials: spidrConfig.serverProvidedTurnCredentials
        };
    }

    /**
     * @method _mapSpidrConfigToMedia
     * @private
     * Maps the spider configs retrived from getSpiderConfiguration to spidrEnv config which can then be passed to fcs.call.initMedia
     */
    function _mapSpidrConfigToMedia(spidrConfig) {

        // In newer version (2.2.1+) we don't do any parsing of the parameters and pass them through directly if the server
        // configuration also supports it.
        if (spidrConfig.fcsMedia) {
            return spidrConfig.fcsMedia;
        }

        if (spidrConfig.ICE_servers) {
            spidrConfig.ICE_server_address = spidrConfig.ICE_servers[0];
            spidrConfig.ICE_server_port = '';
        }

        return {
            iceserver: spidrConfig.ICE_server_address,
            iceserverPort: spidrConfig.ICE_server_port,
            webrtcdtls: spidrConfig.use_DTLS
        };
    }


    /**
     * @method _mergeConfigWithSpidrConfiguration
     * @private
     * merges _config with spidr config retrived from getSpidrConfiguration
     */

    function _mergeConfigWithSpidrConfiguration(spidrConfig) {

        // merge with configs from KandyAPI.Phone.setup
        _config.spidrApi = defaults(_mapSpidrConfigToAPI(spidrConfig), _config.spidrApi);

        // apply default SPiDR configuration
        _config.spidrMedia = defaults(_mapSpidrConfigToMedia(spidrConfig), _config.spidrMedia);

        if (_config.remoteVideoContainer) {
            _config.spidrMedia.remoteVideoContainer = _config.remoteVideoContainer;
        }

        if (_config.localVideoContainer) {
            _config.spidrMedia.localVideoContainer = _config.localVideoContainer;
        }
    }

    function _applySpiderConfiguration(spidrConfig, success, failure) {
        // merge _config with spirdConfig
        _mergeConfigWithSpidrConfiguration(spidrConfig);

        // setup SPiDR with fcsConfig
        fcs.setup(_config.spidrApi);

        fcs.setUserAuth(_userDetails.full_user_id, _userDetails.user_password);
        //fcs.setUserAccessToken(_userDetails.user_access_token);

        fcs.notification.start(
                function () {
                    _callStates = fcs.call.States;
                    // if the browser supports local storage persist the Access Token
                    if (_config.allowAutoLogin && _supportsLocalStorage()) {
                        _setUserInformationLocalStorage(_userDetails.user_password);
                    }
                    success();
                },
                function (errorCode) {
                    _logger.error('login failed: unable to start spidr notification');
                    failure(errorCode);
                },
                false
        );
    }
    /**
     * @method _setup
     * @private
     * Logs in to Experius and SPiDR through fcs JSL
     * @param {String} userAccessToken Access token for user.
     * @param {String} password Password for user.
     */
    _logInToSpidr = function(success, failure) {
        _getSpidrConfiguration(_userDetails.user_access_token,
            function(spidrConfig) {
                _applySpiderConfiguration(spidrConfig, success, failure);
                },
                function (error) {
                    _logger.error('login failed: unable to get spidr configuration');
                    failure();
                }
        );
    };

    function _notificationHandler(message) {
        message = message.message;
        message = message && (message.kandyType || message.message_type);
        if (!message || message === 'gofetch') {
            _fireEvent('messagesavailable');
        } else if (message === 'incomingCall') {
            me._onIncommingCall('CALLavailable', message.call_id);
        }
    }

    registerWebSocketListeners({
        'notification': _notificationHandler
    });


    /**
     * @method setup
     * Setup Spdir
     * @param {Object} config Configuration.
     * @param {Array} [config.listeners={}] callback methods for KandyAPI events (see Events).
     * @param {String} [config.mediatorUrl="http://54.187.112.97:8080/kandywrapper-1.0-SNAPSHOT"] Rest endpoint for KandyWrapper.
     * @param {String} [config.allowAutoLogin=true] True to persist login information in local storage and auto login during setup
     * @param {Object} [config.fcsConfig] FCS Configuration
     * @param {KandyAPI.NOTIFICATION_TYPES} [config.fcsConfig.notificationType=KandyAPI.NOTIFICATION_TYPES.WEBSOCKET] Type of connection to use for notifications.
     * @param {String} [config.fcsConfig.restUrl="kandysimplexlb-231480754.us-east-1.elb.amazonaws.com"] Rest endpoint for spidr.
     * @param {String} [config.fcsConfig.cors=true] True to enable CORS support.
     * @param {String} [config.fcsConfig.restPort="443"] Port to use for rest endpoint.
     * @param {String} [config.fcsConfig.websocketIP="kandysimplexlb-231480754.us-east-1.elb.amazonaws.com"] Websocket endpoint for spidr.
     * @param {String} [config.fcsConfig.websocketPort="8581"] Port to use for websocket endpoint.
     * @param {String} [config.fcsConfig.disableNotifications=null] True to disable notifications.
     * @param {String} [config.fcsConfig.protocol="https"] Protocol to use http | https.
     * @param {Object} [config.spidrEnv] SPiDR Configuration.
     * @param {Object} [config.spidrEnv.iceserver="stun:206.165.51.23:3478"]
     * @param {Object} [config.spidrEnv.webrtcdtls=null]
     * @param {Object} [config.spidrEnv.remoteVideoContainer=""]
     * @param {Object} [config.spidrEnv.localVideoContainer=""]
     * @param {Object} [config.spidrEnv.pluginMode="auto"]
     * @param {Object} [config.spidrEnv.pluginLogLevel=2]
     * @param {Object} [config.spidrEnv.ice="STUN " + "stun:206.165.51.23:3478"]
     */
    me.setup = function(config) {
        _logger.warn('Deprecated method KandyAPI.Phone.setup use kandy.setup');
        api.setup(config);
    };

    _setupCall = function (config) {

        // apply default configuration
        _config = extend(_config, config);

        fcs.notification.setOnConnectionEstablished(function () {
            _logger.info('Connection established');
            _fireEvent('onconnectionestablished', 'spider');
        });

        fcs.notification.setOnConnectionLost(function () {
            _logger.info('Connection Lost');
            _fireEvent('onconnectionlost', 'spider');
        });

        if (_config.allowAutoLogin && _supportsLocalStorage() && _getUserInformationLocalStorage()) {
            api.login(_getUserInformationLocalStorage().split(';')[0],
                    _getUserInformationLocalStorage().split(';')[1],
                    _getUserInformationLocalStorage().split(';')[2],
                    function () {
                        _fireEvent('loginsuccess', _userDetails);
                    },
                    function (msg, errorCode) {
                        _fireEvent('loginfailed', msg, errorCode);
                    }
            );
        }

        fcs.presence.onReceived = function (presence) {
            _handlePresenceNotification(presence);
        };

        fcs.call.onReceived = function (call) {
            _logger.info('incoming call');

            call.onStateChange = function (state) {
                _handleIncomingCallStateChange(call, state);
            };

            _handleCallNotification(call);
        };
    };

    /**
     * @method login
     * Login as a user
     * @Depracated
     * @param {String} domainApiKey
     * @param {String} userName
     * @param {String} userPassword
     */
    me.login = function (domainApiKey, userName, password) {
        _logger.warn('Deprecated method KandyAPI.Phone.login use kandy.login');

        api.login(domainApiKey, userName, password,
                function () {
                    _fireEvent('loginsuccess', _userDetails);
                },
                function (errorCode) {
                    _fireEvent('loginfailed', '', errorCode);
                }
        );
    };


    me.initMedia = function (success, failure, force) {
        if ((force === undefined || !force) && _initMediaDone) {
            success();
            return;
        }

        // make sure the browser supports WebRTC
        fcs.call.initMedia(
                function () {
                    _logger.info('media initiated');
                    _mediaInitiated = true;

                    // add unload event to end any calls
                    window.addEventListener('beforeunload', function (event) {
                        for (var i in _calls) {
                            me.endCall(i);
                        }
                    });
                    _initMediaDone = true;
                    success();
                },
                function (errorCode) {
                    _logger.error('Problem occurred while initiating media');

                    switch (errorCode) {
                        case fcs.call.MediaErrors.WRONG_VERSION:
                            _logger.error('Media Plugin Version Not Supported');
                            _fireEvent('media', {type: me.MediaErrors.WRONG_VERSION});
                            break;
                        case fcs.call.MediaErrors.NEW_VERSION_WARNING:
                            _logger.error('New Plugin Version is available');
                            _fireEvent('media',
                                    {// event
                                        type: me.MediaErrors.NEW_VERSION_WARNING,
                                        urlWin32bit: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_2.1.376.0.exe',
                                        urlWin64bit: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_x86_64__2.1.376.0.exe',
                                        urlMacUnix: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_2.1.376.0.pkg'
                                    }
                            );
                            break;
                        case fcs.call.MediaErrors.NOT_INITIALIZED:
                            _logger.error('Media couldn\'t be initialized');
                            _fireEvent('media', {type: me.MediaErrors.NOT_INITIALIZED});
                            break;
                        case fcs.call.MediaErrors.NOT_FOUND:
                            _logger.error('Plugin couldn\'t be found!');
                            _fireEvent('media',
                                    {// event
                                        type: me.MediaErrors.NOT_FOUND,
                                        urlWin32bit: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_2.1.376.0.exe',
                                        urlWin64bit: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_x86_64__2.1.376.0.exe',
                                        urlMacUnix: 'https://kandy-portal.s3.amazonaws.com/public/Kandy/Enabler-Plugins-2.1.376/GCFWEnabler_2.1.376.0.pkg'
                                    }
                            );
                            break;
                    }

                    failure(errorCode);
                },
                defaults({
                  remoteVideoContainer: _config.spidrMedia.remoteVideoContainer,
                  localVideoContainer: _config.spidrMedia.localVideoContainer
                }, _config.spidrMedia)
        );
    };

    _logOutOfSpidr = function(success){
        // if the browser supports local storage clear out the stored access token
        if (_supportsLocalStorage()) {
            _clearAccessTokeLocalStorage();
        }

        fcs.clearResources(function () {
            if (success) {
                success();
            }
        }, true, true);
    };


    /**
     * @method logout
     * Logs out
     * @param {Function} success The success callback.
     */
    me.logout = function (success) {
        _logger.info('KandyAPI.Phone.logout is deprecated use kandy.logout');

        api.logout(success);
    };

    /**
     * @method hasStoredLogin
     * Returns true if login information has been stored in local storage
     */
    me.hasStoredLogin = function () {
        if (_supportsLocalStorage()) {
            _getUserInformationLocalStorage();
        }
    };

    /**
     * @method isMediaInitialized
     * Returns true if media is initialized
     */
    me.isMediaInitiated = function () {
        return _mediaInitiated;
    };

    /**
     * @method isIncoming
     * @param {String} callId The id of the call.
     * returns true if call is incoming
     */
    me.isIncoming = function (callId) {
        var call = _calls[callId];

        return call.isIncoming;
    };

    /**
     * @method isOutgoing
     * @param {String} callId The id of the call.
     * Returns true if call is outgoing
     */
    me.isOutgoing = function (callId) {
        var call = _calls[callId];

        return call.isOutgoing;
    };

    /**
     * @method callTypes
     * Gets call types
     * See call types enumeration
     */
    me.callTypes = function () {
        return _callTypes;
    };

    /**
     * @method getAnonymousData
     * @param {String} callId The id of the call to get the Anonymous data for.
     * returns anonymous data if the call is anonymous null if not.
     */
    me.getAnonymousData = function (callId) {
        var call = _call[callId];

        if (call && call.isAnonymous) {
            return call.callerName;
        } else {
            return null;
        }
    };

    /**
     * @method callType
     * @param {String} callId The id of the call.
     * returns call type either incomming or outgoing
     */
    me.callType = function (callId) {
        var call = _calls[callId];

        if (call.isIncoming) {
            return _callTypes.INCOMING_CALL;
        }
        else if (call.isOutgoing) {
            return _callTypes.OUTGOING_CALL;
        }
    };

    /**
     * @method makeSIPCall
     * Starts SIP call using the configured sipOutnumber
     * @param {String} number The number to call.
     */
    me.makeSIPCall = function (number, callerId, eventNotifier) {
        me.makeCall(_config.sipOutNumber + number + '@' + _userDetails.domain_name, false, callerId, eventNotifier);
    };

    /**
     * @method makePSTNCall
     * Starts PSTN call using the configured pstnOutNumber
     * @param {String} number The number to call.
     */
    me.makePSTNCall = function (number, callerId, eventNotifier) {
        me.makeCall(_config.pstnOutNumber + number + '@' + _userDetails.domain_name, false, callerId, eventNotifier);
    };

    /**
     * @method makeCall
     * Starts call
     * @param {String} number The number to call.
     * @param {Boolean} cameraOn Whether to turn one's own camera on
     * @param {String} callerId What you want the caller ID to look like to callee
     */
    me.makeCall = function (number, cameraOn, callerId, eventNotifier) {
        _logger.info('making voice call');

        if (eventNotifier === undefined || eventNotifier === null) {
            eventNotifier = _fireEvent;
        }

        me.initMedia(function () {
            if (number === _userDetails.full_user_id) {
                eventNotifier('callinitiatefailed', 'You cannot call yourself');
                return;
            }

            fcs.call.startCall(fcs.getUser(), {firstName: callerId}, number,
                    //onSuccess
                            function (outgoingCall) {
                                outgoingCall.eventNotifier = eventNotifier;
                                outgoingCall.onStateChange = function (state, statusCode) {
                                    outgoingCall.statusCode = statusCode;

                                    _handleOutgoingCallStateChange(outgoingCall, state);
                                };

                                outgoingCall.isAnonymous = false;
                                _calls[outgoingCall.getId()] = outgoingCall;

                                eventNotifier('callinitiated', outgoingCall, number);
                            },
                            //onFailure
                                    function (errorCode) {
                                        _logger.error('call failed');
                                        eventNotifier('callinitiatefailed', 'Start call failed: ' + errorCode);

                                    },
                                    true, cameraOn);
                        },
                        function (errorCode) {
                            _logger.error('call failed');
                            eventNotifier('callinitiatefailed', 'Init media failed: ' + errorCode);
                        }
                );
            };

    me.getRolloverGroupUsersByName = function (rolloverGroupName, success, failure) {

        var encodedAccessCode = encodeURIComponent(_userDetails.user_access_token);
        var encodedRolloverGroupName = encodeURIComponent(rolloverGroupName);

        var url = '/users/rollovergroups/rollovergroup?key=' + encodedAccessCode +
                '&group_name=' + encodedRolloverGroupName;

        _kandyAjax({
            url: url,
            caller: 'KandyAPI.Phone',
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: failure
        });

    };

    var _callRolloverGroupRoundRobin = function (agents, cameraOn, callerId) {

        var agent = Array.prototype.shift.apply(agents);

        var eventNotifier = function () {
            var eventName = Array.prototype.shift.apply(arguments);
            switch (eventName) {
                case 'callinitiatefailed':
                    if (agents.length > 0) {
                        _callRolloverGroupRoundRobin(agents, cameraOn, callerId);
                    } else if (me.events.callinitiatefailed) {
                        _fireEvent('callinitiatefailed', arguments);
                    }
                    break;
                case 'callinitiated':

                    break;
                case 'callended':
                    if (agents.length > 0) {
                        _callRolloverGroupRoundRobin(agents, cameraOn, callerId);
                    } else {
                        _fireEvent('callinitiated', arguments);
                        _fireEvent('callended', arguments);
                    }
                    break;

                case 'oncall':
                    var call = arguments[0];
                    call.eventNotifier = _fireEvent;
                    _fireEvent('callinitiated', call);
                    _fireEvent('oncall', call);
                    break;

                default:
                    break;
            }
        };

        if (agent.agent_contact_type === 'pstn') {
            me.makePSTNCall(agent.agent_contact, callerId, eventNotifier);
        } else {
            me.makeCall(agent.agent_contact, cameraOn, callerId, eventNotifier);
        }
    };


    /**
     * @method makeRolloverGroupCall
     * Starts Hunt Group call
     * @param {String} rolloverGroupName The Kandy user being called (callee)
     * @param {Boolean} cameraOn Whether to turn one's own camera on
     * @param {String} callerId What you want the caller ID to look like to callee
     */
    me.makeRolloverGroupCall = function (rolloverGroupName, cameraOn, callerId) {

        me.getRolloverGroupUsersByName(rolloverGroupName,
                function (response) {

                    if (response.group.group_policy === 'roundrobin') {
                        _callRolloverGroupRoundRobin(response.group.agents, cameraOn, callerId);
                    } else {
                        _fireEvent('callinitiatefailed', 'This hunt group\'s policy is not yet implemented: ' + response.group.group_policy);
                    }
                },
                function (msg, code) {
                    _fireEvent('callinitiatefailed', msg);
                }
        );
    };


    /**
     * @method makeAnonymousCall
     * Starts Anonymous video call
     * @param {String} number The Kandy user being called (callee)
     * @param {String} anonymousData Data to send with anonymous call
     * @param {String} callerUserName The Kandy user making the call (caller)
     * @param {Boolean} cameraOn Whether call is made with camera on
     */
    me.makeAnonymousCall = function (calleeUsername, anonymousData, callerUserName, cameraOn, eventNotifier) {
        _initLogger();

        if (eventNotifier === undefined || eventNotifier === null) {
            eventNotifier = _fireEvent;
        }

        _mergeConfigWithSpidrConfiguration(
            {
                // TODO: Shouldn't these be fetched from the _getSpidrConfiguration?
                restUrl: 'multispidr.kandy.io',
                restPort: 443,
                websocketIP: 'multispidr.kandy.io',
                websocketPort: 8582,
                iceserver: '',
                iceserverPort: 0,
                protocol: 'https',
                webrtcdtls: false
            }
        );

        fcs.setup(_config.spidrApi);

        //Setup user credential
        fcs.setUserAuth(calleeUsername, '');

        fcs.notification.start(function () {
            _logger.info('Login succesfully');

            _callStates = fcs.call.States;

            fcs.call.initMedia(function () {
                _logger.info('Call init successfully');
                setTimeout(function () {

                    var anonymousUserName = {
                        firstName: anonymousData
                    };

                    callerUserName = callerUserName || 'anonymous@concierge.com';

                    fcs.call.startCall(callerUserName, anonymousUserName, calleeUsername,
                            //onSuccess
                                    function (outgoingCall) {
                                        outgoingCall.eventNotifier = eventNotifier;
                                        outgoingCall.onStateChange = function (state, statusCode) {
                                            outgoingCall.statusCode = statusCode;

                                            _handleOutgoingCallStateChange(outgoingCall, state);
                                        };

                                        outgoingCall.isAnonymous = true;
                                        _calls[outgoingCall.getId()] = outgoingCall;
                                        eventNotifier('callinitiated', outgoingCall, calleeUsername);
                                    },
                                    //onFailure
                                            function (errorCode) {
                                                _logger.error('call failed');
                                                eventNotifier('callinitiatefailed', 'error code: ' + errorCode);

                                            },
                                            false, cameraOn);

                                }, 500);
                    }, function (errorCode) {
                _logger.error('Call init failed');
                api.logout();
                eventNotifier('callinitiatefailed', 'Init media failed: ' + errorCode);
            },
            defaults({
              remoteVideoContainer: _config.spidrMedia.remoteVideoContainer,
              localVideoContainer: _config.spidrMedia.localVideoContainer
            }, _config.spidrMedia)
            );
        }, function () {
            console.error('Login failed');
            eventNotifier('callinitiatefailed', 'Auth failed');
        }, true);
    };


    /**
     * @method rejectCall
     * reject incoming call
     * @param {String} callId Id of call.
     */
    me.rejectCall = function (callId) {
        var call = _calls[callId];
        call.reject(
                function () {
                    _fireEvent('callrejected', call);
                },
                function (errorCode) {
                    _logger.info('reject failed');
                    _fireEvent('callrejectfailed', call, errorCode);
                }
        );
    };

    /**
     * @method ignoreCall
     * ignore incoming call
     * @param {String} callId Id of call.
     */
    me.ignoreCall = function (callId) {
        var call = _calls[callId];
        call.ignore(
                function () {
                    _fireEvent('callignored', call);
                },
                function (errorCode) {
                    _fireEvent('callignorefailed', call, errorCode);
                    _logger.info('ignore failed');
                }
        );
    };

    /**
     * @method answerCall
     * Answer voice call
     * @param {String} callId Id of call.
     * @param {Boolean} cameraOn Whether to turn one's own camera on
     */
    me.answerCall = function (callId, cameraOn) {
        me.initMedia(function () {
            var call = _calls[callId];
            call.answer(function () {
                        _fireEvent('callanswered', call, call.isAnonymous);
                    },
                    function (errorCode) {
                        _logger.info('answer failed');
                        _fireEvent('callanswerfailed', call, errorCode);
                    },
                    cameraOn
            );
        },
            function (errorCode) {
                _logger.info('answer failed');
                _fireEvent('callanswerfailed');
            }
        );
    };

    /**
     * @method muteCall
     * Mutes current call
     * @param {String} callId Id of call.
     */
    me.muteCall = function (callId) {
        var call = _calls[callId];
        if (call) {
            call.mute();
            call.isMuted = true;
        }
    };

    /**
     * @method unMuteCall
     * Unmutes current call
     * @param {String} callId Id of call.
     */
    me.unMuteCall = function (callId) {
        var call = _calls[callId];
        if (call) {
            call.unmute();
            call.isMuted = false;
        }
    };

    /**
     * @method holdCall
     * Holds current call
     * @param {String} callId Id of call.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.holdCall = function (callId, success, failure) {
        var call = _calls[callId];
        if (call) {
            success = success || function () {
            };
            failure = failure || function () {
            };

            call.hold(success, failure);
            call.held = true;
        }
    };

    /**
     * @method unHoldCall
     * Removes hold on current call
     * @param {String} callId Id of call.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.unHoldCall = function (callId, success, failure) {
        var call = _calls[callId];
        if (call) {
            success = success || function () {
            };
            failure = failure || function () {
            };

            call.unhold(success, failure);
            call.held = false;
        }
    };

    /**
     * @method startCallVideo
     * Starts video on call
     * @param {String} callId Id of call.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.startCallVideo = function (callId, success, failure) {
        var call = _calls[callId];
        if (call) {
            success = success || function () {
            };
            failure = failure || function () {
            };

            call.videoStart(success, failure);
        }
    };

    /**
     * @method stopCallVideo
     * Stops video on call
     * @param {String} callId Id of call.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.stopCallVideo = function (callId, success, failure) {
        var call = _calls[callId];
        if (call) {
            success = success || function () {
            };
            failure = failure || function () {
            };

            call.videoStop(success, failure);
        }
    };

    /**
     * @method sendDTMF
     * sends tones on a call
     * @param {String} callId Id of call.
     * @param {String} tones A string of tones
     */
    me.sendDTMF = function (callId, tones) {
        var call = _calls[callId];
        if (call) {
            call.sendDTMF(tones);
        }
    };

    /**
     * @method endCall
     * Ends call
     * @param {String} callId Id of call.
     */
    me.endCall = function (callId) {
        var call = _calls[callId];

        if (call) {
            _logger.info('ending call');
            call.end(
                    function () {
                        _stopIntraFrame(call);

                        delete _calls[callId];

                        if (call.isAnonymous && call.isOutgoing) {
                            fcs.clearResources(function () {
                            }, true, true);
                        }

                        _fireEvent('callended', call);
                    },
                    function (errorCode) {
                        _logger.error('COULD NOT END CALL');
                        _fireEvent('callendfailed', call, errorCode);
                    }
            );
        }
    };

    /**
     * @method watchPresence
     * Sets up watching for presence change of contacts.
     */
    me.watchPresence = function (list, success, failure) {

        _logger.warn('KandyAPI.Phone.watchPresence is deprecated please use kandy.getLastSeen');

        var contactList = [];

        fcs.presence.watch(
                list.map(function (item) {
                    return item.full_user_id;
                }),
                function () {
                    _logger.info('Watch presence successful');
                    if (success) {
                        success();
                    }
                },
                function () {
                    _logger.error('Watch presence error');
                    if (failure) {
                        failure();
                    }
                }
        );
    };

    /**
     * @method updatePresence
     * Sets presence for logged in user.
     */
    me.updatePresence = function (status) {
        _logger.warn('KandyAPI.Phone.updatePresence is deprecated please use kandy.getLastSeen');
        if (fcs.getServices().presence === true) {
            fcs.presence.update(parseInt(status),
                    function () {
                        _logger.info('Presence update success');
                    },
                    function () {
                        _logger.error('Presence update failed');
                    });
        } else {
            _logger.error('Presence service not available for account');
        }
    };

    me.normalizeNumber = function (number, countryCode, success, failure) {
        _kandyAjax(
         {
          type: 'GET',
          url: '/users/services/normalize/phone_number?phone_number=' + number + '&country_code=' + countryCode,
          success: function (response) {
            if (response.status === responseCodes.OK) {
              if (success) {
                success(response.result);
              }
            } else if (failure) {
              failure(response.message, response.status);
            }
          },
          failure: function (x, e) {
            if (failure) {
                failure(x.statusText, responseCodes.ajaxError);
            }
          }
        }
      );
    };

    function _getSpidrConfiguration(userAccessToken, success, failure) {
        var paramStr = 'key=' + encodeURIComponent(userAccessToken);
        _kandyAjax(
                {
                    url: '/users/configurations/communications/spidr?' + paramStr + '&secure=true',
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            var spidrConfig = response.result.spidr_configuration;
                            success(spidrConfig);
                        }
                    },
                    failure: failure
                }
        );
    }

    /**
     * @method getSpidrConfiguration
     * Retrieves spidr configuration
     * @param {Function} userAccessToken User Access Token.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.getSpidrConfiguration = _getSpidrConfiguration;

    return me;
}());

//=================================================================
//=========================== AddressBook ===============================
//=================================================================

api.addressbook = (function () {
    var me = {};

    /**
     * @method searchDirectoryByPhoneNumber
     * @param {String} phoneNumber The name to search for.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Search directory for user.
     */
    me.searchDirectoryByPhoneNumber = function (phoneNumber, success, failure) {
        var paramStr = 'search_string=' + encodeURIComponent(phoneNumber);

        _kandyAjax(
                {
                    url: '/users/directories/native/searches/phone_number?' + paramStr,
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            var results = response.result.contacts;
                            success(results);
                        }
                    },
                    failure: failure
                }
        );
    };

    /**
     * @method searchDirectoryByName
     * @param {String} name The name to search for
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Search directory for user.
     */
    me.searchDirectoryByName = function (name, success, failure) {
        var paramStr = 'search_string=' + encodeURIComponent(name);

        _kandyAjax(
                {
                    url: '/users/directories/native/searches/name?' + paramStr,
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            success(response.result.contacts);
                        }
                    },
                    failure: failure
                }
        );
    };

    /**
     * @method searchDirectoryByUserName
     * @param {String} username Username to search for.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Search directory for user.
     */
    me.searchDirectoryByUserName = function (username, success, failure) {
        var paramStr = 'search_string=' + encodeURIComponent(username);

        _kandyAjax(
                {
                    url: '/users/directories/native/searches/user_id?' + paramStr,
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            success(response.result.contacts);
                        }
                    },
                    failure: failure
                }
        );

    };

    /**
     * @method searchDirectory
     * @param {String} searchString can first name, last name, user ID or phone number.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Generic search directory for user.
     */
    me.searchDirectory = function (searchString, success, failure) {
        var paramStr = 'search_string=' + encodeURIComponent(searchString);

        _kandyAjax(
                {
                    url: '/users/directories/native/search/?' + paramStr,
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            success(response.result.contacts);
                        }
                    },
                    failure: failure
                }
        );

    };

    /**
     * @method retrieveDirectory
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Retrieves directory entries.
     */
     me.retrieveDirectory = function (_success, _failure) {
        _kandyAjax({
            url: '/users/directories/native',
            caller: 'KandyAPI.Phone',
            success: function (response) {
                if (_success && response.result && response.result.contacts) {
                    response.result.contacts.forEach(function (contact) {
                        contact.firstName = contact.user_first_name;
                        contact.lastName = contact.user_last_name;
                        contact.number = contact.user_phone_number;
                        contact.hintType = 'community';
                        delete contact.user_first_name;
                        delete contact.user_last_name;
                    });
                    _success(response.result);
                }
            },
            failure: _failure
        });
    };
    /**
     * @method retrievePersonalAddressBook
     * @param {String} userAccessToken
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Retrieves address book entries.
     */
    me.retrievePersonalAddressBook = function (success, failure) {

        _kandyAjax(
                {
                    url: '/users/addressbooks/personal',
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            success(response.result.contacts);
                        }
                    },
                    failure: failure
                }
        );
    };

    /**
     * @method addToPersonalAddressBook
     * @param {String} userAccessToken
     * @param {Object} entry Object container properties of the entry to add.
     * @param {Object} entry.username Object container properties of the entry to add.
     * @param {Object} entry.nickname  Nickname for address book entry.
     * @param {Object} [entry.firstName] first name for address book entry.
     * @param {Object} [entry.lastName] last name for address book entry.
     * @param {Object} [entry.homePhone] home phone for address book entry.
     * @param {Object} [entry.mobileNumber] mobile number for address book entry.
     * @param {Object} [entry.businessPhone] business phone for address book entry.
     * @param {Object} [entry.fax] fax for address book entry.
     * @param {Object} [entry.email] email for address book entry.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Adds kandy user to current kandy user's address book.
     */
    me.addToPersonalAddressBook = function (entry, success, failure) {

        _kandyAjax(
                {
                    type: 'POST',
                    url: '/users/addressbooks/personal',
                    data: {contact: entry},
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        console.log('success');
                        if (success) {
                            success(response.result);
                        }
                    },
                    failure: failure
                }
        );
    };

    /**
     * @method removeFromPersonalAddressBook
     * @param {String} contactId Contact ID for the contact.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * Retrieves address book entries.
     */
    me.removeFromPersonalAddressBook = function (contactId, success, failure) {
        var paramStr = 'contact_id=' + encodeURIComponent(contactId);

        _kandyAjax(
                {
                    type: 'DELETE',
                    url: '/users/addressbooks/personal?' + paramStr,
                    contentType: 'text/html',
                    acceptType: '*/*',
                    caller: 'KandyAPI.Phone',
                    success: function (response) {
                        if (success) {
                            success();
                        }
                    },
                    failure: failure
                }
        );
    };


    /**
     /**
     * @method retrieveDeviceAddressBook
     * Retrieve the network address book
     * @param {String} userAccessToken
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * @return {Object} response object with success being true or false
     */
    me.retrieveUserDeviceAddressBook = function (success, failure) {

        _kandyAjax({
            url: '/users/addressbooks/device?key=' + encodeURIComponent(_userDetails.user_access_token),
            caller: 'KandyAPI.Phone',
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: failure
        });
    };

    return me;
}());



//=================================================================
//======================= REGISTRATION ============================
//=================================================================
/**
 * @author Russell Holmes
 * KandyAPI.Registration
 * @singleton
 * Registration is used to register with the Kandy API.
 *
 * Simply create a new KandyAPI phone instance passing in your configuration
 *
 *     KandyAPI.Registration.setup({
 *       listeners:{
 *           callinitiated: function(call, number){
 *              // Call has been initiated.
 *           }
 *       }
 *     });
 */
api.Registration = api.registration = (function () {
    var me = {};

    /**
     * @property {String} _config Domain Access Code.
     * @private
     */
    var _domainAccessToken = null;

    /**
     * @method _fireEvent
     * Fires passed event
     * @private
     */
    function _fireEvent() {
        var eventName = Array.prototype.shift.apply(arguments);

        if (me.events[eventName]) {
            me.events[eventName].apply(me, arguments);
        }
    }

    /**
     * @method setup
     * @param {Object} config Configuration.
     * @param {Array} [config.listeners={}] Listeners for KandyAPI.Registration.
     * @param {String} [config.mediatorUrl="http://api.kandy.io"] Rest endpoint for KandyWrapper.
     */
    me.setup = function (config) {

        // setup default configuration
        _config = extend(_config, config);

        me._domainAccessToken = config.domainAccessToken;

        // setup listeners
        //TODO me.events realy needed for KandyAPI.Registration?
        /*
        if (_config.listeners) {
            for (var listener in _config.listeners) {

                // TODO: This has to be a bug right? We're only adding the listener if it's already defined?
                if (me.events[listener] !== undefined) {
                    me.events[listener] = _config.listeners[listener];
                }
            }
        }

        */
        _logger = fcs.logManager.getLogger();
    };

    /**
     * @method retrieveCountryCode
     * Retrieves county code based on Device
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.retrieveCountryCode = function (success, failure) {
        var encodedAccessCode = encodeURIComponent(me._domainAccessToken);

        _kandyAjax({
            url: '/domains/countrycodes?key=' + encodedAccessCode,
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: function (x, e) {
                _logger.error('ERROR RETRIEVING COUNTRY CODE');
                if (failure) {
                    failure(x, e);
                }
            }
        });
    };

    /**
     * @method sendValidationCode
     * Send validation code to phone
     * @param {String} phoneNumber Phone number to send validation SMS to.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.sendValidationCode = function (phoneNumber, countryCode, success, failure) {

        $.ajaxPrefilter('json script', function (options) {
            options.crossDomain = true;
        });

        _kandyAjax({
            type: 'POST',
            url: '/domains/verifications/smss?key=' + encodeURIComponent(me._domainAccessToken),

            data: {
                user_phone_number: phoneNumber,
                user_country_code: countryCode
            },

            success: function (response) {
                if (success) {
                    success();
                }
            },
            failure: failure
        });
    };

    /**
     * @method validateCode
     * Validate SMS code sent to phone
     * @param {String} validationCode Validation code sent to phone.
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     */
    me.validateCode = function (validationCode, success, failure) {
        var encodedAccessCode = encodeURIComponent(me._domainAccessToken);

        _kandyAjax({
            url: '/domains/verifications/codes?key=' + encodedAccessCode + '&validation_code=' + validationCode,
            success: function (response) {
                if (success) {
                    success(response.result.valid);
                }
            },
            failure: failure
        });
    };

    me.getUserInfo = function (success, failure) {
        _kandyAjax({
            url: '/users/billing/packages/status/active',
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: failure
        });
    };

    me.getProfileInfo = function (userId, domaiId, success, failure) {
        var params = [
            'user_id=' + encodeURIComponent(userId),
            'domain_name=' + encodeURIComponent(domaiId)
        ].join('&');

        _kandyAjax({
            url: '/users/profiles/user_profiles/user_profile?' + params,
            success: function (response) {
                if (success) {
                    success(response.result);
                }
            },
            failure: failure
        });
    };

    me.setProfileInfo = function (data, success, failure) {
        var params = [];
        if (data.first_name) {
            params.push('first_name=' + encodeURIComponent(data.first_name));
        }
        if (data.last_name) {
            params.push('last_name=' + encodeURIComponent(data.last_name));
        }
        if (data.status_text) {
            params.push('status_text=' + encodeURIComponent(data.status_text));
        }
        if (data.image_details) {
            params.push('image_details=' + encodeURIComponent(data.image_details));
        }
        if (data.user_data) {
            params.push('user_data=' + encodeURIComponent(data.user_data));
        }
        _kandyAjax({
            url: '/users/profiles/user_profiles?' + params.join('&'),
            type: 'POST',
            success: function (response) {
                if (success) {
                    success();
                }
            },
            failure: failure
        });
    };


    /**
     * @method register a device
     * Registers a device in Kandy
     * @param {Object}
     * e.g. {
     *        {String} domainAccessToken: "7b81d8e63f5b478382b4e23127260090", // optional
     *        {String} userPhoneNumber: "4034932232",
     *        {String} userCountryCode "UA",
     *        {String} validationCode "1234",
     *        {String} deviceNativeId "3456",
     *        {String} deviceFamily "iPhone",  // optional
     *        {String} deviceName "myPhone",  // optional
     *        {String} clientSwVersion "4",  // optional
     *        {String} deviceOsVersion "801",  // optional
     *        {String} userPassword "pwdxyz13!",  // optional
     *        {Function} success = function() { doSomething(); }
     *        {Function} failure = function() { doSomethingElse(); }
     *   }
     * @return {Object} response object
     * e.g. { user_id: "972542405850",
     full_user_id: "972542405850@domain.com",
     domain_name:  "domain.com",
     user_access_token: "4d405f6dfd9842a981a90daaf0da08fa",
     device_id: "4d405f6dfd9842a389d5b45d65a9dfd0"
     }
     */
    me.register = function (params, success, failure) {

        $.ajaxPrefilter('json script', function (opts) {
            opts.crossDomain = true;
        });

        var options = {
            client_sw_version: api.version,
            client_sw_type: 'JS'
        };

        //TODO "internal server error" if client_sw_version and client_sw_type are used.
        var paramStr = 'key=' + encodeURIComponent(me._domainAccessToken) /*+
                '&client_sw_version=' + encodeURIComponent(options.client_sw_version) +
                '&client_sw_type=' + encodeURIComponent(options.client_sw_type)*/;

        _kandyAjax({
            type: 'POST',
            url: '/api_wrappers/registrations?' + paramStr,
            data: {
                user_phone_number: params.userPhoneNumber,
                user_country_code: params.userCountryCode,
                validation_code: params.validationCode,
                device_native_id: params.deviceNativeId
            },
            success: function (response) {
                if (success) {
                    success(response.result);
                }

            },
            failure: failure
        });
    };

    /**
     * @method getConfiguration
     * Retrieves domain name, access token, and SPiDR configuration
     * @param {String} domainApiKey
     * @param {String} domainApiSecret
     * @param {Function} success The success callback.
     * @param {Function} failure The failure callback.
     * @return {Object} response object
     * e.g. {
     "domain_name": "domain.com",
     "domain_access_token": "4d405f6dfd9842a981a90daaf0da08fa",
     "spidr_configuration":
     {
     "REST_server_address":"kandysimplex.fring.com",
     "REST_server_port":443,
     "webSocket_server_address":"kandysimplex.fring.com",
     "webSocket_server_port":8582,
     "ICE_server_address":"54.84.226.174",
     "ICE_server_port":3478,
     "subscription_expire_time_seconds":null,
     "REST_protocol":"https",
     "server_certificate":null,
     "use_DTLS":false,
     "audit_enable":true,
     "audit_packet_frequency":null
     }
     }
     */

    me.getConfiguration = function (params, success, failure) {

        var paramStr = 'key=' + encodeURIComponent(params.domainApiKey) +
                '&domain_api_secret=' + encodeURIComponent(params.domainApiSecret);
        _kandyAjax({
            url: '/api_wrappers/configurations?' + paramStr,
            success: function (response) {
                if (success) {
                    success({
                        domainName: response.result.domain_name,
                        domainAccessToken: response.result.domain_access_token,
                        spidrConfiguration: {
                            restUrl: response.result.spidr_configuration.REST_server_address,
                            restPort: response.result.spidr_configuration.REST_server_port,
                            protocol: response.result.spidr_configuration.REST_protocol,
                            websocketIP: response.result.spidr_configuration.webSocket_server_address,
                            websocketPort: response.result.spidr_configuration.webSocket_server_port,
                            spidr_env: {
                                iceserver: ('stun:' + response.result.spidr_configuration.ICE_server_address + ':' +
                                        response.result.spidr_configuration.ICE_server_port),
                                ice: ('STUN stun:' + response.result.spidr_configuration.ICE_server_address + ':' +
                                        response.result.spidr_configuration.ICE_server_port)

                            }
                        }
                    });
                }
            },
            failure: failure
        });
    };

    return me;
}());


    //Announced deprecation in 2.2.0

    api.Phone.sendSMS = function (){
        _logger.warn('KandyAPI.Phone.sendSMS is deprecated please use kandy.messaging.sendSMS');
        api.messaging.sendSMS.apply(null, arguments);
    };

    api.Phone.sendIm = function (){
        _logger.warn('KandyAPI.Phone.sendIm is deprecated please use kandy.messaging.sendIm');
        api.messaging.sendIm.apply(null, arguments);
    };
    api.Phone.sendJSON = function (){
        _logger.warn('KandyAPI.Phone.sendJSON is deprecated please use kandy.messaging.sendJSON');
        api.messaging.sendJSON.apply(null, arguments);
    };
    api.Phone.sendImWithFile = function (){
        _logger.warn('KandyAPI.Phone.sendImWithFile is deprecated please use kandy.messaging.sendImWithFile');
        api.messaging.sendImWithFile.apply(null, arguments);
    };
    api.Phone.sendImWithImage = function (){
        _logger.warn('KandyAPI.Phone.sendImWithImage is deprecated please use kandy.messaging.sendImWithImage');
        api.messaging.sendImWithImage.apply(null, arguments);
    };
    api.Phone.sendImWithAudio = function (){
        _logger.warn('KandyAPI.Phone.sendImWithAudio is deprecated please use kandy.messaging.sendImWithAudio');
        api.messaging.sendImWithAudio.apply(null, arguments);
    };
    api.Phone.sendImWithVideo = function (){
        _logger.warn('KandyAPI.Phone.sendImWithVideo is deprecated please use kandy.messaging.sendImWithVideo');
        api.messaging.sendImWithVideo.apply(null, arguments);
    };
    api.Phone.uploadFile = function (){
        _logger.warn('KandyAPI.Phone.uploadFile is deprecated please use kandy.messaging.uploadFile');
        api.messaging.uploadFile.apply(null, arguments);
    };
    api.Phone.buildFileUrl = function (){
        _logger.warn('KandyAPI.Phone.buildFileUrl is deprecated please use kandy.messaging.buildFileUrl');
        api.messaging.buildFileUrl.apply(null, arguments);
    };
    api.Phone.buildFileThumbnailUrl = function (){
        _logger.warn('KandyAPI.Phone.buildFileThumbnailUrl is deprecated please use kandy.messaging.buildFileThumbnailUrl');
        api.messaging.buildFileThumbnailUrl.apply(null, arguments);
    };

    api.Phone.getIm = function (){
        _logger.warn('KandyAPI.Phone.getIm is deprecated please use kandy.messaging.getIm');
        api.messaging.getIm.apply(null, arguments);
    };

    api.Phone.clearIm = function (){
        _logger.warn('KandyAPI.Phone.clearIm is deprecated please use kandy.messaging.clearIm');
        api.messaging.clearIm.apply(null, arguments);
    };

    api.Phone.searchDirectoryByPhoneNumber = function (){
        _logger.warn('KandyAPI.Phone.searchDirectoryByPhoneNumber is deprecated please use kandy.addressbook.searchDirectoryByPhoneNumber');
        api.addressbook.searchDirectoryByPhoneNumber.apply(null, arguments);
    };
    api.Phone.searchDirectoryByName = function (){
        _logger.warn('KandyAPI.Phone.searchDirectoryByName is deprecated please use kandy.addressbook.searchDirectoryByName');
        api.addressbook.searchDirectoryByName.apply(null, arguments);
    };
    api.Phone.searchDirectoryByUserName = function (){
        _logger.warn('KandyAPI.Phone.searchDirectoryByUserName is deprecated please use kandy.addressbook.searchDirectoryByUserName');
        api.addressbook.searchDirectoryByUserName.apply(null, arguments);
    };
    api.Phone.searchDirectory = function (){
        _logger.warn('KandyAPI.Phone.searchDirectory is deprecated please use kandy.addressbook.searchDirectory');
        api.addressbook.searchDirectory.apply(null, arguments);
    };
    api.Phone.retrievePersonalAddressBook = function (){
        _logger.warn('KandyAPI.Phone.retrievePersonalAddressBook is deprecated please use kandy.addressbook.retrievePersonalAddressBook');
        api.addressbook.retrievePersonalAddressBook.apply(null, arguments);
    };
    api.Phone.addToPersonalAddressBook = function (){
        _logger.warn('KandyAPI.Phone.addToPersonalAddressBook is deprecated please use kandy.addressbook.addToPersonalAddressBook');
        api.addressbook.addToPersonalAddressBook.apply(null, arguments);
    };
    api.Phone.removeFromPersonalAddressBook = function (){
        _logger.warn('KandyAPI.Phone.removeFromPersonalAddressBook is deprecated please use kandy.addressbook.removeFromPersonalAddressBook');
        api.addressbook.removeFromPersonalAddressBook.apply(null, arguments);
    };
    api.Phone.retrieveUserDeviceAddressBook = function (){
        _logger.warn('KandyAPI.Phone.retrieveUserDeviceAddressBook is deprecated please use kandy.addressbook.retrieveUserDeviceAddressBook');
        api.addressbook.retrieveUserDeviceAddressBook.apply(null, arguments);
    };

    window.KandyAPI = window.kandy = api;
    if ( typeof window.define === "function" && window.define.amd ) {
        define( "KandyAPI", [], function () { return api; } );
        define( "kandy", [], function () { return api; } );
    }

})( window );
