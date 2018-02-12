const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the week input name?",
		default: "week"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the week required?",
		default: true
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default week?",
		default: true
	},
	{
		type: "input",
		name: "weekYear",
		message: "What is the default week's year?",
		default: 2018,
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) >= 0 && parseFloat(value) <= 9999
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.default == true }
	},
	{
		type: "input",
		name: "value",
		message: "What is the default week?",
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0 && parseFloat(value) <= 52
			return valid || 'Please enter a number'
		},
		filter: Number,
		default: 1,
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Is there a minimum week?",
		default: false
	},
	{
		type: "input",
		name: "minYear",
		message: "What is the minimum week's year?",
		default: 2018,
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) >= 0 && parseFloat(value) <= 9999
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "input",
		name: "minimum",
		message: "What is the minimum week?",
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0 && parseFloat(value) <= 52
			return valid || 'Please enter a number'
		},
		filter: Number,
		default: 1,
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Is there a maximum week?",
		default: false
	},
	{
		type: "input",
		name: "maxYear",
		message: "What is the maximum week's year?",
		default: 2018,
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) >= 0 && parseFloat(value) <= 9999
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.maximum == true }
	},
	{
		type: "input",
		name: "maximum",
		message: "What is the maximum week?",
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0 && parseFloat(value) <= 52
			return valid || 'Please enter a number'
		},
		filter: Number,
		default: 1,
		when: function (answers) { return answers.maximum == true }
	},
]

module.exports = prompts