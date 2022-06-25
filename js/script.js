function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show-2");
}

$(document).ready(function() {

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
        $("#datepicker").datepicker();
    });

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

});