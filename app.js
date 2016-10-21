(function() {
	"use strict"
	var app = {  
		jours: null,

		init: function() {
			this.listeners();
		},

		
		listeners:function() {
			$('#valider').on('click', this.valeurDate.bind(this));
		},
		
		valeurDate: function() {
			this.jours =($('#days').val());
			var mois =($('#mois').val());
			var ans =($('#years').val());	
			this.updateView();
			this.erreur();
			console.log(moment(this.jours + mois+ ans, 'DD-MM-YYY').format('dddd'));
		},

		updateView: function() {

			if(this.jours < 0 || this.jours > 31){

				return this.erreur() + ($('days').css('borderColor', '#ff7473'));
			}
		},
		erreur: function() {
			var error = $('#message').text("Le jour doit être compris entre 1 et 31 !");

		},

	}

app.init();

})();