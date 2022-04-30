$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login to Facebook application",
  "description": "",
  "id": "login-feature;login-to-facebook-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": ": user is on Facebook application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": ": user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": ": user closes the browser",
  "keyword": "But "
});
formatter.match({
  "location": "Logic.user_is_on_Facebook_application()"
});
formatter.result({
  "duration": 3555530700,
  "status": "passed"
});
formatter.match({
  "location": "Logic.user_enters_username()"
});
formatter.result({
  "duration": 128187500,
  "status": "passed"
});
formatter.match({
  "location": "Logic.user_enters_password()"
});
formatter.result({
  "duration": 141620800,
  "status": "passed"
});
formatter.match({
  "location": "Logic.user_click_on_login_button()"
});
formatter.result({
  "duration": 64694600,
  "status": "passed"
});
formatter.match({
  "location": "Logic.user_closes_the_browser()"
});
formatter.result({
  "duration": 5102684700,
  "status": "passed"
});
});