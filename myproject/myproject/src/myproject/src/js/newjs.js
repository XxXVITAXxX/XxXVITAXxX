 
  

//  window.onscroll = function() {myFunction()};
//
//  function myFunction() {
//      var testDivFromTop = document.getElementById("myDiv").offsetTop;
//      var pageHeight =  window.innerHeight;
//      if (document.body.scrollTop < testDivFromTop - pageHeight || document.documentElement.scrollTop < testDivFromTop - pageHeight ) {
//              alert("раз раз");
//      }
//  }

//подсчет стоимости
function static(){
let type = $('#12').val();
let design = $('#123').val(); 
let adaptive = $('#1234').val();
let day=3;
let price=8000;

if ( adaptive == 2 ){
    day =day+3;
    price = price + 5000;
}
if  (type ==2 ){
    day=day+1;
     price = price + 3000;
}
if ( design ==2 ){
    day=day+7;
     price = price + 15000;
}
let days="дня";
if  (day>4) {
    days="дней"
}
$('#one').html( day+" "+days);
    $('#two').html( price+" рублей");
}

//анимация цифр в блоке статистике 
 




//отступ навигации

$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top - ($("#nav").outerHeight(true)+ 126); 
                $('html,body').animate({scrollTop: targetOffset}, 50);
                return false;
            }
        }
    });
});

//изменение навбара при скролл

  $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();

               $('.section').each((i, el) => {
//$('nav').outerHeight()
                   if ($(el).offset().top - ($('nav').outerHeight()*6) <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
//    запуск анимации в блоке статистика

//    let options = {threshold:[0.5]};
//let Observer = new IntersectionObserver(options);
//let elements = $(".counter1");
//elements.each((i,el) =>{
//    Observer.Observer(el);
//}); 
//
//var scroll_position = 0;
//var scroll_top = 0;
//
//$(window).on("mousewheel DOMMouseScroll", function(e) {
//
//	var target = $(this).scrollTop();
//
//	if(parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail) >= 0) {
//
//		if((scroll_position - target) > 400) {
//
//			
//start();
//			scroll_position = 0;
//
//		}
//
//	} else {
//
//	
//		scroll_position = target;
//
//	}
//
//});
//
//
//
// настройки
//window.onload = () => { 
//    let options = {
//    root: document.querySelector('.scroll-list'),
//    rootMargin: '5px',
//    threshold: 0.5
//}
//
//// функция обратного вызова
//let callback = function(entries, observer){
//    ...
//}
//
//// наблюдатель
//let observer = new IntersectionObserver(callback, options)
//
//let target = document.querySelector('.counter1')
//observer.observe(target)
//    
//     entries.forEach(entry => {
//            // если элемент является наблюдаемым
//            if (entry.isIntersecting) {
//                const counter = entry.target 
//                start();
//                observer.unobserve(".counter1")
//                }})
//                
//    const arr = document.querySelectorAll('.counter1')
//    arr.forEach(i => {
//        observer.observe(i)
//    })
//    
// 
//}

//    var observer = new IntersectionObserver(function (entries) {
//    if (!entries[0].isIntersecting) {
//        console.log('Elvis has LEFT the building ');
//    }
//    else {
//        console.log('Elvis has ENTERED the building ');
//    }
//});
//
//observer.observe(document.querySelector(".counter1"))
//    
//    
    
    // ждем полной загрузки страницы



//window.onload = () => {
//    const observer = new IntersectionObserver((entries, observer) => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                console.log(entry)
//              start()
//                observer.unobserve(entry.target)
//            }
//        })
//    }, { threshold: 0.5 })
//
//    document.querySelectorAll('.counterq').forEach(counterq => observer.observe(counterq))
//}
//    
//    
//    
    
    
    
    
 function start(){
let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter1");
            count.innerHTML=++upto;
               if(upto===100){   
                    let countsq=setInterval(updatedq);
        let uptoq=0;
        function updatedq(){ 
            var countq= document.getElementById("counter2");
            countq.innerHTML=++uptoq;
               if(uptoq===100){
                    let countsw=setInterval(updatedw);
        let uptow=0;
        function updatedw(){     
            var countw= document.getElementById("counter3");
            countw.innerHTML=++uptow;
                       if(uptow===100){
                    let countse=setInterval(updatede);
        let uptoe=0;
        function updatede(){
            var countede= document.getElementById("counter4");
            countede.innerHTML=++uptoe;
             if(uptoe===100){
                 clearInterval(counts);
             count.innerHTML=("120");
               }
            if(uptoe===200){
                clearInterval(countsq);
                  countq.innerHTML=("4600");
        
            }
            if(uptoe===300){
                 clearInterval(countsw);
                 countw.innerHTML=("340");
            }
               if(uptoe===400){
                 clearInterval(countse);
                   countede.innerHTML=("23");
        }}}}}}}}}





setTimeout(function(){ 
    $("#label").click();
}, 3000);
    
    
    
    
    

//let optionsStat = {
//            threshold: [0.5]
//        };
//        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
//        let elementsStat = $('#counterr');
//
//        elementsStat.each((i, el) => {
//            observerStat.observe(el);
//            start;
//        });
//
////
//        function onEntryStat(entry) {
//            entry.forEach(change => {
//                
//                if (change.isIntersecting) {
//                    if(!$('#counterr').hasClass("done")){
//                        $('#counterr').addClass("done");
//                
//                        $('#counterr').spincrement({
//                         thousandSeparator: "#counterr",
//                         duration: 3000
//                          
//                    });
//                  }
//                }
//            });
//        }
 jQuery(document).ready(function($) {
   
 let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.counterr');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                      if ($(elements).hasClass('active')) {
                               $(elements).removeClass('active');
                 

                    start();
                      }
                }
            });
        }

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
    });

 jQuery(document).ready(function($) {
let options = {
            threshold: [0.5]
        };
        let observers = new IntersectionObserver(onEntrys, options);
        let elementss = $('.reds');

        elementss.each((i, el) => {
            observers.observe(el);
        });

 });
        function onEntrys(entrys) {
            entrys.forEach(changes => {
                if (changes.isIntersecting) {
            changes.target.src =  changes.target.dataset.src;
                 

               
                      }
                }
            )};




