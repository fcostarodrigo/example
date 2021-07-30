const { I } = inject();

Given('I am on the homepage', () => {
  I.amOnPage('http://localhost:4200');
});

Then('I see the app running', () => {
  I.see('example app is running!');
});
