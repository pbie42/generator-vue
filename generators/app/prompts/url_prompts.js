const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the url input name?",
		default: "url"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the url input required?",
		default: true
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default value?",
		default: false
	},
	{
		type: "input",
		name: "value",
		message: "What is the default value?",
		default: "http://www.example.com",
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "isPlaceholder",
		message: "Do you want a placeholder?",
		default: true
	},
	{
		type: "input",
		name: "placeholder",
		message: "What is the placeholder?",
		default: "http://www.example.com",
		when: function (answers) { return answers.isPlaceholder == true }
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