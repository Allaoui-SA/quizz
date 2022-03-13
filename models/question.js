let db = require('../config/database')

class Question {

	constructor (r, a){
		if(r == null){
			this._id = null
			this._created = null
			this._updated = null
			this._question_id = null
			this._title = null
            this._theme = null
            this._answer = null
		}else{
            this._id = r.id
			this._created = r.created
			this._updated = r.updated
			this._question_id = r.question_id
			this._title = r.title
            this._theme = r.theme
            this._answer = a.content
		}
	}

	get id(){
		return this._id
	}
	get created(){
		return this._created
	}
	get updated(){
		return this._updated
	}
	get question_id(){
		return this._question_id
	}
	get title(){
		return this._title
	}
	get theme(){
		return this._theme
	}
	get answer(){
		return this._answer
	}
	set id(x){
		this._id = x
	}
	set created(x){
		this._created = x
	}
	set updated(x){
		this._updated = x
	}
	set question_id(x){
		this._question_id = x
	}
	set title(x){
		this._title = x
	}
	set theme(x){
		this._theme = x
	}
	set answer(x){
		this._answer = x
	}


	static all(callback){
		db.query('SELECT * FROM questions ORDER BY RAND() Limit 1', (error, result) => {
            callback(  result.map( (r) => new Question(r) )  )
            db.query('SELECT * FROM answers', (error, result) => {
                callback(  result.map( (a) => new Question(a) )  )
            })
		})
	}
}


module.exports = Question