$(function(){


   let searchIcon = $('.searchIcon')
   let croseIcon = $('.croseIcon')
   let seachArea = $('.searchArea')







    let menu = $('nav .menubar')
 
    let sidebar = $('.sidebar')
 
 
    menu.click(function(){
     sidebar.toggleClass("active");
  })




  
  searchIcon.click(function(){
    seachArea .slideDown(300)
  })

  croseIcon.click(function(){
    seachArea .slideUp(300)
  })





  let nav = $('nav')


  $(window).scroll(function(){
   let scrTop = $(window).scrollTop();
   if(scrTop > 400) {
    nav.addClass('navfixed')
   } else{
    nav.removeClass('navfixed')
   }

  });








})
 
 
 
 