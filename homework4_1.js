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

var topArr = arr[0];


var rightArr = [];
for (var i = 1; i <arr.length-1; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		if(j == arr[i].length - 1){
rightArr.push(arr[i][j]);
		};
	};
};

var diagonal = [];
for (var i = arr.length - 1; i >= 0; i--) {
	for (var j = arr[i].length - 1; j >= 0; j--) {
		if( i == j){
diagonal.push(arr[i][j]);
		};
	};
};
rr = rr.concat(topArr,rightArr,diagonal);
console.log(rr)