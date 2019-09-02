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
				$.each(data, function(index, value) {
					var title = value.title;
					var element =
							'<li class="list-group-item">\n<div class="row">\n<div class="col-6">'
							+ title
							+ '</div>\n<div class="col-6">\n<div class="btn-group float-right">'
							+ '\n<button type="button" class="btn btn-primary">\n<i class="far fa-eye"></i>'
							+ '\n</button>\n<button type="button" class="btn btn-primary">'
							+ '\n<i class="fas fa-edit"></i>'
							+ '\n</button>\n<button type="button" class="btn btn-primary">'
							+ '\n<i class="fas fa-trash"></i>\n</button>'
							+ '\n</div>\n</div>\n</div>\n</li>';
					console.log(element);
					$('#notes').append(element);
				});
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
