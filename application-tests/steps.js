const { paramCase } = require("change-case");

const { I } = inject();

let scenario;

Before(({ title }) => {
  scenario = title;
});

Given('I am on the homepage', () => {
  I.amOnPage('http://localhost:4200');
});

Then('I see the app running', () => {
  I.see('example app is running!');
});

Then('I see no visual difference', (...args) => {
  const fileName = `${paramCase(scenario)}.png`;

  I.saveScreenshot(fileName);
  I.seeVisualDiff(fileName, {
    tolerance: 2,
    prepareBaseImage: Boolean(process.env.NEW_REFERENCES)
  });
});
