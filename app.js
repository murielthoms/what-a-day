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
			this.mois =($('#mois').val());
			this.ans =($('#years').val());	
			var date = moment(this.jours + this.mois + this.ans, 'DD-MM-YYYY').format('dddd');
			$('#affichage').append(date);
			this.updateView();


			
		},

		updateView: function() {

			if(this.jours < 0 || this.jours > 31 || this.ans < 0){
				this.erreur();
			}
			
		},
		erreur: function() {
			$('#message').text("Le jour doit être compris entre 1 et 31 !");
			$('#days').css('border', '2px solid #ff7473');
			$('#affichage').show();
		},
		restart: function(){
			$('#affichage').hide();
			this.jours =($('#days').val(''));
			this.ans =($('#years').val(''));
			this.mois = ($('#mois').val(''))
		},
	};


	app.init();

})();