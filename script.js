// creating words to build as strings
let constant = "const";
let portfolio = "Portfolio";
let equalSign = "=";
let openCurlyBracket = "{";
let closeCurlyBracket = "}";
let openBracket = "[";
let closeBracket = "]";
let colon = ":";
let parenthesis = '"';
let comma = ",";
let wordFirstName = "firstName";
let wordLastName = "lastName";
let wordTitle = "titles";
let wordProjects = "projects";
let wordContacts = "contacts";
let wordWorldTraveler = "worldTraveler";
let wordWorkoutPlanner = "workoutPlanner";
let wordWeatherTracker = "weatherTracker";
let wordLinkedin = "linkedin";
let wordEmail = "email";
let wordGitHub = "gitHub";
let firstName = "Muzaffer";
let lastName = "Ozen";
let title = '"Programmer", "Bodybuilder", "Videogamer"';
let worldTravelerLink = "github.com/TeBossIzHere/travel-app";
let workoutPlannerLink = "github.com/TeBossIzHere/WorkoutPlanner";
let weatherTrackerLink = "github.com/TeBossIzHere/WeatherWebsite";
let linkedinLink = "linkedin.com/in/muzaffer-ozen/";
let emailLink = "muzafferozen.jobs@gmail.com";
let gitHubLink = "github.com/TeBossIzHere/";

// grabbing HTML DOM divs
constDiv = document.getElementById("const");
portfolioDiv = document.getElementById("portfolio");
equalSignDiv = document.getElementById("equalSign");
openCurlyBracket1Div = document.getElementById("openCurlyBracket1");
openCurlyBracket2Div = document.getElementById("openCurlyBracket2");
openCurlyBracket3Div = document.getElementById("openCurlyBracket3");
closeCurlyBracket1Div = document.getElementById("closeCurlyBracket1");
closeCurlyBracket2Div = document.getElementById("closeCurlyBracket2");
closeCurlyBracket3Div = document.getElementById("closeCurlyBracket3");
openBracketDiv = document.getElementById("openBracket");
closeBracketDiv = document.getElementById("closeBracket");
colonDiv = document.getElementById("colon");
colonTwoDiv = document.getElementById("colon2");
colonThreeDiv = document.getElementById("colon3");
colonFourDiv = document.getElementById("colon4");
colonFiveDiv = document.getElementById("colon5");
colonSixDiv = document.getElementById("colon6");
colonSevenDiv = document.getElementById("colon7");
colonEightDiv = document.getElementById("colon8");
colonNineDiv = document.getElementById("colon9");
colonTenDiv = document.getElementById("colon10");
colonElevenDiv = document.getElementById("colon11");
parenthesisOneDiv = document.getElementById("parenthesis1");
parenthesisTwoDiv = document.getElementById("parenthesis2");
parenthesisThreeDiv = document.getElementById("parenthesis3");
parenthesisFourDiv = document.getElementById("parenthesis4");
parenthesisFiveDiv = document.getElementById("parenthesis5");
parenthesisSixDiv = document.getElementById("parenthesis6");
parenthesisSevenDiv = document.getElementById("parenthesis7");
parenthesisEightDiv = document.getElementById("parenthesis8");
parenthesisNineDiv = document.getElementById("parenthesis9");
parenthesisTenDiv = document.getElementById("parenthesis10");
parenthesisElevenDiv = document.getElementById("parenthesis11");
parenthesisTwelveDiv = document.getElementById("parenthesis12");
parenthesisThirteenDiv = document.getElementById("parenthesis13");
parenthesisFourteenDiv = document.getElementById("parenthesis14");
parenthesisFifteenDiv = document.getElementById("parenthesis15");
parenthesisSixteenDiv = document.getElementById("parenthesis16");
commaOneDiv = document.getElementById("comma1");
commaTwoDiv = document.getElementById("comma2");
commaThreeDiv = document.getElementById("comma3");
commaFourDiv = document.getElementById("comma4");
commaFiveDiv = document.getElementById("comma5");
commaSixDiv = document.getElementById("comma6");
commaSevenDiv = document.getElementById("comma7");
commaEightDiv = document.getElementById("comma8");
commaNineDiv = document.getElementById("comma9");
wordFirstNameDiv = document.getElementById("wordFirstName");
wordLastNameDiv = document.getElementById("wordLastName");
wordTitleDiv = document.getElementById("wordTitle");
wordProjectsDiv = document.getElementById("wordProjects");
wordWorldTravelerDiv = document.getElementById("wordWorldTraveler");
wordWorkoutPlannerDiv = document.getElementById("wordWorkoutPlanner");
wordWeatherTrackerDiv = document.getElementById("wordWeatherTracker");
wordContactsDiv = document.getElementById("wordContacts");
wordLinkedinDiv = document.getElementById("wordLinkedin");
wordEmailDiv = document.getElementById("wordEmail");
wordGitHubDiv = document.getElementById("wordGitHub");
firstNameDiv = document.getElementById("buildFirstNameDiv");
lastNameDiv = document.getElementById("buildLastNameDiv");
titleDiv = document.getElementById("buildTitleDiv");
worldTravelerLinkDiv = document.getElementById("worldTravelerLink");
workoutPlannerLinkDiv = document.getElementById("workoutPlannerLink");
weatherTrackerLinkDiv = document.getElementById("weatherTrackerLink");
linkedinLinkDiv = document.getElementById("linkedinLink");
emailLinkDiv = document.getElementById("emailLink");
gitHubLinkDiv = document.getElementById("gitHubLink");

// splitting string variables to seperate letters
firstNameSplit = firstName.split("");
lastNameSplit = lastName.split("");
titleSplit = title.split("");

// function to build word letter by letter with an interval
function buildWord(domElement, word) {
  var counter = 0;
  var letterIndex = 0;
  var i = setInterval(function(){
    // grabs inputed domElement and word to start building one letter at a time.
    domElement.innerHTML = domElement.innerHTML + word[letterIndex];
    counter++;
    letterIndex++
    // when counter is equal to the word length, we break out the loop by clearing interval.
    if(counter === word.length) {
      clearInterval(i);
    }
  }, 150); // 150
}

// creates an async function to pause program for a given amount of ms
async function delay(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

// creator function
let startBuilding = async() => {
  // const
  buildWord(constDiv, constant);
  await delay(750);

  // portfolio
  buildWord(portfolioDiv, portfolio);
  await delay(1500);

  // =
  buildWord(equalSignDiv, equalSign);
  await delay(500);

  // { }
  buildWord(openCurlyBracket1Div, openCurlyBracket);
  buildWord(closeCurlyBracket1Div, closeCurlyBracket);
  await delay(500);

  // show first name div
  $("#firstName").show();
  await delay(200);

  // build word firstName
  buildWord(wordFirstNameDiv, wordFirstName);
  await delay(1500);

  // :
  buildWord(colonDiv, colon);
  await delay(500);

  // "
  buildWord(parenthesisOneDiv, parenthesis);
  await delay(200);

  // build first name
  buildWord(firstNameDiv, firstName);
  await delay(1250);

  // "
  buildWord(parenthesisTwoDiv, parenthesis);
  await delay(200);

  // ,
  buildWord(commaOneDiv, comma);
  await delay(500);

  // show last name div
  $("#lastName").show();
  await delay(200);

  // build word lastName
  buildWord(wordLastNameDiv, wordLastName);
  await delay(1500);

  // :
  buildWord(colonTwoDiv, colon);
  await delay(500);

  // "
  buildWord(parenthesisThreeDiv, parenthesis);
  await delay(200);

  // build last name
  buildWord(lastNameDiv, lastName);
  await delay(750);

  // "
  buildWord(parenthesisFourDiv, parenthesis);
  await delay(200);

  // ,
  buildWord(commaTwoDiv, comma);
  await delay(500);

  // show title div
  $("#title").show();
  await delay(200);

  // build word titles
  buildWord(wordTitleDiv, wordTitle);
  await delay(1500);

  // :
  buildWord(colonThreeDiv, colon);
  await delay(500);

  // [
  buildWord(openBracketDiv, openBracket);
  await delay(500);

  // build titles
  buildWord(titleDiv, title);
  await delay(6500)

  // ]
  buildWord(closeBracketDiv, closeBracket);
  await delay(200);

  // ,
  buildWord(commaThreeDiv, comma);
  await delay(500);

  // show projects div
  $("projectsDiv").show();
  await delay(200);

  // build word projects
  buildWord(wordProjectsDiv, wordProjects);
  await delay(1500);

  // :
  buildWord(colonFourDiv, colon);
  await delay(500);

  // { }
  buildWord(openCurlyBracket2Div, openCurlyBracket);
  buildWord(closeCurlyBracket2Div, closeCurlyBracket);
  await delay(500);

  // build word World Traveler, Workout Planner
  buildWord(wordWorldTravelerDiv, wordWorldTraveler);
  buildWord(wordWorkoutPlannerDiv, wordWorkoutPlanner);
  buildWord(wordWeatherTrackerDiv, wordWeatherTracker);
  await delay(2500);

  // :
  buildWord(colonFiveDiv, colon);
  buildWord(colonSixDiv, colon);
  buildWord(colonSevenDiv, colon);
  await delay(500);

  // "
  buildWord(parenthesisFiveDiv, parenthesis);
  buildWord(parenthesisSevenDiv, parenthesis);
  buildWord(parenthesisNineDiv, parenthesis);
  await delay(200);
  
  // build traveler link
  buildWord(worldTravelerLinkDiv, worldTravelerLink);
  buildWord(workoutPlannerLinkDiv, workoutPlannerLink);
  buildWord(weatherTrackerLinkDiv, weatherTrackerLink);
  await delay(6750);

  // "
  buildWord(parenthesisSixDiv, parenthesis);
  buildWord(parenthesisEightDiv, parenthesis);
  buildWord(parenthesisTenDiv, parenthesis);
  await delay(200);

  // ,
  buildWord(commaFourDiv, comma);
  buildWord(commaFiveDiv, comma);
  buildWord(commaSixDiv, comma);
  await delay(200);

  // build word contacts
  buildWord(wordContactsDiv, wordContacts);
  await delay(1500);

  // :
  buildWord(colonEightDiv, colon);
  await delay(200);

  // { }
  buildWord(openCurlyBracket3Div, openCurlyBracket);
  buildWord(closeCurlyBracket3Div, closeCurlyBracket);
  await delay(500);

  // build word Linkedin, Email, Github
  buildWord(wordLinkedinDiv, wordLinkedin);
  buildWord(wordEmailDiv, wordEmail);
  buildWord(wordGitHubDiv, wordGitHub);
  await delay(1400);

  // :
  buildWord(colonNineDiv, colon);
  buildWord(colonTenDiv, colon);
  buildWord(colonElevenDiv, colon);
  await delay(500);

  // "
  buildWord(parenthesisElevenDiv, parenthesis);
  buildWord(parenthesisThirteenDiv, parenthesis);
  buildWord(parenthesisFifteenDiv, parenthesis);
  await delay(200);
  
  // build contact links
  buildWord(linkedinLinkDiv, linkedinLink);
  buildWord(emailLinkDiv, emailLink);
  buildWord(gitHubLinkDiv, gitHubLink);
  await delay(4850);

  // "
  buildWord(parenthesisTwelveDiv, parenthesis);
  buildWord(parenthesisFourteenDiv, parenthesis);
  buildWord(parenthesisSixteenDiv, parenthesis);
  await delay(200);

  // ,
  buildWord(commaSevenDiv, comma);
  buildWord(commaEightDiv, comma);
  buildWord(commaNineDiv, comma);
  await delay(200);
}

startBuilding();
