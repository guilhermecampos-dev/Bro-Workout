const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const elementFiles = [
  'cypress/e2e/elements/activeWorkout_elements.js',
  'cypress/e2e/elements/exercises_elements.js',
  'cypress/e2e/elements/exercisesImage_elements.js',
  'cypress/e2e/elements/home_elements.js',
  'cypress/e2e/elements/registerExercise_elements.js',
  'cypress/e2e/elements/userCreatModal_elements.js',
  'cypress/e2e/elements/userView_elements.js'
];

test('element modules should use a consistent exported object pattern', () => {
  elementFiles.forEach((relativePath) => {
    const filePath = path.join(process.cwd(), relativePath);
    const contents = fs.readFileSync(filePath, 'utf8');

    assert.match(contents, /export const [A-Za-z]+Elements\s*=\s*\{/m, `${relativePath} should export a named object literal`);
    assert.doesNotMatch(contents, /class\s+\w+/m, `${relativePath} should not define a class`);
    assert.doesNotMatch(contents, /export default/m, `${relativePath} should not use a default export`);
  });
});
