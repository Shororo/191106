var title = document.getElementById('title');
console.log(title);

title.classList.add('purple');

var anata = document.getElementById('anata');
var com = document.getElementById('com');
var hand = prompt('じゃんけん？　グー、チョキ、パーどれか打って');

if(hand == "グー"){
	var num = 0;
	anata.textContent="貴方：グー";
}else if(hand == "チョキ"){
	var num = 1;
	anata.textContent="貴方：チョキ";
}else if(hand == "パー"){
	var num = 2;
	anata.textContent="貴方：パー";
}else{
	anata.textContent="貴方：それはない";
}

var anata = Number(num);

var random = Math.floor( Math.random() * 2 );
console.log( random );

if(random == 0){
	var jan = "グー";
	com.textContent="CPU:グー";
}else if(random == 1){
	com.textContent="CPU：チョキ";
	var jan = "チョキ";
}else　if(random == 2){
	com.textContent="CPU:パー";
	var jan = "パー";
}

if(hand == jan){
title.textContent="あいこ";
}else if(hand == "グー" && jan == "チョキ" || hand == "チョキ" && jan == "パー" || hand == "パー" && jan == "グー"){
	title.textContent="貴方の勝ちです";
}else{
	title.textContent="貴方の負けです";
}