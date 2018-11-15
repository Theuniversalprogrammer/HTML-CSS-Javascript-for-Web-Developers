// Color Changer
function colorChanger(){
	var el = document.getElementById("hedcolor");
		el.innerHTML = " Inbox (254)";
		el.style.color = "white";

		}

// Header Color Changer
function headerColor() {
	var el = document.getElementById('fixHeader');
	el.setAttribute('style', 'position: fixed');
	el.style.borderBottom= '10px solid white';
}

// Header Color Changer
function dynamicLogo() {
	var el = document.getElementById('logo1');
	el.src = "../images/mailFlat.png";
}
