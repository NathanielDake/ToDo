class Api::ListsController < ApiController

  before_action :authenticated?

  #Show method renders all items belonging to a list in json format
  def show
    authenticate
    list = List.find(params[:id])
    items = list.items
    render json: {
        items: items,
        id: list.id
    }
  end

  def create
    user = User.find(params[:user_id])
    list = user.lists.build(list_params)

    if list.save
      render json: list
    else
      render json: { errors: list.errors.full_messages, status: :unprocessable_entity}
    end
  end

  def update
    list = List.find(params[:id])
    if list.update(list_params)
      render json: list
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    list = List.find(params[:id])
    list.destroy

    render json: {}, status: :no_content
  rescue ActiveRecord::RecordNotFound
    render :json => {}, :status => :not_found
  end

  private

  def list_params
    params.require(:list).permit(:name, :permission)
  end

  def authenticate
    username = "ndake11@gmail.com"
    password = "password"
  end
end