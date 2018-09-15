$(document).ready(function() {
  var navbarmobilevisible = false;

  var navbarSwitcher = $('<div />', {class: 'submenu-toggle'})
  navbarSwitcher.click = navbarSwitcher.bind(document)
  $('.has-sub').append(navbarSwitcher.clone())
  $('#sidebar-wrapper').theiaStickySidebar();
  $('.mobile-menu-toggle').on('click', togleMNav)
  $(document).on('click', function (e) {
    var target = $( e.target )
    console.log(e)
    if(navbarmobilevisible && 
      !target.is( ".mobile-menu-toggle" ) &&
      !target.parents().andSelf().is('.mobile-menu') ) togleMNav()
    if(target.is('.submenu-toggle')) {
      target.siblings('.m-sub').toggle()
      target.parent().toggleClass('show')
    }
    if(target.is('.show-search')){
      $('body').toggleClass('search-active')
      $('#nav-search').toggle()
    }
  })
  $('#main-menu-nav')
  $( "#main-menu-nav" ).clone().appendTo( ".mobile-menu" );
  $('#main-menu > *').addClass('show-menu')

  
  function togleMNav (e){
    navbarmobilevisible = !navbarmobilevisible;
    $('body').toggleClass('nav-active')
    $('.overlay').toggle()
  }
});