$(document).ready(function() {

    $('.next').click(function() {

        var currentActiveEl = $('img.active , i.active')
        currentActiveEl.removeClass('active')

        if (currentActiveEl.hasClass('last')) {
            $('img.first , i.first').addClass('active')
        } else {
            currentActiveEl.next().addClass('active')
        }
    })

    $('.prev').click(function() {
        var currentActiveEl = $('img.active , i.active')
        currentActiveEl.removeClass('active')

        if (currentActiveEl.hasClass('first')) {
            $('img.last , i.last').addClass('active')
        } else {
            currentActiveEl.prev().addClass('active')
        }


    })





})