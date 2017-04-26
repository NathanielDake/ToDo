#definied as Api::ItemsController to ensure that it matches the required routes
class Api::ItemsController < ApiController

  before_action :authenticated?


  def show
    @item = Item.find(params[:id])
    render json: item
  end

  def create
    list = List.find(params[:list_id])
    item = list.items.build(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    list = List.find(params[:list_id])
    item = Item.find(params[:id])
    if item.update(item_params)
      render json: item, status: 200
    else
      render json: {}, status: 422
    end


  end

  private
  def item_params
    params.require(:item).permit(:description)
  end
end


#Concerning params.require.permit

#The require method ensures that a specific parameter is present, and if it's not provided,
#the require method throws an error. It returns an instance of ActionController::Parameters
# for the key passed into require.

#The permit method returns a copy of the parameters object, returning only the permitted keys and
# values. When creating a new ActiveRecord model, only the permitted
# attributes are passed into the model.

