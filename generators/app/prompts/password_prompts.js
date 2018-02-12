const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the password input name?",
		default: "password"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the password input required?",
		default: true
	},
	{
		type: "confirm",
		name: "auto",
		message: "Allow autocomplete? (For password managers and browsers)",
		default: true
	},
	{
		type: "list",
		name: "autocomplete",
		message: "Which type of autocomplete?",
		choices: [ "on", "off", "current-password", "new-password" ],
		when: function (answers) { return answers.auto == true }
	},
	{
		type: "confirm",
		name: "placeholder",
		message: "Do you want a placeholder?",
		default: false
	},
	{
		type: "input",
		name: "placeholder",
		message: "What is the placeholder?",
		default: "Enter Password",
		when: function (answers) { return answers.placeholder == true }
	},
	{
		type: "confirm",
		name: "inputmode",
		message: "Do you want the input numeric for PINs only?",
		default: false
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Do you want a minimum character length?",
		default: false
	},
	{
		type: 'input',
		name: 'min',
		message: 'What is the minimum char length?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Do you want a maximum character length?",
		default: false
	},
	{
		type: 'input',
		name: 'max',
		message: 'What is the maximum char length?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.maximum == true }
	},
]

module.exports = prompts