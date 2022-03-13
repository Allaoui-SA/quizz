let db = require('../config/database')

class Answer {

	constructor (r){
		if(r == null){
			this._id = null
			this._created = null
			this._modified = null
			this._question_id = null
			this._content = null
			this._good = null
		}else{
            this._id = r.id
			this._created = r.created
			this._modified = r.modified
			this._question_id = r.question_id
			this._content = r.content
            this._good = r.good
		}
	}

	get id(){
		return this._id
	}
	get created(){
		return this._created
	}
	get modified(){
		return this._modified
	}
	get question_id(){
		return this._question_id
	}
	get content(){
		return this._content
	}
	get good(){
		return this._good
	}
	set id(x){
		this._id = x
	}
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}
	set question_id(x){
		this._question_id = x
	}
	set content(x){
		this._content = x
	}
	set good(x){
		this._good = x
	}


	static all(callback){
		db.query('SELECT * FROM answers', (error, result) => {
			callback(  result.map( (r) => new Answer(r) )  )
		})
	}
}


module.exports = Answer