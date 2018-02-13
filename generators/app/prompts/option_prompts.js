const prompts = [
	{
		type: "input",
		name: "value",
		message: "What is the option name/value?",
		default: "option"
	},
	{
		type: "confirm",
		name: "selected",
		message: "Is this the default selected option?",
		default: false
	},
	{
		type: "confirm",
		name: "another",
		message: "Do you want to add another option?",
		default: true
	}
]

module.exports = prompts