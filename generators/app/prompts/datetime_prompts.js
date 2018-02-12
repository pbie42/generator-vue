const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the datetime input name?",
		default: "datetime"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the datetime required?",
		default: false
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default datetime?",
		default: false
	},
	{
		type: "datetime",
		name: "value",
		message: "What is the default datetime value?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd', ' ', 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Is there a minimum datetime?",
		default: false
	},
	{
		type: "datetime",
		name: "min",
		message: "What is the minimum datetime?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd', ' ', 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Is there a maximum datetime?",
		default: false
	},
	{
		type: "datetime",
		name: "max",
		message: "What is the maximum datetime?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd', ' ', 'hh', ':', 'MM', ' ', 'TT' ],
		when: function (answers) { return answers.maximum == true }
	}
]

module.exports = prompts