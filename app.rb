require 'sinatra/base'
require 'json'


class Thermo_API < Sinatra::Base

  set :public_folder, proc { File.join(root) }

  get '/' do
    erb :thermostat
  end

  get '/testcity.json' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    { cityName: "Paris" }.to_json
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
