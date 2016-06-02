var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: true,
    rules: {
        semi: 2
    }
});

try {
  var config = cli.getConfigForFile("./index.js");
  console.log('hooray!');
} catch (e) {
  console.log('unable to get config');
  console.log(e.stack);
}
