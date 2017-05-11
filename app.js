(function() {
	"use strict"
	var app = {  

		jours: null,
		mois : null,
		ans : null,


		init: function() {
			this.listeners();
		},

		listeners:function() {
			$('#verif').on('click', this.dates.bind(this));
			$('#restart').on('click', this.restart.bind(this));
		},

		dates: function() {
			this.jours =($('#days').val());
			this.mois =($('#months').val());
			this.ans =($('#years').val());	
			var date = moment(this.jours + this.mois + this.ans, 'DD-MM-YYYY').format('dddd');
			

			if(date){
				$('.content').hide();
				$('#affichage').show();
			}

			this.updateView();	
			$('#affichage').append(date);
		},


		updateView: function() {

			if(this.jours < 0 || this.jours > 31 || this.ans < 0){
				this.erreur1();
			}
			else if(this.jours == "" || this.ans == ""){
				this .erreur2();

			}
		},

		erreur1:function() {
			$("#message").text("Le jour doit être compris entre 1 et 31 !");     
			$('#days').css('border', '2px solid #ff7473');
			$('.content').show();	
		},
		erreur2: function(){
			$("#message").text("Entrez une date complète!");
			$(".content").show();
		},

		restart: function(){

			location.reload(true);
		},
	};


	app.init();

})();