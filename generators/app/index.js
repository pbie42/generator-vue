const Generator = require('yeoman-generator')
const datepicker = require('inquirer-datepicker-prompt')
const prompts = require('./prompts')
const newForm = require('./utils/newForm')
const { formatDate } = require('./utils/formats')

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

function askForInputs(that) {
	return that.prompt(prompts.input).then(function (props) {
		if (props.input == "Button") return askForButton.call(this, that, prompts.button)
		if (props.input == "Checkbox") return askForCheckbox.call(this, that, prompts.checkbox)
		if (props.input == "Color") return askForColor.call(this, that, prompts.color)
		if (props.input == "Date") return askForDate.call(this, that, prompts.date)
		if (props.input == "DateTime-Local") return askForDateTime.call(this, that, prompts.datetime)
		if (props.input == "Email") return askForEmail.call(this, that, prompts.email)
		if (props.input == "Month") return askForMonth.call(this, that, prompts.month)
		// if (props.input == "Number") this.askForType.call(this, cb, prompts.number)
		// if (props.input == "Password") this.askForType.call(this, cb, prompts.password)
		// if (props.input == "Radio") this.askForType.call(this, cb, prompts.radio)
		// if (props.input == "Range") this.askForType.call(this, cb, prompts.range)
		// if (props.input == "Search") this.askForType.call(this, cb, prompts.search)
		// if (props.input == "Select") this.askForSelect.call(this, cb, prompts.select)
		// if (props.input == "Tel") this.askForType.call(this, cb, prompts.tel)
		// if (props.input == "Text") this.askForType.call(this, cb, prompts.text)
		// if (props.input == "TextArea") this.askForType.call(this, cb, prompts.textarea)
		// if (props.input == "Time") this.askForType.call(this, cb, prompts.time)
		// if (props.input == "Url") this.askForType.call(this, cb, prompts.url)
		// if (props.input == "Week") this.askForType.call(this, cb, prompts.week)
	}.bind(this))
}

function askForButton(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const button = { name: props.name, type: props.type, value: props.value }
		newForm.buttons.push(button)
		return askForAnother(that)
	}.bind(this))
}

function askForCheckbox(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const checkbox = { name: props.name, checked: props.checked, value: props.value }
		newForm.checkboxes.push(checkbox)
		return askForAnother(that)
	}.bind(this))
}

function askForColor(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const color = { name: props.name, value: props.value }
		newForm.colors.push(color)
		return askForAnother(that)
	}.bind(this))
}

function askForDate(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const date = {
			name: props.name,
			required: props.required,
			default: formatDate(props.default),
			min: formatDate(props.min),
			max: formatDate(props.max)
		}
		newForm.dates.push(date)
		return askForAnother(that)
	}.bind(this))
}

function askForDateTime(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const dateTime = {
			name: props.name,
			required: props.required,
			default: props.default ? props.default : "",
			min: props.min ? props.min : "",
			max: props.max ? props.max : "",
		}
		newForm.dateTimes.push(dateTime)
		return askForAnother(that)
	}.bind(this))
}

function askForMonth(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const month = {
			name: props.name,
			required: props.required,
			default: props.default ? props.default: "",
			min: props.min ? props.min : "",
			max: props.max ? props.max : "",
		}
		newForm.months.push(month)
		return askForAnother(that)
	}.bind(this))
}

function askForEmail(that, prompts) {
		return that.prompt(prompts).then(function (props) {
			const email = {
				name: props.name,
				required: props.required,
				placeholder: props.placeholder ? props.placeholder: "",
				multiple: props.default ? props.default : "",
				min: props.min ? props.min : "",
				max: props.max ? props.max : "",
				multiple: props.multiple
			}
			newForm.emails.push(email)
			return askForAnother(that)
		}.bind(that))
	}

function askForAnother(that) {
		return that.prompt(prompts.another).then(function (props) {
			if (props.another) return askForInputs.call(this, that)
			else return
		}.bind(that))
	}

module.exports = VueForm