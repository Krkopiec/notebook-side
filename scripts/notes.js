(function(window) {
    'use strict';

    var Application = window.Application || {};
    var $ = window.jQuery;

    function Notes() {
		this.getNotes();
		this.handlelogout();
	}
	

    Notes.prototype.getNotes = function() {
    	$.ajax({
    		type: 'GET',
    		url: 'http://localhost:8080/notes',
			beforeSend: function (xhr) {
				xhr.setRequestHeader(
            			'Authorization',
            			'Basic ' + btoa(sessionStorage.getItem('login') + ':' + sessionStorage.getItem('password')));
			},
			success: function (data) {
			    alert(JSON.stringify(data));
			},
			error: function() {
				alert('error');
			}
    	});
	}

	Notes.prototype.handlelogout = function() {
		$('#logout').on('click', function(event) {
			location.pathname = "/index.html";
		});
	}

    Application.Notes = Notes;
    window.Application = Application;

    var notes = new Notes();
})(window);
