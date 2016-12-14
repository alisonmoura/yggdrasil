$(document).ready(function () {

    $('[drawer-open]').click(drawerOpen);
    $('[drawer-close]').click(drawerClose);

    function drawerOpen() {
        $('#back-drop').css('display', 'block');
        $('#drawer-menu').animate({
            left: "0%"
        }, 500);
    }

    function drawerClose() {
        $('#back-drop').animate({
            opacity: '0'
        }, 600, function () {
            $(this).css('opacity', '1');
            $(this).css('display', 'none');
        });
        $('#drawer-menu').animate({
            left: "-25%"
        }, 500);
    }

})