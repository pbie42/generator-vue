const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the range input name?",
		default: "range"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the range input required?",
		default: true
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
	}
]

module.exports = prompts