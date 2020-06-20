


/*
let anchors = document.getElementsByTagName('a');
setInterval(function() {
    anchors = document.getElementsByTagName('a');
},2000)
var links = [];
for (var i = 0; i < anchors.length;i++) {
    if (anchors[i].id.includes('thumbnail')) {
        links.push(anchors[i])
    }
}

var containers = [];
for (var i = 0; i < links.length;i++) {
    var infoTab = document.createElement('div');
    infoTab.className = 'info-tab';
    infoTab.innerHTML = "hello";
    var container = links[i].parentElement.parentElement;
    containers.push(container);
    links[i].parentElement.parentElement.appendChild(infoTab);
}

var videoContainers = document.getElementsByTagName('ytd-rich-grid-video-renderer');
var horizContainers = document.getElementsByTagName('ytd-video-renderer');
videoContainers = videoContainers + horizContainers;
for (var i = 0;  i < videoContainers.length;i++) {
    //console.log(containers[i]);
    containers[i].addEventListener("mouseenter", onVideoHover);
}
for (var i = 0;  i < containers.length;i++) {
    //console.log(containers[i]);
    containers[i].addEventListener("mouseenter", onVideoHover);
}

function onVideoHover(e) {
    var item = e.srcElement;
    console.log(item);
    var infotab = item.querySelector('.info-tab');
    
}

/*
var oldURL = "";
var currentURL = window.location.href;
function checkURLchange(currentURL){
    if(currentURL != oldURL){
        init();
        oldURL = currentURL;
        
    }

    oldURL = window.location.href;
    setInterval(function() {
        checkURLchange(window.location.href);
    }, 2000);
}

checkURLchange();
*/

/*
let changeColor = document.getElementById('changeColor');
let detailsContainers = document.getElementsByClassName('style-scope ytd-video-meta-block');
let anchors = document.getElementsByTagName('a');

var links = [];
for (var i = 0; i < anchors.length;i++) {
    if (anchors[i].id.includes('thumbnail')) {
        links.push(anchors[i])
    }
}
//console.log(links);

const API_KEY = 'AIzaSyDaFaHT1cF3mHHLgwZoicvlvJCfv5FKKZo';

document.addEventListener('DOMContentLoaded', function () {
    alert('done');
});

    

for (var i = 0; i < links.length;i++) {
    var parent = links[i].parentElement.parentElement;
    var test = document.createElement('span');
    test.innerHTML = "this is a test";
    //console.log(links[i].href);
    
    
    getData(links[i].href.substr(32,links[i].href.length));
}

function init() {
    //console.log('done');
    let changeColor = document.getElementById('changeColor');
let detailsContainers = document.getElementsByClassName('style-scope ytd-video-meta-block');
let anchors = document.getElementsByTagName('a');

var links = [];
for (var i = 0; i < anchors.length;i++) {
    if (anchors[i].id.includes('thumbnail')) {
        links.push(anchors[i])
    }
}
    for (var i = 0; i < links.length;i++) {
        var parent = links[i].parentElement.parentElement;
        var test = document.createElement('div');
        test.innerHTML = "this is a test";
        //console.log(links[i].href);
        
        
        getData(links[i].href.substr(32,links[i].href.length));
    }
}


async function getData(id) {
    let changeColor = document.getElementById('changeColor');
let detailsContainers = document.getElementsByClassName('style-scope ytd-video-meta-block');
let anchors = document.getElementsByTagName('a');

var links = [];
for (var i = 0; i < anchors.length;i++) {
    if (anchors[i].id.includes('thumbnail')) {
        links.push(anchors[i])
    }
}
        var item = null;
        for (var i = 0; i < links.length;i++) {
            if (links[i].href.substr(32,links[i].href.length) === id) {
                item = links[i];
            }
        }
        var data = await fetch('http://localhost:3000/' + id)
        var json = await data.json();
        var test = document.createElement('p');
        var parent = item.parentElement.parentElement;
        test.className = 'likebar';
        
        test.innerHTML = json.data.items[0].statistics.likeCount;
        //console.log(json);
        //var parent = item.parentElement.parentElement.querySelector('#details').querySelector('#meta');
        
        for (var i = 0; i < parent.childNodes.length;i++) {
            if (parent.childNodes[i].className == 'likebar') {
                parent.removeChild(parent.childNodes[i])
            }
        }
        
        
        
       parent.appendChild(test);
        

        return json.data;

}

*/