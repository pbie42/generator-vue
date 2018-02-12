const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the time input name?",
		default: "time"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the time required?",
		default: true
	},
	{
		type: "confirm",
		name: "isStep",
		message: "Do you want time validated in steps (eg. 5 minute intervals)?",
		default: false
	},
	{
		type: 'input',
		name: 'step',
		message: 'What is the step interval?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0 && parseFloat(value) < 60
			return valid || 'Please enter a number between 0 and 60'
		},
		filter: Number,
		when: function (answers) { return answers.isStep == true }
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default time?",
		default: true
	},
	{
		type: "datetime",
		name: "value",
		message: "What is the default time?",
		format: [ 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Is there a minimum time?",
		default: false
	},
	{
		type: "datetime",
		name: "min",
		message: "What is the minimum time?",
		format: [ 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Is there a maximum time?",
		default: false
	},
	{
		type: "datetime",
		name: "max",
		message: "What is the maximum time?",
		format: [ 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.maximum == true }
	}
]

module.exports = prompts