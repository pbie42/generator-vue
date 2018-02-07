const Generator = require('yeoman-generator')

class Base extends Generator {
	mirror(name, data={}) {
		this.fs.copyTpl(this.templatePath(name), this.destinationPath(name), data)
	}
}

class VueForm extends Base {

	askForName(cb) {
		const prompts = [
			{
				type: "input",
				name: "name",
				message: "What is the form component name?",
				default: "GenericForm"
			}
		]
		return this.prompt(prompts).then(function (props) {
			this.askPrompts(this, cb)
		}.bind(this))
	}

	askForPrompts() {
		const cb = this.async()
		this.askForName.call(this, cb)
	}

	askPrompts(cb) {
		const prompts = [
			{
				type: "list",
				name: "input",
				message: "What is the input type to wish to add?",
				choices: [
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
			},
			{
				type: "confirm",
				name: "another",
				message: "Add another input?",
				default: true
			}
		]
		return this.prompt(prompts).then(function (props) {
			if (props.another) {
				this.askPrompts.call(this, cb)
			}
		}.bind(this))
	}

	prompting() {
		return this.askForPrompts()
	}
}

// function() {
// 	var answers = {
// 		 times: [],
// 		 title: undefined,
// 		 type: undefined
// 	};

// 	function promptMe(prompt, cb) {
// 		 self.prompt(prompt, function (props) {
// 			  if(props.answer!= "done") {
// 					answers.times.push(props.time);
// 					promptMe(prompt, cb);
// 			  } else {
// 					cb();
// 			  }
// 		 });
// 	}

// 	var cb = this.async(),
// 		 self = this,
// 		 movieTypePrompt = {
// 			  type: 'input',
// 			  name: 'movieType',
// 			  message: chalk.yellow('What is your favorite type of movie?'),
// 			  default: 'Action'
// 		 },
// 		 movieTitilePrompt = {
// 			  type: 'input',
// 			  name: 'movieTitle',
// 			  message: chalk.yellow('What is your favorite movie?'),
// 			  default: 'Tron: Legacy'
// 		 }
// 		 movieTimePrompt = {
// 			  type: 'input',
// 			  name: 'time',
// 			  message: chalk.yellow('When can you watch a movie? (enter \'done\' when you are done entering times)'),
// 			  default: '8PM'
// 		 };

// 	//Prompt for movie type and title
// 	this.prompt([movieTypePrompt, movieTitlePrompt], function (props) {
// 		 answers.title = props.movieTitle;
// 		 answers.type = props.movieType;

// 		 //Repeatedly prompt for movie times
// 		 promptMe(moviePrompt, function() {
// 			  console.log('done');

// 			  cb();
// 		 });
// 	}.bind(this));
// }

module.exports = VueForm