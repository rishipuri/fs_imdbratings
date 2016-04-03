var target = document.getElementById('content-about').getElementsByClassName('col-xs-12 col-sm-9');

var showTitle = target[0].children[0].children[0].innerText.split("(");
//var showYear = target[0].children[0].children[1].childNodes[0].data.trim();

console.log("http://www.omdbapi.com/?t=" + showTitle[0].trim() + "&y=&plot=short&r=json");
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.omdbapi.com/?t=" + showTitle[0].trim() + "&y=&plot=short&r=json", true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		var resp = JSON.parse(xhr.responseText);
		
		var ratings = resp.imdbRating, 
		      votes = resp.imdbVotes,
		         id = resp.imdbID;

		var div = document.createElement("div");
		div.className = "row";

		var div1 = document.createElement("div");
		div1.className = "infos col-xs-12 col-sm-12";

		div.appendChild(div1);

		var div2 = document.createElement("div");
		div2.id = "ratings";

		div1.appendChild(div2);

		var div3 = document.createElement("div");
		div3.className = "show-label";
		div3.innerHTML = " IMDB-RATINGS: ";

		div2.appendChild(div3);

		var div4 = document.createElement("div");
		div4.className = "ratings-text";

		div4.innerHTML = "&nbsp" + ratings + "/10 from " + votes + " votes";
		div2.appendChild(div4);

		target[0].appendChild(div);
	}
}
xhr.send();

