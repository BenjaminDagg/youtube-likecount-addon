

/*var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
}
*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
        setTimeout(function() {
            start();
        },3000)
      
    }
  })

  
function start() {
    let anchors = document.getElementsByTagName('a');
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
        infoTab.innerHTML = '';
        //console.log(links[i].parentElement.parentElement);
        var parent = links[i].parentElement.parentElement;
        /*
        if (parent.querySelector('#details')) {
            parent.appendChild(infoTab);
        }
        else {
            parent = links[i].parentElement;
            parent.appendChild(infoTab);
        }
        */
        var container = links[i].parentElement.parentElement;
        containers.push(container);
        links[i].parentElement.parentElement.appendChild(infoTab);
    }

    var videoContainers = document.getElementsByTagName('ytd-rich-grid-video-renderer');
    var horizContainers = document.getElementsByTagName('ytd-video-renderer');
    
    for (var i = 0;  i < videoContainers.length;i++) {
        //console.log(containers[i]);
        videoContainers[i].addEventListener("mouseenter", onVideoHover);
    }
    for (var i = 0;  i < horizContainers.length;i++) {
        //console.log(containers[i]);
        horizContainers[i].addEventListener("mouseenter", onVideoHover);
    }
}

async function onVideoHover(e) {
    var item = e.srcElement;
    //console.log(item);
    var dismissable = item.querySelector('#dismissable');
    var link = dismissable.querySelector('#thumbnail');
    console.log(link);
    var infoTab = dismissable.querySelector('.info-tab');
    //https://www.youtube.com/watch?v=rI1ZXRJrql8
    var id = link.href.substr(32,link.href.length);
    var data = await fetch('https://yas-dagg.herokuapp.com/' + id)
    var json = await data.json();
    var likeCount = parseInt(json.data.items[0].statistics.likeCount);
    var dislikeCount = parseInt(json.data.items[0].statistics.dislikeCount);
    var total = likeCount + dislikeCount;
    var totalDiv = document.createElement('div');
    totalDiv.className = 'likebar';
    var likeDiv = document.createElement('div');
    likeDiv.className = 'like-div';
    likeDiv.style.flex = (likeCount / total) * 100 + '%';
    var disDiv = document.createElement('div');
    disDiv.className = 'dislike-div';
    disDiv.style.flex = (dislikeCount / total) * 100 + '%';
    infoTab.innerHTML = '👍: ' + json.data.items[0].statistics.likeCount +  ' 👎 ' + json.data.items[0].statistics.dislikeCount;
    totalDiv.appendChild(likeDiv);
    totalDiv.appendChild(disDiv);
    infoTab.appendChild(totalDiv);
    //infoTab.innerHTML = '👍: ' + json.data.items[0].statistics.likeCount +  ' 👎 ' + json.data.items[0].statistics.dislikeCount;
}

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
    console.log('done');
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
        var test = document.createElement('span');
        test.innerHTML = "this is a test";
        //console.log(links[i].href);
        
        
        getData(links[i].href.substr(32,links[i].href.length));
    }
}


async function getData(id) {
        var item = null;
        for (var i = 0; i < links.length;i++) {
            if (links[i].href.substr(32,links[i].href.length) === id) {
                item = links[i];
            }
        }
        var data = await fetch('http://localhost:3000/' + id)
        var json = await data.json();
        console.log(json);
        var parent = item.parentElement.parentElement;
        var test = document.createElement('span');
        test.innerHTML = json.data.items[0].statistics.likeCount
        parent.appendChild(test);

        return json.data;

}

*/
