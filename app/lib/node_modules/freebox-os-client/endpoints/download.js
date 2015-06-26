module.exports = [{
    name: 'getAllDownloads',
    options: {
        url: '/downloads/',
        method: 'GET'
    }
}, {
    name: 'getDownload',
    options: {
        url: '/downloads/:id',
        method: 'GET'
    }
}, {
    name: 'deleteDownload',
    options: {
        url: '/downloads/:id',
        method: 'DELETE'
    }
}, {
    name: 'eraseDownload',
    options: {
        url: '/downloads/:id/erase',
        method: 'DELETE'
    }
}, {
    name: 'updateDownload',
    options: {
        url: '/downloads/:id',
        method: 'PUT'
    }
}, {
    name: 'getDownloadLog',
    options: {
        url: '/downloads/:id/log',
        method: 'GET'
    }
}, {
    name: 'addDownloadByUrl',
    options: {
        url: '/downloads/add',
        method: 'POST'
    }
}, {
    name: 'getDownloadStats',
    options: {
        url: '/downloads/stats',
        method: 'GET'
    }
}, {
    name: 'getFilesOfDownload',
    options: {
        url: '/downloads/:task_id/files',
        method: 'GET'
    }
}, {
    name: 'changePriorityOfDownloadFile',
    options: {
        url: '/downloads/:task_id/files/:path',
        method: 'PUT'
    }
}];
