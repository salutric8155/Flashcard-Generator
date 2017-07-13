module.exports = clozeCard;	

/*var clozeCard = {
	fullText: "Arteries transport oxygenated blood away from the heart",
	cloze: "Arteries",
	partialText: "transport oxygenated blood away from the heart",
};*/

function clozeCard(fullText, cloze, partialText){
	this.fullText = fullText;
	this. cloze = cloze;
	this. partialText = partialText;
}

clozeCard.prototype.printInfo = function() {
	console.log("fullText: " + this.fullText + "\ncloze: " + this.cloze +
  "\npartialText: " + this.partialText);
};

var card1 = new clozeCard("Arteries transport oxygenated blood away from the heart", "Arteries", "transport oxygenated blood away from the heart");

card1.printInfo();

