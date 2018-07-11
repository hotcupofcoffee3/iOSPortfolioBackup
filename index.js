// //*** General innerHTML to be used for each box, added to the main 'body' tag ***//
// var boxHTML = "";
// var boxIndexForOverlay = 0;
//
// function Box(title, backgroundImage, projectHTMLString, startProject){
// 	this.title = title;
// 	this.backgroundImage = backgroundImage;
// 	this.projectHTMLString = projectHTMLString;
// 	this.startProject = startProject;
//
// 	// Adds index property to be used to select from "boxes" array when clicked for Overlay. Increments after each box object is created.
// 	this.boxIndex = boxIndexForOverlay;
// 	boxIndexForOverlay += 1;
//
// 	this.mainPageHTMLString = function(){
// 		var boxHTMLString = "";
//
// 		// Box created as HTML tags
// 		boxHTMLString += "<div class='box' onclick='openOverlayItem(" + this.boxIndex + ");'>";
// 			boxHTMLString += "<div class='box-background-image'>";
// 				boxHTMLString += "<img src='img/" + this.backgroundImage + "' />";
// 			boxHTMLString += "</div>";
// 			boxHTMLString += "<div class='information'>";
// 				boxHTMLString += "<p class='title'>" + this.title + "</p>";
// 			boxHTMLString += "</div>";
// 		boxHTMLString += "</div>";
// 		return boxHTMLString;
// 	}
//
// 	boxHTML += this.mainPageHTMLString();
// };
//
// // Placeholder function
//
// function x(){
// 	console.log("Anus");
// }
// function convertToHTMLStringForTemporaryBoxes(stringToReturn){
// 	return stringToReturn;
// }
// box0 = () => convertToHTMLStringForTemporaryBoxes("<img src='img/me1.jpg'>");
// box1 = () => convertToHTMLStringForTemporaryBoxes("<img src='img/lunaAndMe1.jpg'>");
// box2 = () => convertToHTMLStringForTemporaryBoxes("<img src='img/famPic.jpg'>");
//
// let boxes = [
// 	new Box("Adam Moore", "me1.jpg", box0, x),
// 	new Box("Contact", "lunaAndMe1.jpg", box1, x),
// 	new Box("About me", "famPic.jpg", box2, x),
// 	new Box("Bird Carousel", "americanRobin.jpg", birdCarouselHTML, startBirdCarousel),
// 	new Box("Matching", "beltedKingfisher.jpg", matchingHTML, startMatching),
// 	new Box("Quote Quiz", "question.jpg", quoteQuizHTML, startQuoteQuiz),
// 	new Box("Moving Buttons", "movingButtons.gif", movingButtonsHTML, startMovingButtons),
// 	new Box("Chronological Age Calculator", "chronologicalAge.jpg", chronologicalAgeCalculatorHTML, startChronologicalAgeCalculator)
// ];
//
// document.getElementById("mainSiteContainer").innerHTML = boxHTML;
//
//
