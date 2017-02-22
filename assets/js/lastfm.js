$(document).ready(function() {
    var recentAlbums = "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=bauwensprod&api_key=51ecbd70937cc5295bb60574427e5762";
    $.get(recentAlbums, function(data) {
        $(data).find('album').each(function(index) {
            if (index < 6) {
                console.log(this);
                var artist = $(this).find('artist').text();
                var album = $(this).find('name').text();
                var albumInfo = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=51ecbd70937cc5295bb60574427e5762&artist=" + artist +"&album=" + album;
                console.log(albumInfo);
                var albumArt = "";
                $.ajax({
                    type: 'GET',
                    url: albumInfo,
                    success: function(data) {
                        albumArt = $(data).find('image[size="extralarge"]').text();
                        if (albumArt == "") {
                            $('#LastFM').append(
                                '<div class ="4u"><span class="image fit"><img src="images/placeholder.png"><p>' + artist + ' - ' + album + '</p></span></div>'
                            );
                        }
                        else {
                            $('#LastFM').append(
                                '<div class ="4u"><span class="image fit"><img src="' + albumArt + '"><p>' + artist + ' - ' + album + '</p></span></div>'
                            );
                        }
                    }
                });
            }
        });
    });
});