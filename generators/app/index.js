const Generator = require('yeoman-generator')
const input_prompts = require('../../prompts/input_prompts')
const another_prompts = require('../../prompts/another_prompts')
const button_prompts = require('../../prompts/button_prompts')
const checkbox_prompts = require('../../prompts/checkbox_prompts')
const date_prompts = require('../../prompts/date_prompts')
const name_prompts = require('../../prompts/name_prompts')
const datepicker = require('inquirer-datepicker-prompt')

const newForm = {
	name: "",
	Buttons: [],
	Checkboxes: [],
	Dates: [],
	Emails: [],
	Numbers: [],
	Passwords: [],
	Radios: [],
	Submits: [],
	Texts: [],
	TextAreas: [],
	Times: [],
	Urls: []
}

class Base extends Generator {
	mirror(name, data={}) {
		this.fs.copyTpl(this.templatePath(name), this.destinationPath(name), data)
	}
}

class VueForm extends Base {

	constructor(...args) {
		super(...args)
		this.env.adapter.promptModule.registerPrompt('datetime', datepicker)
	}

	askForPrompts() {
		const cb = this.async()
		this.askForName.call(this, cb)
	}

	askForName(cb) {
		return this.prompt(name_prompts).then(function (props) {
			this.askForInputs(this, cb)
		}.bind(this))
	}

	askForInputs(cb) {
		const prompts = input_prompts
		return this.prompt(prompts).then(function (props) {
			if (props.input == "Button") this.askForType.call(this, cb, button_prompts)
			if (props.input == "Checkbox") this.askForType.call(this, cb, checkbox_prompts)
			if (props.input == "Date") this.askForType.call(this, cb, date_prompts)
		}.bind(this))
	}

	askForType(cb, prompts) {
		return this.prompt(prompts).then(function (props) {
			this.askForAnother(this, cb)
		}.bind(this))
	}

	askForAnother(cb) {
		return this.prompt(another_prompts).then(function (props) {
			if (props.another) this.askForInputs.call(this, cb)
		}.bind(this))
	}

	prompting() {
		return this.askForPrompts()
	}
}

module.exports = VueForm