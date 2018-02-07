const Generator = require('yeoman-generator')
const datepicker = require('inquirer-datepicker-prompt')
const { input_prompts, another_prompts, button_prompts, checkbox_prompts,
				date_prompts, email_prompts, name_prompts, number_prompts, password_prompts,
				radio_prompts, text_prompts, textarea_prompts } = require('./prompts')

const newForm = {
	name: "",
	Buttons: [],
	Checkboxes: [],
	Dates: [],
	Emails: [],
	Numbers: [],
	Passwords: [],
	Radios: [],
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
			if (props.input == "Email") this.askForType.call(this, cb, email_prompts)
			if (props.input == "Number") this.askForType.call(this, cb, number_prompts)
			if (props.input == "Password") this.askForType.call(this, cb, password_prompts)
			if (props.input == "Radio") this.askForType.call(this, cb, radio_prompts)
			if (props.input == "Text") this.askForType.call(this, cb, text_prompts)
			if (props.input == "TextArea") this.askForType.call(this, cb, textarea_prompts)
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