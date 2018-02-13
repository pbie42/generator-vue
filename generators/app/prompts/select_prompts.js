const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the select input name?",
		default: "select"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the select input required?",
		default: true
	},
	{
		type: "confirm",
		name: "multiple",
		message: "Do you want to allow multiple selections?",
		default: false
	},
	{
		type: "confirm",
		name: "visible",
		message: "Do you want to set a visible options size?",
		default: false
	},
	{
		type: 'input',
		name: 'size',
		message: 'How many options do you wish to show before a user must scroll?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.visible == true }
	},
	{
		type: "confirm",
		name: "add",
		message: "Do you want to input the options?",
		default: false
	},
]

module.exports = prompts