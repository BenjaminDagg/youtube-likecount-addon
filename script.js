


/* detects when url changes in the current tab */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
        setTimeout(function() {
            start();
        },3000)
      
    }
  })


/* gets all youtube video containers and appends the likebar onto it */
function start() {
    //find all links
    let anchors = document.getElementsByTagName('a');
    var links = [];
    //keep only links that go to youtube videos to see which containers have videos
    for (var i = 0; i < anchors.length;i++) {
        if (anchors[i].id.includes('thumbnail')) {
        links.push(anchors[i])
        }
    }

    //append the likebar div onto each container (may need to update as youtube changes)
    var containers = [];
    for (var i = 0; i < links.length;i++) {
        
        //likebar div
        var infoTab = document.createElement('div');
        infoTab.className = 'info-tab';
        infoTab.innerHTML = '';

        //console.log(links[i].parentElement.parentElement);
        var parent = links[i].parentElement.parentElement;
        
        //target div to put the likebar
        var container = links[i].parentElement.parentElement;
        containers.push(container);
        links[i].parentElement.parentElement.appendChild(infoTab);
    }

    //selects all tags that house a youtube video and attach a on hover listener
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


//function called when mouse hovers over video
async function onVideoHover(e) {

    //the item the you are hovering over (that triggered the event)
    var item = e.srcElement;
    //console.log(item);
    //next div in the tree
    var dismissable = item.querySelector('#dismissable');
    //child of dism
    var link = dismissable.querySelector('#thumbnail');
    //console.log(link);
    //likebar that was added earlier
    var infoTab = dismissable.querySelector('.info-tab');
    //https://www.youtube.com/watch?v=rI1ZXRJrql8

    //get url from the link
    var id = link.href.substr(32,link.href.length);

    //call api to get like/dislike info
    var data = await fetch('https://yas-dagg.herokuapp.com/' + id)
    var json = await data.json();


    var likeCount = parseInt(json.data.items[0].statistics.likeCount);
    var dislikeCount = parseInt(json.data.items[0].statistics.dislikeCount);
    var total = likeCount + dislikeCount;

    //actual likebar itself
    var totalDiv = document.createElement('div');
    totalDiv.className = 'likebar';

    //like (green portion of likebar)
    var likeDiv = document.createElement('div');
    likeDiv.className = 'like-div';
    likeDiv.style.flex = (likeCount / total) * 100 + '%';

    //dislike (red ) portion
    var disDiv = document.createElement('div');
    disDiv.className = 'dislike-div';
    disDiv.style.flex = (dislikeCount / total) * 100 + '%';

    //put like/dislike count on likebar div
    infoTab.innerHTML = '👍: ' + json.data.items[0].statistics.likeCount +  ' 👎 ' + json.data.items[0].statistics.dislikeCount;

    //add likebar div to container
    totalDiv.appendChild(likeDiv);
    totalDiv.appendChild(disDiv);
    infoTab.appendChild(totalDiv);
    
}


