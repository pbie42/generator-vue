const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the number input name?",
		default: "number"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the number input required?",
		default: true
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default number?",
		default: true
	},
	{
		type: "input",
		name: "value",
		message: "What is the default number value?",
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "isPlaceholder",
		message: "Do you want a placeholder?",
		default: false
	},
	{
		type: "input",
		name: "placeholder",
		message: "What is the placeholder?",
		default: "Multiple of 10",
		when: function (answers) { return answers.isPlaceholder == true }
	},
	{
		type: "confirm",
		name: "isStep",
		message: "Do you want to set a step size (this allows decimals as well)?",
		default: false
	},
	{
		type: "input",
		name: "step",
		message: "What is the step size (add decimal value if wanted)?",
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.isStep == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Do you want a minimum value?",
		default: false
	},
	{
		type: 'input',
		name: 'min',
		message: 'What is the minimum value?',
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
		message: "Do you want a maximum value?",
		default: false
	},
	{
		type: 'input',
		name: 'max',
		message: 'What is the maximum value?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.maximum == true }
	}
]

module.exports = prompts