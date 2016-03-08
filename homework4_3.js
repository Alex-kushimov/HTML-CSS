function randomInteger(min, max) {
var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);
return rand;
}

var arr = [];
	for (i = 0; i<10; i++){
	arr[i]=[];
		for(j = 0; j<10; j++){
		arr[i].push (randomInteger (1,100));
		};
	};
	console.table(arr);
var rr = [];

var bottomArr = arr[9];
var topArr = arr[0];
var toparr2 = topArr.reverse()
var leftArr = [];
for (var i = 0; i <arr.length-1; i++) {
	for (var j = 0; j < arr[i].length-9; j++) {

leftArr.push(arr[i][j]);
		};
	};
var rightArr =[];
for (var i = arr.length - 1; i > 0; i--) {
 rightArr.push( arr[i][9] );
}
rr = rr.concat(leftArr,bottomArr,rightArr,topArr)
console.log(rr)