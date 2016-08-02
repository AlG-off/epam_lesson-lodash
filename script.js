var cities = [
	{id: 1,
	city: "Samara",
	street: "Michurina",
	countOfHouses: 554
	},
	{id: 2,
	city: "Moscow",
	street: "Lenina",
	countOfHouses: 854
	},
	{id: 3,
	city: "Samara",
	street: "Osipenko",
	countOfHouses: 54
	},
	{id: 4,
	city: "Kaluga",
	street: "Gorkogo",
	countOfHouses: 78
	},
	{id: 5,
	city: "Moscow",
	street: "Mira",
	countOfHouses: 785
	}
];

(function (arrCities, tmpl) {
	"use strict"
	var table = document.getElementById("table-cities"),
		btnAdd = document.querySelector(".form-input__btn-add"),
		btnSrchMaxHome = document.querySelector("#srch-max"),
		btnSrchMinHome = document.querySelector("#srch-min");

	btnAdd.onclick = addRow;
	btnSrchMaxHome.onclick =function() { 
		var num = _.maxBy(arrCities, "countOfHouses");
		alert(num.countOfHouses);
	};
	btnSrchMinHome.onclick =function() { 
		var num = _.minBy(arrCities, "countOfHouses");
		alert(num.countOfHouses);
	};

	table.onclick = function(e) {
		if (e.target.tagName !== "BUTTON") return;
		delRow(e.target);
	};
	

	function createTable() {
		var compiled = _.template(tmpl);
		table.innerHTML = compiled({city:arrCities});
	};

	function delRow (target) {
		var tr = target.closest("tr");
		_.pullAllBy (arrCities, [{id : +tr.dataset.id}], "id");
		createTable();			
	};
	
	function addRow() {
		var form = document.getElementById("form-input"),
			id = arrCities.length ? arrCities[arrCities.length-1].id : 0;
		
		arrCities.push({
			id: ++id,
			city: form.querySelector('#city').value,
			street: form.querySelector('#street').value,
			countOfHouses: form.querySelector('#count-house').value
		});
			
		createTable();
	};

	createTable();

})(cities, document.getElementById("table-tmpl").innerHTML);
