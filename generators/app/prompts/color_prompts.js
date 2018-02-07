const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the color input name?",
		default: "color"
	},
	{
		type: "input",
		name: "value",
		message: "What is the starting color value? (Must be hexadecimal)",
		default: "#000000"
	},
]

module.exports = prompts