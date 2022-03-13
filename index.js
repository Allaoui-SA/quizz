//index.js

//loadings
let express = require('express')
let bodyParser = require('body-parser')
let db = require('./config/database')
let Question = require('./models/question')
let Answer = require('./models/answer')

//setup
let quizz = express()
 
quizz.set('view engine', 'ejs')
//rend le dossier public accessible sous l'adresse /assets
quizz.use('/assets', express.static('public'))
quizz.use(bodyParser.urlencoded({extended: false}))
quizz.use(bodyParser.json())

quizz.get('/', (req, res) => {
    res.render('pages/index')
})

quizz.get('/quizz', (req, res) => {
	Question.all((a) => {
		res.render('pages/quizz', {title: 'Node 1', page : 'quizz' , questions : a})
	})
})


//init
quizz.listen(8080)