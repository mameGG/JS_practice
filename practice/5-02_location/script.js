'use strict';

const lang = document.querySelector('html').lang;

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}

if (lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
} else if (lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
} else if (lang === 'zh') {
  document.querySelector('option[value="index-zh.html"]').selected = true;
} 
// querySelector('option')とかで複数要素を取得した際は、最初の要素のみ取得する。
// ＝つまり「複数同時に取得する」メソッドではない。

// ===の左側が全て同一（ここだとlang）であればswitch文で以下のように書き換えられる。
// switch文で書けるのであればif文でも書けるので、どちらが適切か選んで使う

// switch(lang) {
//   case 'ja' :
//     document.querySelector('option[value="index.html"]').selected = true;
//     break;
//   case 'en' :
//     document.querySelector('option[value="index-en.html"]').selected = true;
//     break;
//   case 'zh' :
//     document.querySelector('option[value="index-zh.html"]').selected = true;
//     break;
// }



