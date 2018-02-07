const inputTypes = [
	"Button",
	"Checkbox",
	"Color",
	"Date",
	"DateTime-Local",
	"Email",
	"Month",
	"Number",
	"Password",
	"Radio",
	"Range",
	"Search",
	"Select",
	"Tel",
	"Text",
	"TextArea",
	"Time",
	"Url",
	"Week"
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