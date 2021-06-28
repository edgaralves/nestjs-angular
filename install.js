var fs = require("fs");
var path = require("path");
var cp = require("child_process");
var os = require("os");

var ignoreFolders = ["node_modules", "dist", ".git"];

fs.readdirSync(__dirname).forEach(function (resource) {
  if (fs.existsSync(resource) && fs.lstatSync(resource).isDirectory()) {
    install(resource, path.join(__dirname, resource));
  }
});

function install(resourceName, resourcePath) {
  if (ignoreFolders.indexOf(resourceName) < 0) {
    if (
      fs.existsSync(resourcePath) &&
      fs.lstatSync(resourcePath).isDirectory()
    ) {
      fs.readdirSync(resourcePath).forEach(function (subResource) {
        install(subResource, path.join(resourcePath, subResource));
      });
    }

    if (resourceName === "package.json") {
      console.log("Installing packages of " + resourcePath);
      var npmCmd = os.platform().startsWith("win") ? "npm.cmd" : "npm";

      cp.spawn(npmCmd, ["i"], {
        env: process.env,
        cwd: path.dirname(resourcePath),
        stdio: "inherit",
      });
    }
  }
}
