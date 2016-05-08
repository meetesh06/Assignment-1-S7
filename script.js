var like = document.getElementsByClassName('like');
var a = 0;
function changetext () {
	if (a % 2 == 0) {
		console.log("JS was at i % 2 == 0, true");
		like[0].style.background = "#FD4B38";
		like[0].style.color = "#ffffff";
		like[0].innerHTML = "Unlike";
	} else {
		console.log("JS was at i % 2 == 0, false");
		like[0].innerHTML = "Like";
		like[0].style.background = "#76C4E7";
		like[0].style.color = "#ffffff";
	}
	a++;
	
}
like[0].addEventListener("click", changetext); 
