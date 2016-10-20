(function() {
	"use strict";
	var app = {  

		init: function() {
			this.listeners();
		},


		
		listerners:function() {
			$('#valider').on('click', this.valeurDate.bind(this));
		},

		valeurDate: function(){
			var j = parseint($('#days').val()10)

		},






		};	
		app.init();

	})();