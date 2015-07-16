Feud = new Feud(){

}
Feud.prototype = {
	updated: false,
	question: "",
	answers: 0,
	update_question:function(string){
		updated = true;
		question = string;
	},
	add_answer:function(string){

	},
	get_answer_count:function(string){

	},
	get_answers:function(){
		
	}
}