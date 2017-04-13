class Api::ListsController < ApiController

  before_action :authenticated?

  def create
    list = List.new(params.require(:list).permit(:name, :permission))

    if list.save
      render json: list
    else
      render json: { errors: list.errors.full_messages, status: :unprocessable_entity}
    end
  end

  def destroy
    list = List.find(params[:id])
    list.destroy

    render json: {}, status: :no_content
  rescue ActiveRecord::RecordNotFound
    render :json => {}, :status => :not_found
  end
end