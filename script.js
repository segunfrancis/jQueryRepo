$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/segunfrancis"
    }).then(function(data) {
       $('.greeting-name').append(data.name);
       $('.greeting-content').append(data.gravatar_id);
       $('.something').append(data.public_repos);
       $('.created').append(data.created_at);
       $('.updated').append(data.updated_at);
    });
});