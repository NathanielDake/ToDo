class Api::UsersController < ApiController

  #calls authenticated? before the request is processed
  before_action :authenticated?

  def index
    users = User.all
    render json: users, each_serializer: UserSerializer
  end
end