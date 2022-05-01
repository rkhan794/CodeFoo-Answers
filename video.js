let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
    vid.onclick = () =>{
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        let desc = vid.querySelector('.list-desc').innerHTML;
        document.querySelector('.main_video-container .main-video').src =src;
        document.querySelector('.main_video-container .main-video').play();
        document.querySelector('.main_video-container .main-vid-title').innerHTML = title;
        document.querySelector('.main_video-container .main-vid-desc').innerHTML = desc;
        videoList.forEach(vid => vid.classList.remove('active'));
        vid.classList.add('active');
    };
});


var videos = [
    document.getElementById("Video0"),
    document.getElementById("Video1"),
    document.getElementById("Video2"),
    document.getElementById("Video3"),
    document.getElementById("Video4"),
    document.getElementById("Video5"),
    document.getElementById("Video6"),
    document.getElementById("Video7"),
    document.getElementById("Video8"),
    document.getElementById("Video9"),
    document.getElementById("Video10"),
];
