function sayHello(name){
	console.log('Hello ' + name);
}

function echo(name, n){
	for(var i=0; i<n; ++i){
		console.log(name);
	}
}

// sayHello('Shanto')

echo('Echo!!!', 10);
echo('Tater tots', 3)