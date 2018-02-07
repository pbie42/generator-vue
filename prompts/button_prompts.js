const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the button name?",
		default: "button"
	},
	{
		type: "list",
		name: "type",
		message: "What is the button type?",
		choices: [ "button", "reset", "submit" ],
		default: "button"
	},
	{
		type: "input",
		name: "value",
		message: "What is the button value?",
		default: "null"
	}
]

module.exports = prompts