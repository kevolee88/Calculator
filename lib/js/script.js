jQuery(document).ready(function($){
	var displayContainer = $('h1#displayArea');
	var initialDisplay = 0;
	var numbers = document.querySelectorAll('button.value');
	var equations = document.querySelectorAll('button.equation');
	var clear = document.getElementById('displayArea');
	var displayArray = [];
	var equation = [];


	
	// function display() {
	// 	displayArray.push(initialDisplay);
	// 	displayContainer.append(displayArray);
	// };
	// display();

	function numDisplay() {
		var input = document.querySelector('#displayArea');
		var inputVal = input.innerHTML;
		
		for (var i = 0; i <= numbers.length; i++) {
			$(numbers[i]).click(function(e) {
				var btnVal = this.innerHTML;

				displayArray.push(btnVal);
				console.log(displayArray);
				displayContainer.append(btnVal);

			});
		}
	};
	numDisplay();

	function equationSelector() {
		for (var i = 0; i <= equations.length; i++) {
			$(equations[i]).click(function(e) {
				var equation = this.innerHTML;

				clear.innerHTML = "";

				if (equation === "x") {
					equation = "*";
				}else if (equation === "÷") {
					equation = "/";
				}

				if (displayArray[displayArray.length-1] === '/' || displayArray[displayArray.length-1] === '*' || displayArray[displayArray.length-1] === '-' || displayArray[displayArray.length-1] === '+') {
					displayArray.pop();
					displayArray.push(equation);
					console.log(displayArray);
				} else {
					displayArray.push(equation);
					console.log(displayArray);
				}
			});
		}
	};
	equationSelector();

	function joinArray() {
		var equal = document.querySelector('button.equal');
		$(equal).click(function(e){
			var join = displayArray.join("");
			var answer = eval(join);

			clear.innerHTML = "";
			displayArray = [];
			displayArray.push(answer);
			
			displayContainer.append(answer);
			console.log(answer);
		});
	};
	joinArray();





});