const prompts = [
	{
		type: "input",
		name: "name",
		message: "What is the month input name?",
		default: "month"
	},
	{
		type: "confirm",
		name: "required",
		message: "Is the month required?",
		default: true
	},
	{
		type: "confirm",
		name: "default",
		message: "Is there a default month?",
		default: true
	},
	{
		type: "datetime",
		name: "value",
		message: "What is the default month value?",
		format: [ 'yyyy', '-', 'mm' ],
		when: function (answers) { return answers.default == true }
	},
	{
		type: "confirm",
		name: "minimum",
		message: "Is there a minimum month?",
		default: false
	},
	{
		type: "datetime",
		name: "min",
		message: "What is the minimum month?",
		format: [ 'yyyy', '-', 'mm' ],
		when: function (answers) { return answers.minimum == true }
	},
	{
		type: "confirm",
		name: "maximum",
		message: "Is there a maximum month?",
		default: false
	},
	{
		type: "datetime",
		name: "max",
		message: "What is the maximum month?",
		format: [ 'yyyy', '-', 'mm' ],
		when: function (answers) { return answers.maximum == true }
	}
]

module.exports = prompts