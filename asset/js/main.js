$(window).on('load', function() {
    $('#flexslider_header').flexslider({
        animation: 'slide',
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 15000
    });

    $('.search_item_slider').flexslider({
        animation: 'slide',
        controlNav: false,
        slideshow: false,
        prevText: '',
        nextText: ''
    });
});

$(document).ready(function() {

    /* MENU BURGER */
    const menu_burger_btn = $('#menu_burger_btn');
    const menu_burger_box = $('.menu_burger_content');
    const result_count = $('.search_info strong');
    result_count.text('2');
    var on_burger_box = false;

    menu_burger_box.css('display', 'none');

    menu_burger_btn.on('click', function(){
        on_burger_box = false;

        if(menu_burger_box.css('display') == 'none'){
            menu_burger_box.css({
                'width': '50%',
                'opacity': '0',
                'display': 'block'
            });

            menu_burger_box.animate({
                'width': '100%',
                'opacity': 1
            }, 500);

            menu_burger_btn.fadeOut(250, function(){
                menu_burger_btn.removeClass('fa-bars');
                menu_burger_btn.addClass('fa-times');
                menu_burger_btn.fadeIn(250);
            });
        }
        else{
            closeMenuBurger();
        }
    });

    menu_burger_box.on('mouseenter', function(){
        on_burger_box = true;
    });

    menu_burger_box.on('mouseleave', function(){
        on_burger_box = false;
    });

    $("body").on('mouseup', function(){
        if(!on_burger_box && menu_burger_box.css('display') == 'block'){
            on_burger_box = true;
            closeMenuBurger();
        }
    });

    function closeMenuBurger(){
        menu_burger_box.animate({
            'width': '50%',
            'opacity': 0
        }, 250, function(){
            menu_burger_box.css('display', 'none');
        });

        menu_burger_btn.fadeOut(125, function(){
            menu_burger_btn.addClass('fa-bars');
            menu_burger_btn.removeClass('fa-times');
            menu_burger_btn.fadeIn(125);
        });
    }

    // VOIR PLUS

    const voir_plus_btn = $('#voir_plus_btn');
    const voir_plus_btn_parent = $('.voir_plus_btn_parent');
    voir_plus_btn.on('click', function(e){
        e.preventDefault();

        const elements = [
            {vehName: 'Audi A1', description: 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,55/km supplémentaire)', price: 1100, agence: 'Agence de Paris', icon: 'vehicule3.png'},
            {vehName: 'Opel Mokka', description: 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,4/km supplémentaire)', price: 1150, agence: 'Agence de Paris', icon: 'vehicule4.png'},
            {vehName: 'Peugeot 208', description: 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaire)', price: 999, agence: 'Agence de Paris', icon: 'vehicule1.png'},
            {vehName: 'Ford Focus', description: 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaire)', price: 999, agence: '', icon: 'vehicule2.png'}
        ];

        for(let nbEl = 0; nbEl < elements.length; nbEl ++) {

            const search_last_item = $('.search_item:last');

            const item = $('<div class="search_item"></div>');
            const carinfo = $('<div class="car_info"></div>');
            const vehName = $('<h3>'+elements[nbEl].vehName+'</h3>');
            const p_desc = $('<p>'+elements[nbEl].description+'</p>');
            const p_infos = $('<p>'+elements[nbEl].price+' € - '+elements[nbEl].agence+'</p>');
            const reserve_btn = $('<button>Réserver et Payer</button>');

            vehName.appendTo(carinfo);
            p_desc.appendTo(carinfo);
            p_infos.appendTo(carinfo);
            reserve_btn.appendTo(carinfo);

            const slider = $('<div class="flexslider search_item_slider"></div>');
            const slider_ul = $('<ul class="slides"></ul>');
            const slider_li = [
                $('<li><img src="asset/img/'+elements[nbEl].icon+'" alt="Vehicule" /></li>'),
                $('<li><img src="asset/img/'+elements[nbEl].icon+'" alt="Vehicule" /></li>')
            ];

            slider_ul.appendTo(slider);

            for (let i = 0; i < slider_li.length; i++) {
                slider_li[i].appendTo(slider_ul);
            }

            slider.flexslider({
                animation: 'slide',
                controlNav: false,
                slideshow: false,
                prevText: '',
                nextText: ''
            });

            slider.appendTo(item);
            carinfo.appendTo(item);

            search_last_item.after(item);
        }

        result_count.text(parseInt(result_count.text()) + elements.length);
        voir_plus_btn_parent.fadeOut(500);
    });

    // DATE PICKER

    $( "#debut_location" ).datepicker({
        showOn: "button",
        buttonImage: "asset/img/calendar-alt-solid.svg",
        buttonImageOnly: true,
        buttonText: " ",
        dateFormat: "dd/mm/yy"
    });


    $( "#fin_location" ).datepicker({
        showOn: "button",
        buttonImage: "asset/img/calendar-alt-solid.svg",
        buttonImageOnly: true,
        buttonText: " ",
        dateFormat: "dd/mm/yy"
    });

    const form = $('.search-form form');
    form.on('submit', function(e){
        e.preventDefault();
    });

});
