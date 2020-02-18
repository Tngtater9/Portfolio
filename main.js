function handleAbout () {
    $('.nav-about').click(function (){
        $('h2').text('About');
        $('.about').show();
        $('.projects').hide();
        $('.contacts').hide();
    });
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
    $('.nav-about').click(function (){
        $('h2').text('Contacts');
        $('.contacts').show();
        $('.about').hide();
        $('.projects').hide();
    });
}


function handlePortfolio () {
    handleAbout();
    handleProjects();
    handleContacts();
}

$(handlePortfolio());