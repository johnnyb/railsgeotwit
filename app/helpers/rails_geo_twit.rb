module RailsGeoTwit
	def twitter_map(options = {})
		render(:partial => "railsgeotwit/twitter_map", :locals => options)
	end
end
