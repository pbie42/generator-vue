const Generator = require('yeoman-generator')
const datepicker = require('inquirer-datepicker-prompt')
const prompts = require('./prompts')
const newForm = require('./utils/new_form')
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

	prompting() {
		return this.prompt(prompts.name).then(function (props) {
			newForm.name = props.name
			return askForInputs(this)
		}.bind(this))
	}

	writing() {
		console.log(`is it here?`)
		this.fs.copyTpl(this.templatePath('form.vue'), this.destinationPath('forms/form.vue'), newForm)
		console.log(`happening`)
	}
}

module.exports = VueForm