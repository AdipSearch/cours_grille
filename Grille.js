window.onload = nombreCarres();

function nombreCarres () {
	let monNombre = prompt('Veuillez saisir un nombre de 1 à 70')
	localStorage.setItem ('saisie', monNombre);



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var i = monNombre;
var a = 300/i;
var b = -a;
var c=-a;
var x = 0;


while (x<=i) {
while (b<300-a) {
	
	
	b = b+a;
ctx.strokeRect(b, c, a, a);
    
}

b=-a;
x=x+1
c=c+a


}
}

/*while (b<300-a) {
	
	var b = b+a;
	var c = c+a;
	
    ctx.strokeRect(b, c, a, a);
    
}
*/




