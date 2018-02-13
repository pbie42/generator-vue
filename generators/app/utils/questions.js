const prompts = require('../prompts')
const newForm = require('./new_form')

function askForInputs(that) {
	return that.prompt(prompts.input).then(function (props) {
		if (props.input == "Button") return askForButton.call(this, that, prompts.button)
		if (props.input == "Checkbox") return askForCheckbox.call(this, that, prompts.checkbox)
		if (props.input == "Color") return askForColor.call(this, that, prompts.color)
		if (props.input == "Date") return askForDate.call(this, that, prompts.date)
		if (props.input == "DateTime-Local") return askForDateTime.call(this, that, prompts.datetime)
		if (props.input == "Email") return askForEmail.call(this, that, prompts.email)
		if (props.input == "Month") return askForMonth.call(this, that, prompts.month)
		if (props.input == "Number") return askForNumber.call(this, that, prompts.number)
		if (props.input == "Password") return askForPassword.call(this, that, prompts.password)
		if (props.input == "Radio") return askForRadio.call(this, that, prompts.radio)
		if (props.input == "Range") return askForRange.call(this, that, prompts.range)
		if (props.input == "Search") return askForSearch.call(this, that, prompts.search)
		if (props.input == "Select") return askForSelect.call(this, that, prompts.select)
		if (props.input == "Tel") return askForTel.call(this, that, prompts.tel)
		if (props.input == "Text") return askForText.call(this, that, prompts.text)
		if (props.input == "TextArea") return askForTextarea.call(this, that, prompts.textarea)
		if (props.input == "Time") return askForTime.call(this, that, prompts.time)
		if (props.input == "Url") return askForUrl.call(this, that, prompts.url)
		if (props.input == "Week") return askForWeek.call(this, that, prompts.week)
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
			value: formatDate(props.value),
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
			value: formatDateTime(props.value),
			min: formatDateTime(props.min),
			max: formatDateTime(props.max)
		}
		newForm.dateTimes.push(dateTime)
		return askForAnother(that)
	}.bind(this))
}

function askForEmail(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const email = {
			name: props.name,
			required: props.required,
			placeholder: valueOf(props.placeholder),
			multiple: valueOf(props.default),
			min: valueOf(props.min),
			max: valueOf(props.max),
			multiple: props.multiple
		}
		newForm.emails.push(email)
		return askForAnother(that)
	}.bind(that))
}

function askForMonth(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const month = {
			name: props.name,
			required: props.required,
			value: formatMonth(props.value),
			min: formatMonth(props.min),
			max: formatMonth(props.max)
		}
		newForm.months.push(month)
		return askForAnother(that)
	}.bind(this))
}

function askForNumber(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const number = {
			name: props.name,
			required: props.required,
			value: valueOf(props.value),
			placeholder: valueOf(props.placeholder),
			step: valueOf(props.step),
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.numbers.push(number)
		console.log(`newForm`, newForm)
		return askForAnother(that)
	}.bind(that))
}

function askForPassword(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const password = {
			name: props.name,
			required: props.required,
			autocomplete: valueOf(props.autocomplete),
			placeholder: valueOf(props.placeholder),
			inputmode: props.inputmode ? "numeric" : "",
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.passwords.push(password)
		return askForAnother(that)
	}.bind(that))
}

function askForRadio(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const radio = { name: props.name, checked: props.checked, value: props.value }
		newForm.radios.push(radio)
		return askForAnother(that)
	}.bind(this))
}

function askForRange(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const range = {
			name: props.name,
			required: props.required,
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.ranges.push(range)
		return askForAnother(that)
	}.bind(that))
}

function askForSearch(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const search = {
			name: props.name,
			required: props.required,
			placeholder: valueOf(props.placeholder),
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.searches.push(search)
		return askForAnother(that)
	}.bind(that))
}

function askForTel(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const tel = {
			name: props.name,
			required: props.required,
			placeholder: valueOf(props.placeholder),
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.tels.push(tel)
		return askForAnother(that)
	}.bind(that))
}

function askForText(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const text = {
			name: props.name,
			required: props.required,
			value: valueOf(props.value),
			placeholder: valueOf(props.placeholder),
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.texts.push(text)
		return askForAnother(that)
	}.bind(that))
}

function askForTextarea(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const textarea = {
			name: props.name,
			required: props.required,
			value: valueOf(props.value),
			placeholder: valueOf(props.placeholder),
			min: valueOf(props.min),
			max: valueOf(props.max),
			rows: valueOf(props.rows),
			cols: valueOf(props.cols),
			readonly: props.readonly,
			spellcheck: props.spellcheck
		}
		newForm.textAreas.push(textarea)
		return askForAnother(that)
	}.bind(that))
}

function askForTime(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const time = {
			name: props.name,
			required: props.required,
			step: valueOf(props.step),
			value: formatTime(props.value),
			min: formatTime(props.min),
			max: formatTime(props.max),
		}
		newForm.times.push(time)
		return askForAnother(that)
	}.bind(that))
}

function askForUrl(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const url = {
			name: props.name,
			required: props.required,
			value: valueOf(props.value),
			placeholder: valueOf(props.placeholder),
			min: valueOf(props.min),
			max: valueOf(props.max),
		}
		newForm.urls.push(url)
		return askForAnother(that)
	}.bind(that))
}

function askForWeek(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const value = props.year + "-W" + props.week
		const min = props.minYear + "-W" + props.minWeek
		const min = props.maxYear + "-W" + props.maxWeek
		const week = {
			name: props.name,
			required: props.required,
			value,
			min,
			max,
		}
		newForm.weeks.push(week)
		return askForAnother(that)
	}.bind(that))
}

function askForAnother(that) {
	return that.prompt(prompts.another).then(function (props) {
		if (props.another) return askForInputs.call(this, that)
		else return
	}.bind(that))
}

function askForSelect(that, prompts) {
	return that.prompt(prompts).then(function (props) {
		const select = {
			name: props.name,
			idNo: newForm.selects.length,
			required: props.required,
			multiple: props.multiple,
			size: valueOf(props.size),
			value,
			min,
			max,
		}
		newForm.selects.push(select)
		if (props.add) return askForOption(this, that, prompts.option, idNo)
		else return askForAnother(that)
	}.bind(this))
}

function askForOption(that, prompts, selectNo) {
	return that.prompt(prompts).then(function (props) {
		const option = { idNo: selectNo, value: valueOf(props.value), selected: valueOf(props.selected) }
		if (props.another) return askForOption(this, that, prompts.option, selectNo)
		else return askForAnother(that)
	}.bind(this))
}

module.exports = { askForInputs, askForButton, askForCheckbox, askForColor, askForDate,
  askForDateTime, askForEmail, askForMonth, askForNumber, askForPassword, askForRadio,
  askForRange, askForSearch, askForTel, askForText, askForTextarea, askForTime, askForUrl, askForWeek }