$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Whitebackground.feature");
formatter.feature({
  "line": 3,
  "name": "skyblue Background Change",
  "description": "",
  "id": "skyblue-background-change",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "duration": 2079986800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to change the backgroundcolour",
  "description": "",
  "id": "skyblue-background-change;user-should-be-able-to-change-the-backgroundcolour",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Set White Backgroundbutton\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"background-color: white;\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "Steps.button_exists(String)"
});
formatter.result({
  "duration": 179018300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Backgroundbutton",
      "offset": 16
    }
  ],
  "location": "Steps.i_click_on_the(String)"
});
formatter.result({
  "duration": 62930200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "background-color: white;",
      "offset": 37
    }
  ],
  "location": "Steps.the_background_color_will_change_to(String)"
});
formatter.result({
  "duration": 5059200000,
  "status": "passed"
});
formatter.uri("features/skybluecolour.feature");
formatter.feature({
  "line": 3,
  "name": "skyblue Background Change",
  "description": "",
  "id": "skyblue-background-change",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "duration": 1676191400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to change the backgroundcolour",
  "description": "",
  "id": "skyblue-background-change;user-should-be-able-to-change-the-backgroundcolour",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Set SkyBlue Backgroundbutton\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"background-color: skyblue;\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "Steps.button_exists(String)"
});
formatter.result({
  "duration": 67828100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Backgroundbutton",
      "offset": 16
    }
  ],
  "location": "Steps.i_click_on_the(String)"
});
formatter.result({
  "duration": 67085700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "background-color: skyblue;",
      "offset": 37
    }
  ],
  "location": "Steps.the_background_color_will_change_to(String)"
});
formatter.result({
  "duration": 5056436800,
  "status": "passed"
});
});