const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the date input name?",
		default: "date"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the date required?",
		default: true
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default date?",
		default: true
	},
	{
		type: "datetime",
		name: "value",
		message: "What is the default date?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd' ],
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Is there a minimum date?",
		default: false
	},
	{
		type: "datetime",
		name: "min",
		message: "What is the minimum date?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd' ],
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Is there a maximum date?",
		default: false
	},
	{
		type: "datetime",
		name: "max",
		message: "What is the maximum date?",
		format: [ 'yyyy', '-', 'mm', '-', 'dd' ],
		when: function (answers) { return answers.maximum == true }
	}
]

module.exports = prompts