// Replace the video ID below with the ID of your video
const videoId = "itdpuGHAcpg";

// This function creates an <iframe> (and YouTube player) after the API code downloads
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// The API will call this function when the video player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}

// The API calls this function when the player's state changes
function onPlayerStateChange(event) {
  // You can add your own code here to handle the player's state changes
}
