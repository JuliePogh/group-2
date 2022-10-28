const path = require("path");

module.exports = {
	mode: "development",//production
	entry: "./scr/js/index.js",
	output: {
        path: path.resolve(__dirname,"build"),
		filename: "all.js"
    },
	watch: true
};