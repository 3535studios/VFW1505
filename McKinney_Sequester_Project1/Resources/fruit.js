//array of Fruit of the Spirit

var fruitOfSpirit = ["Love","Joy","Peace", "Patience", "Kindness", "Goodness", "Gentleness", "Faithfulness", "Self-Control"];

//create previousButton function
var previousButton = function() {
	
	
	if (i < fruitOfSpirit.length) {
		i --;
		j--;
		textLabel.text = j + ". "+ fruitOfSpirit[i];	
	} 
	
	if (i < 0) {
		i = fruitOfSpirit.length - 1;
	}
};

//create nextButton function 
var nextButton = function() {
	//textLabel.text = fruitOfSpirit;
	if (i < fruitOfSpirit.length - 1) {
		i++;
		j++;
		textLabel.text = j + ". "+ fruitOfSpirit[i];
		
	} else if (i === fruitOfSpirit.length - 1) {
		i = 0;
		j = 1;
		textLabel.text = j + ". " + fruitOfSpirit[i];
	}
};

//add event listener
buttonView.addEventListener("click", previousButton);

//add event listener
buttonView2.addEventListener("click", nextButton);
