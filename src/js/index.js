let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const intervalTime = 2000;

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.getElementById('progress').style.width = '100%';
        setTimeout(function () {
            document.getElementById('progressBar').style.display = 'none';
            $('#main').removeClass('d-none')
            $('.load').addClass('d-none')
        }, 500);
    }

};

function updateScreenSize() {

    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const menuWidth = $('.menu').width();

    if(screenWidth < 600){
        $('#body').css('padding',' 100px 20px 0 80px');
        $('.pay').addClass('d-none');
        $('.iconHamb').addClass('d-none');
        $('.navbar').css('padding',"0 85px")
        $('.navbar').css( 'margin-left','2%')
    } else {
        $('#body').css('padding','100px 60px 130px 130px')
        $('.pay').removeClass('d-none');
        $('.iconHamb').removeClass('d-none');
        $('.navbar').css('padding',"0 65px")
        $('.navbar').css( 'margin-left','60px')
    }

    if (screenHeight > 698 || menuWidth < 240) {
        $(".listBoxDiv").css('overflow-y', 'visible');
    } else {
        $(".listBoxDiv").css('overflow-y', 'auto');
    }
}

$(window).resize(function() {
    updateScreenSize();
});

$(document).ready(function() {
    updateScreenSize();
});

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    alert()
    showSlide(slideIndex - 1);
}

// Inicia o slideshow
showSlide(slideIndex);

// Mudança automática de slides
setInterval(nextSlide, intervalTime);

var open = false;
$(".iconHamb").click(function () {
    open = !open
    if (!open) {
        $(this).css('left', '12px')
        $(this).css('top', '10px')
    } else {
        $(this).css('left', '220px')
        $(this).css('top', '60px')
    }
    openMenu()
})

function openMenu() {
    if (open) {
        $(".iconHamb").html('❮')
        $(".menu").css('width', '240px')
        $(".navbar").css('width', 'calc(100% - 240px)');
        $(".navbar").css('margin-left', '240px');
        $(".conteinerTeste").css('margin-left', '240px');
        $(".listBox a").removeClass('d-none')
        $(".listBox ").removeClass('listBoxHover')
        $(".nav").removeClass('d-none')
    } else {
        $(".conteinerTeste").css('margin-left', '0');
        $(".iconHamb").html('❯')
        $(".listBox").addClass('listBoxHover')
        $(".nav").addClass('d-none')
        $(".listBox a").addClass('d-none')
        $(".menu").css('width', '60px')
        $(".listBoxDiv").css('overflow-y', 'visible')
        $(".navbar").css('width', 'calc(100% - 60px)');
        $(".navbar").css('margin-left', '60px');
    }
}

$('.listBox li').hover(function () {
    if (open) {
        $(this).css({ 'background': 'white', 'color': 'black !important' });
    } else {
        $(this).find("a").removeClass('d-none');
    }
}, function () {
    if (!open) {
        $(this).find("a").addClass('d-none');
    }
    $(this).css('background', '');
});





