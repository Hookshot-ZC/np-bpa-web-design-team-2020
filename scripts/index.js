var navigate = function(url)
{
	location.href = url;
}

var lightUpButton = function(btnID)
{
	document.getElementById(btnID).style.background = "rgb(163, 163, 215)";
}

var resetButton = function(btnID)
{
	document.getElementById(btnID).style.background = "rgb(78, 77, 199)";
}
