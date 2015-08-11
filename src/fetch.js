/* globals encodeURIComponent, module, Error, JSON, XMLHttpRequest */

function playerDetailsUrl(path) {
    return 'https://www.mixcloud.com/player/details/?key=' + encodeURIComponent(path);
}

function addTrackNumber(data) {
    data.sections.forEach(function (section, i) {
        section.track_number = i + 1;
    });
    return data;
}

function formatData(data) {
    return addTrackNumber(data.cloudcast);
}

function fetchPlayerData(path, callback) {
    var url = playerDetailsUrl(path);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            callback(formatData(json));
        }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
}

module.exports = fetchPlayerData;
