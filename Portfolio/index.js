$(document).ready(function() {

    var offset = 10;
    $('.rpa_add_botton').click(function() {
        $('.rpa_project_title').addClass('hidden');
        $('.rpa_slogan').addClass('hidden');
        $('.rpa_tech').addClass('hidden');
        $('.rpa_add_botton').addClass('hidden');
        $('.rpa_description-section').addClass('rpa_description-section-click');
        $('.section__rpa_content').addClass('section__rpa_content-block');
        $('html, body').delay(1000).animate({
            scrollTop: $("#rpa_content").offset().top - offset
        }, 1500);
    });

    $('.rpa_back_button').click(function() {
        $('html, body').animate({
            scrollTop: $("#rpa_banner").offset().top - offset
        }, 1500);

        setTimeout(function() {
            $('.section__rpa_content').removeClass('section__rpa_content-block');
            $('.rpa_description-section').removeClass('rpa_description-section-click');
            setTimeout(function() {
                $('.rpa_add_botton').removeClass('hidden');
                $('.rpa_tech').removeClass('hidden');
                $('.rpa_slogan').removeClass('hidden');
                $('.rpa_project_title').removeClass('hidden');
            },1000);
            
        }, 1500);
              
    });

});