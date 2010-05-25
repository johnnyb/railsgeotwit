var twitter_map_object = null;
var twitter_map_options = {
	map_type: google.maps.MapTypeId.ROADMAP,
	map_zoom: 8,
	map_div_id: "twitter_map",
	map_var: null
};
function set_twitter_map_options(opts) {
	var optlist = ["map_type", "map_zoom"];
	for(var i = 0; i < optlist.size; i++) {
		var optname = optlist[i];
		if(opts[optname] != null) {
			twitter_map_options[optname] = opts[optname];
		}
	}
}

function map_tweets(twit_list) {
	var map_elem = document.getElementById("twitter_map");

	var first_point = true;
	var llpt = null;

	for(var i = 0; i < twit_list.length; i++) {
		var twit = twit_list[i];
		window.alert(twit.text);
		if(twit.geo != null) {
			var lattitude = twit.geo.coordinates[0];
			var longitude = twit.geo.coordinates[1];
			llpt = new google.maps.LatLng(lattitude, longitude);
			if(first_point) {
				if(twitter_map_options.map_var == null) {
					twitter_map_object = new google.maps.Map(map_elem, { mapTypeId: twitter_map_options.map_type, zoom: twitter_map_options.map_zoom, center: llpt});
				} else {
					twitter_map_object = twitter_map_options.map_var;
				}
			}
			window.alert("Placing marker");
			var marker = new google.maps.Marker({
				position: llpt,
				map: twitter_map_object,
				icon: first_point ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png" : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
				draggable: false,
				visible: true,
				title: twit.text,
				zIndex: (twit_list.length - i)
			});

			first_point = false;
		}
	}
}
