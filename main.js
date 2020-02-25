function showMenu () {
    if(screen.width < 700){
        $('.nav').hide();
        $('.menu-icon').show();
    }
    $( window ).on( "orientationchange", function( event ) {
        if(screen.width > 700){
            $('.nav').show();
            $('.menu-icon').hide();
        }else if(screen.width < 700){
            $('.nav').hide();
            $('.menu-icon').show();
        }
      });

    if(screen.width > 700){
        $('.nav').show();
    }
    $('.menu-icon').click(function(){
        $('.nav').show();
        $('.menu-icon').hide();
        $('nav').focus();
    });
    $('nav').blur(function(){
        if(screen.width < 700){
        hideMenu();
        $('.menu-icon').show();
        }
    });
}
function hideMenuIcon () {
    if(screen.width > 700){
        $('.menu-icon').hide();
    }
}
function hideMenu () {
     $('.nav').hide();
}
function handleAbout () {
    $('.nav-about').click(showAbout);
}
function showAbout () {

    $('h2').text('About');
    $('.about').show();
    $('.projects').hide();
    $('.contacts').hide();
}
function handleProjects() {
    $('.nav-projects').click(function (){
        $('h2').text('Projects');
        $('.projects').show();
        $('.contacts').hide();
        $('.about').hide();
    });
}

function handleContacts() {
    $('.nav-contacts').click(function (){
        $('h2').text('Contacts');
        $('.contacts').show();
        $('.about').hide();
        $('.projects').hide();
    });
}


function handlePortfolio () {
    showAbout();
    hideMenuIcon();
    showMenu();
    handleAbout();
    handleProjects();
    handleContacts();
}

$(handlePortfolio());