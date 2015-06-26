module.exports = [{
    name: 'requestAuthorization',
    options: {
        url: '/login/authorize',
        method: 'POST'
    }
}, {
    name: 'trackAuthorizationProgress',
    options: {
        url: '/login/authorize/:track_id',
        method: 'GET'
    }
}, {
    name: 'getChallenge',
    options: {
        url: '/login',
        method: 'GET'
    }
}, {
    name: 'openSession',
    options: {
        url: '/login/session',
        method: 'POST'
    }
}, {
    name: 'closeSession',
    options: {
        url: '/login/logout',
        method: 'POST'
    }
}];
