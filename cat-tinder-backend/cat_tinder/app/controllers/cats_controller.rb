class CatsController < ApplicationController
  def index
    cats = Cat.all
    render json: cats
  end

  def create
    cat = Cat.create(cat_params)
    if cat.valid?
        cats = Cat.all
        render json: cats
     else
       render json: cat.errors, status: :unprocessable_entity
     end
  end

  def destroy
      cat = Cat.destroy(params[:id])
      cats = Cat.all
      render json: cats
  end
private
  # Handle strong parameters, so we are secure
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
end
