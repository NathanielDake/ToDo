class ApiController < ApplicationController
  require 'bcrypt'

  skip_before_action :verify_authenticity_token

  private
  #Implements basic HTTP authentication, which ensures HTTP requests are accompanied by a valid username and password
  def authenticated?
    authenticate_or_request_with_http_basic{|username, password| User.where( username: username, password_digest: password).present? }
  end
end