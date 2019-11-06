var title = document.getElementById('title');
console.log(title);

title.classList.add('purple');

var num  = prompt('あなたの年齢は？');
var num = Number(num);
var future = num + 10;
title.textContent="shoyoさん10年後は" + future + "歳です！";