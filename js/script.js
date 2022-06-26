//drodown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show-2");
}

$(document).ready(function() {

    //verander stad naam op pagina
    $("body").on("click", "#stad-1", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Maastricht");
        $(".pagina-stad-b").text("Book a guide in Maastricht");
    });

    $("body").on("click", "#stad-2", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Aachen");
        $(".pagina-stad-b").text("Book a guide in Aachen");
    });

    $("body").on("click", "#stad-3", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Londen");
        $(".pagina-stad-b").text("Book a guide in Londen");
    });

    $("body").on("click", "#stad-4", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Lisabon");
        $(".pagina-stad-b").text("Book a guide in Lisabon");
    });

    $("body").on("click", "#stad-5", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Schimmert");
        $(".pagina-stad-b").text("Book a guide in Schimmert");
    });

    $("body").on("click", "#stad-6", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("RotjeKnor");
        $(".pagina-stad-b").text("Book a guide in RotjeKnor");
    });

    $("body").on("click", "#stad-7", function(event) {
        event.preventDefault();
        $(".pagina-stad").text("Dublin");
        $(".pagina-stad-b").text("Book a guide in Dublin");
    });

    $(function() {
        $("#datepicker").datepicker({
            dateFormat: 'D, dd M',
        });
    });

    //modal popup
    var modal = document.getElementById("modal-popup");
    var btn = document.getElementById("popup");
    var btn2 = document.getElementById("popup-tel");
    var btn3 = document.getElementById("popup-mail");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    btn2.onclick = function() {
        modal.style.display = "block";
    }

    btn3.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //videoplayer
    // const video = document.getElementById('customVideo');
    // const video2 = document.getElementById('customVideo2');
    // let forwardTime;

    // $('#playBtn').click(function() {
    //     if (video.paused == true) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // });

    // $('#playBtn2').click(function() {
    //     if (video2.paused == true) {
    //         video2.play();
    //     } else {
    //         video2.pause();
    //     }
    // });

    // video.ontimeupdate = function() {
    //     forwardTime = video.currentTime + 10;
    // };

    // $('#timeBtn').click(function() {
    //     video.play();
    //     video.currentTime = forwardTime;
    // });

    // videos
    let theVideo = 1;
    let video = document.getElementById('video');
    let source = document.getElementById('source');

    $('.button1').click(function() {
        if (theVideo != 1) {
            theVideo = 1;
            source.setAttribute('src', 'img/video/maastricht.mp4');
            video.load();
        }
        if (theVideo == 1) {
            if (video.paused == true) {
                video.play();
                document.getElementById('pijl1').setAttribute("src", "img/icons/pause_icon.png");
            } else {
                video.pause();
                document.getElementById('pijl1').setAttribute("src", "img/icons/play_icon.png");
            }
        }
    });

    $('.button2').click(function() {
        if (theVideo != 2) {
            theVideo = 2;
            source.setAttribute('src', 'img/video/aachen.mp4');
            video.load();
        }
        if (theVideo == 2) {
            if (video.paused == true) {
                video.play();
                document.getElementById('pijl2').setAttribute("src", "img/icons/pause_icon.png");
            } else {
                video.pause();
                document.getElementById('pijl2').setAttribute("src", "img/icons/play_icon.png");
            }
        }
    });

    $('.button3').click(function() {
        if (theVideo != 3) {
            theVideo = 3;
            source.setAttribute('src', 'img/video/schimmert.mp4');
            video.load();
        }
        if (theVideo == 3) {
            if (video.paused == true) {
                video.play();
                document.getElementById('pijl3').setAttribute("src", "img/icons/pause_icon.png");
            } else {
                video.pause();
                document.getElementById('pijl3').setAttribute("src", "img/icons/play_icon.png");
            }
        }
    });

    $('.button4').click(function() {
        if (theVideo != 4) {
            theVideo = 4;
            source.setAttribute('src', 'img/video/newyork.mp4');
            video.load();
        }
        if (theVideo == 4) {
            if (video.paused == true) {
                video.play();
                document.getElementById('pijl4').setAttribute("src", "img/icons/pause_icon.png");
            } else {
                video.pause();
                document.getElementById('pijl4').setAttribute("src", "img/icons/play_icon.png");
            }
        }
    });

    $('#arrow').click(function() {
        event.preventDefault();
        video.currentTime += 10;
    });


});