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
		name: "autocomplete",
		message: "Allow autocomplete (for password managers and browsers)?",
		default: true
	},
	{
		type: "choice",
		name: "autoType",
		message: "Which type of autocomplete?",
		choices: [ "on", "off", "current-password", "new-password" ],
		when: function (answers) { return answers.minimum == true }
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
		name: 'minlength',
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
		name: 'maxlength',
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