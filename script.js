var like = document.getElementsByClassName('like');
var a = 0;
function changetext () {
	if (a % 2 === 0) {
		like[0].style.background = "#FD4B38";
		like[0].innerHTML = "Unlike";
	} else {
		like[0].innerHTML = "Like";
		like[0].style.background = "#76C4E7";
	}
	a++;
}
like[0].addEventListener("click", changetext); 