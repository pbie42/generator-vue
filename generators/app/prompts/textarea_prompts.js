const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the textarea name?",
		default: "textarea"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the textarea required?",
		default: false
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
		default: "Please enter your comments here.",
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
	{
		type: "confirm",
		name: "rows_spec",
		message: "Specify rows?",
		default: false
	},
	{
		type: 'input',
		name: 'rows',
		message: 'How many rows?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.rows_spec == true }
	},
	{
		type: "confirm",
		name: "columns",
		message: "Specify columns?",
		default: false
	},
	{
		type: 'input',
		name: 'cols',
		message: 'How many columns?',
		validate: function(value) {
			var valid = !isNaN(parseFloat(value))
			return valid || 'Please enter a number'
		},
		filter: Number,
		when: function (answers) { return answers.columns == true }
	},
	{
		type: "confirm",
		name: "readonly",
		message: "Is this textarea read only?",
		default: false
	},
	{
		type: "confirm",
		name: "spellcheck",
		message: "Do you want spellcheck?",
		default: false
	}
]

module.exports = prompts