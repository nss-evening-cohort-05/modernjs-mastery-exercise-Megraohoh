$( document ).ready(function() { 

	$(".btn").click((event) => {

		let imgcontainer = $("#imgcontainer").detach();
///////////////////////CONTAINER&STRING&DOM
		const outputContainer = $("#output");

		const writeToDOM = function (heroArray) {
		  	let domString = "";
		  	for (let i = 0; i < characters.length; i++) {
			    domString += `<div class="hero row">`;
			    domString += `<div class="col-sm-4">`;
			    domString += `<p>${characters[i].name}</p>`;
			    domString += `<img src="${characters[i].image}">`;
			    domString += `<p>${characters[i].description}</p>`;
			    domString += `</div>`;
			    domString += `<div class="col-sm-8 overflow-row">`;
		    domString += `</div>`;
		    domString += `</div>`;
  		  }
  		    outputContainer.append(domString);
		};

///////////////////////PROMISES

		const loadCharacters = () => {
			return new Promise((resolve, reject) => {
				$.ajax("./db/characters.json")
				.done((data) => resolve(data))
				.fail((error) => reject(error));
			});//end of promise
		}; //end of loadCharacters

		const loadGenders = () => {
			return new Promise((resolve, reject) => {
				$.ajax("./db/genders.json")
				.done((data1) => resolve(data1))
				.fail((error1) => reject(error1));
			}); //end of promise
		};//end of loadGenders

		const loadTeams = () => {
			return new Promise((resolve, reject) => {
				$.ajax("./db/teams.json")
				.done((data2) => resolve(data2))
				.fail((error2) => reject(error2));
			});//end of promise
		};//end of loadTeams
		



	});//end of btn click event


console.log();


});//end of document