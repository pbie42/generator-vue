const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the radio input name?",
		default: "radio"
	},
	{
		type: "input",
		name: "value",
		message: "What is the radio input value?",
		default: "null"
	},
	{
		type: "confirm",
		name: "checked",
		message: "Is this radio input checked?",
		default: false
	}
]

module.exports = prompts