require "sinatra"
require "net/http"

DARK_SKY_API_KEY = "e532b69cd5ea4302bdba259bf39f311a"

get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end
