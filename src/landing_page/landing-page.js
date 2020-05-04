$(document).ready(function () {
    $('.header-content__button-light').on('click', function () {
        $('.landing-page__search-form').css('display', 'none');
        $('.landing-page__reg-form').css('display', 'none');
        $('.landing-page__enter-form').css('display', 'block');
    });

    
    $('.reg-form-button-light').on('click', function () {
        $('.landing-page__search-form').css('display', 'none');
        $('.landing-page__reg-form').css('display', 'none');
        $('.landing-page__enter-form').css('display', 'block');
    });

    $('.header-content__button-filled').on('click', function () {
        $('.landing-page__search-form').css('display', 'none');
        $('.landing-page__reg-form').css('display', 'block');
        $('.landing-page__enter-form').css('display', 'none');
    });

    
    $('.enter-form-button-light').on('click', function () {
        $('.landing-page__search-form').css('display', 'none');
        $('.landing-page__reg-form').css('display', 'block');
        $('.landing-page__enter-form').css('display', 'none');
    });

    $('.enter-form-button-light').on('click', function () {
        $('.landing-page__search-form').css('display', 'none');
        $('.landing-page__reg-form').css('display', 'block');
        $('.landing-page__enter-form').css('display', 'none');
    });

    $('.enter-form-button-filled').on('click', function () {
        $('.landing-page__search-form').css('display', 'block');
        $('.landing-page__reg-form').css('display', 'none');
        $('.landing-page__enter-form').css('display', 'none');

        $('.landing__header-no-reg-content').css('display', 'flex');
        $('.landing__header-reg-content').css('display', 'none');
    });

    $('.reg-form-button-filled').on('click', function () {
        $('.landing-page__search-form').css('display', 'block');
        $('.landing-page__reg-form').css('display', 'none');
        $('.landing-page__enter-form').css('display', 'none');

        $('.landing__header-no-reg-content').css('display', 'flex');
        $('.landing__header-reg-content').css('display', 'none');
    });
});