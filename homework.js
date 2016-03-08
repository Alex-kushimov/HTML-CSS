var a = 10;
var	b = 30;
var c = 20;
if (a>b && a>c) {
 a*=10;
 if(b>c){
  b*=5
 } else {
  c*=5
 }
} else if (b>a && b>c) {
 b*=10;
 if(a>c){
  a*=5;
 } else {
  c*=5;
 }
} else if (c>a && c>b) {
 c*=10;
 if (a>b) {
  a*=5;
 } else {
  b*=5;
 }
};
console.log(a,b,c);