const Generator = require('yeoman-generator')
const datepicker = require('inquirer-datepicker-prompt')
const prompts = require('./prompts')
const newForm = require('./utils/newForm')
const { valueOf, formatTime, formatMonth, formatDate, formatDateTime } = require('./utils/formats')
const { askForInputs } = require('./utils/questions')

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

	// askForPrompts() {
	// 	const cb = this.async()
	// 	return this.askForName.call(this, cb)
	// }

	// askForName(cb) {
	// 	return this.prompt(prompts.name).then(function (props) {
	// 		newForm.name = props.name
	// 		this.askForInputs(this, cb)
	// 	}.bind(this))
	// }

	

	// askForType(cb, prompts) {
	// 	return this.prompt(prompts).then(function (props) {
	// 		this.askForAnother(this, cb)
	// 	}.bind(this))
	// }


	// askForSelect(cb, prompts) {
	// 	return this.prompt(prompts).then(function (props) {
	// 		if (props.add) this.askForOption(this, cb, prompts.option)
	// 		else this.askForAnother(this, cb)
	// 	}.bind(this))
	// }

	// askForOption(cb, prompts) {
	// 	return this.prompt(prompts).then(function (props) {
	// 		if (props.another) this.askForOption.call(this, cb, prompts.option)
	// 		else this.askForAnother(this, cb)
	// 	}.bind(this))
	// }

	prompting() {
		return this.prompt(prompts.name).then(function (props) {
			newForm.name = props.name
			return askForInputs(this)
		}.bind(this))
	}

	writing() {
		console.log(`is it here?`)
		this.fs.copyTpl(this.templatePath('form.vue'), this.destinationPath('test/form.vue'), newForm)
		console.log(`happening`)
	}
}

module.exports = VueForm