$(document).ready(function(){
       $(".owl-carousel").owlCarousel({
           autoplay: true,
           autoplayhoverpause:true,
           items:4,
           nav:true,
           loop:true,
           responsive:{
               0 : {
                   items: 1,
                   dots: false,

               },
               300 : {
                   items: 2,
                   dots: false,
               },
               670 : {
                   items: 3,
                   dots: false,
               },
               960 : {
                   items: 4,
                   dots: true
               },
               1200 : {
                   items: 5,
                   dots:true
               }
           }
       });
     })
     