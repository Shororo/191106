var title = document.getElementById('title');
console.log(title);

title.classList.add('purple');

var anata = document.getElementById('anata');
var com = document.getElementById('com');
var hand = prompt('じゃんけん？　「グー」、「チョキ」、「パー」どれか打って');

if(hand == "グー"){
	var num = 0;
	anata.textContent="理沙：グー";
}else if(hand == "チョキ"){
	var num = 1;
	anata.textContent="理沙：チョキ";
}else if(hand == "パー"){
	var num = 2;
	anata.textContent="理沙：パー";
}else{
	anata.textContent="理沙：そんな手はないよ";
}

var anata = Number(num);

var random = Math.floor( Math.random() * 2 );
console.log( random );

if(random == 0){
	var jan = "グー";
	com.textContent="翔陽:グー";
}else if(random == 1){
	com.textContent="翔陽：チョキ";
	var jan = "チョキ";
}else　if(random == 2){
	com.textContent="翔陽:パー";
	var jan = "パー";
}

if(hand == jan){
title.textContent="あいこだね。。。";
}else if(hand == "グー" && jan == "チョキ" || hand == "チョキ" && jan == "パー" || hand == "パー" && jan == "グー"){
	title.textContent="理沙の勝ち！";
}else{
	title.textContent="理沙の負け！";
}