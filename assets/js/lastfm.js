$(document).ready(function() {
    var recentAlbums = "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=bauwensprod&api_key=51ecbd70937cc5295bb60574427e5762";
    $.get(recentAlbums, function(data) {
        $(data).find('album').each(function(index) {
            if (index < 9) {
                $('#LastFM').append(
                    '<div class ="4u"><span class="image fit"><img src="' + getAlbumArt($(this).find('artist').text(), $(this).find('name').text()) + '"><p>' + $(this).find('artist').text() + ' - ' + $(this).find('name').text() + '</p></span></div>'
                );
            }
        });
    });
});

function getAlbumArt(artist, album) {
	var albumInfo = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=51ecbd70937cc5295bb60574427e5762&artist=" + artist +"&album=" + album;
	var albumArt = "";
	$.ajax({
		async: false,
		type: 'GET',
		url: albumInfo,
		success: function(data) {
			albumArt = $(data).find('image[size="extralarge"]').text();
    	}
    });
    return albumArt;
};