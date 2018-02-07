const inputTypes = [
	"Button",
	"Checkbox",
	"Date",
	"Email",
	"Number",
	"Password",
	"Radio",
	"Submit",
	"Text",
	"TextArea",
	"Time",
	"Url"
]

const prompts = [
	{
		type: "list",
		name: "input",
		message: "What is the input type to wish to add?",
		choices: inputTypes
	}
]

module.exports = prompts