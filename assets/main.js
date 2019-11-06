var title = document.getElementById('title');
console.log(title);

title.classList.add('purple');

var num  = prompt('あなたの年齢は？');
var num = Number(num);
var future = num + 10;
title.textContent="shoyoさん10年後は" + future + "歳です！";

if(future >= 20){
	alert("あなたは成人ですね");
}else{
	var age = 20 - Number(num);
	alert(`成人まであと ${age} 歳です`);
}