	function getInput() {

		var input = $("#username").val();
	 $.ajax({url: "https://api.github.com/users/"+input})
	 .then(function(data) {
	       $('.greeting-name > span').html(data.name);
	       $('.greeting-content').html("<img src='"+data.avatar_url+"' width='100px'/>");
	       $('.something > span').html(data.public_repos);
	       $('.created > span').html(data.created_at);
	       $('.updated > span').html(data.updated_at);
	    });
	}