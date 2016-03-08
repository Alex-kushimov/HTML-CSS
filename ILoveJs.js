function reverseStr (str) {
	var result = "", i;
	for (i = str.length - 1; i >= 0; i--) {
	result += str.charAt(i)
	};
  return result;

}
alert(reverseStr("I love javascript"));