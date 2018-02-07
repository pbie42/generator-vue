const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the checkbox name?",
		default: "checkbox"
	},
	{
		type: "input",
		name: "value",
		message: "What is the checkbox value?",
		default: "null"
	},
	{
		type: "confirm",
		name: "checked",
		message: "Is the checkbox checked?",
		default: false
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the checkbox required?",
		default: true
	}
]

module.exports = prompts