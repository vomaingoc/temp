//menu mobile
window.onload = function() {
  var openMenuTop =  document.getElementById('open_nav');
  if(openMenuTop){
    document.getElementById('open_nav').addEventListener('click', function () {
      document.getElementById("navbar").classList.add('open', 'animated', 'fadeInRight');
      document.getElementById("pagebody").classList.add('active_menu');
      setTimeout(function(){
        document.getElementById("navbar").classList.remove('animated', 'fadeInRight');
       }, 1000);
    })

    document.getElementById('close_nav').addEventListener('click', function () {
      document.getElementById("navbar").classList.add('animated', 'fadeOutRight');
      setTimeout(function(){
        document.getElementById("pagebody").classList.remove('active_menu');
        document.getElementById("navbar").classList.remove('open', 'animated', 'fadeOutRight');
       }, 1000);
    })

    $(".close_nav_body").on('click', function () {
      document.getElementById("navbar").classList.add('animated', 'fadeOutRight');
      setTimeout(function(){
        document.getElementById("pagebody").classList.remove('active_menu');
        document.getElementById("navbar").classList.remove('open', 'animated', 'fadeOutRight');
       }, 1000);
    });
  }
}

//home page
setTimeout(function(){
  document.getElementById("wrapper").classList.add("loaded");
}, 500);


//item home
var time= 1000;
var sp = 200;
setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_1")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= sp

setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_2")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= sp

setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_3")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= sp

setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_4")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= sp

setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_5")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= sp

setTimeout(function(){
  var itemhome = document.querySelector(".section_1 .item_6")
  if(itemhome)
    itemhome.classList.add("loaded");
}, time); time+= (sp*2)

var itemhome = document.querySelectorAll(".section_1 .item")
if(itemhome){
  setTimeout(function(){
      for(var i = 0; i < itemhome.length; i++)
        itemhome[i].className += " animated pulse infinite hinger";
  }, time);
}

//trang san pham
setTimeout(function(){
  var sanphamtxt1 = document.querySelector('.section_sp .txt1');
  if(sanphamtxt1)
    sanphamtxt1.className += ' animated fadeInRight';

  var sanphamtxt2 = document.querySelector('.section_sp .txt2');
  if(sanphamtxt2)
    sanphamtxt2.className += ' animated fadeInRight';

  var hinhsanpham= document.querySelectorAll('.section_sp .item img');
  for(var i = 0; i < hinhsanpham.length; i++)
    if(hinhsanpham)
      hinhsanpham[i].className += ' animated pulse infinite hinger';
}, 500);

//trang chi tiet
setTimeout(function(){
  var hinhchitiet = document.querySelector('.section_ct .img_sp img');
  if(hinhchitiet)
    hinhchitiet.className += ' animated pulse infinite hinger';
}, 1000);
