  function stat1() {
      let adaptive = "0" ;
      let type = "0" ;
      let design = "0" ; 


if(confirm("Здравствуйте, Давайте сразу узнаем сколько стоит сайт?")){
 obort();
    function obort(){
    adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2 - ПК + Мобильная");
     
        if(adaptive !=1 && adaptive !=2)
       {
              alert("пиши по условию.")
            obort()
        }
        else{
    obort1();}}
        function obort1(){
   type  = prompt("Какой тип сайта вам нужен? 1 - Одностраничный. 2 - больше 1 страницы");
          
        if(type !=1 && type !=2){
              alert("пиши по условию.")
            obort1()
        }    
            else{
    obort2()}}
            function obort2(){
      design  = prompt("Какой дизайн сайта вам нужен? 1 - обычный. 2 - личный бренд и функиональный");
    

        if(design !=1 && design !=2){
              alert("пиши по условию.")
            obort2();
        }}let day=3;
let price=8000;
if (adaptive ==2 ){
    day =day+3;
    price = price + 5000;
}
if (type ==2 ){
    day=day+1;
     price = price + 3000;
}
if (design ==2 ){
    day=day+7;
     price = price + 15000;
}
let days="дня";
if (day>4) {
    days="дней"
}

alert("Сроки: "+ day + " "+ days + ". Стоимость: "+ price +" рублей.");}
    

else {
    alert("<3")
    
}
                  }