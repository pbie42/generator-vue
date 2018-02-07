const inputTypes = [
	"Button",
	"Checkbox",
	"Date",
	"Email",
	"Number",
	"Password",
	"Radio",
	"Text",
	"TextArea",
	"Time",
	"Url"
]

const prompts = [
	{
		type: "list",
		name: "input",
		message: "What is the input type you wish to add?",
		choices: inputTypes
	}
]

module.exports = prompts