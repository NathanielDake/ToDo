#definied as Api::ItemsController to ensure that it matches the required routes
class Api::ItemsController < ApiController

  before_action :authenticated?

  def create
    item = Item.new(params.require(:item).permit(:description))

    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages, status: :unprocessable_entity}
    end
  end

end


#Concerning params.require.permit

#The require method ensures that a specific parameter is present, and if it's not provided,
#the require method throws an error. It returns an instance of ActionController::Parameters
# for the key passed into require.

#The permit method returns a copy of the parameters object, returning only the permitted keys and
# values. When creating a new ActiveRecord model, only the permitted
# attributes are passed into the model.

