function avg(arr){
	sum = 0;
	for (i = 0; i < arr.length ; ++i){
		sum += arr[i];
	}
	res = sum/arr.length;
	return Math.round(res)
}


var myList = [212, 43, 56, 34, 2];

console.log(avg(myList));