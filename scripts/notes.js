(function(window) {
    'use strict';

    var Application = window.Application || {};
    var $ = window.jQuery;

    function Notes() {
        this.getNotes();
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

    Application.Notes = Notes;
    window.Application = Application;

    var notes = new Notes();
})(window);
