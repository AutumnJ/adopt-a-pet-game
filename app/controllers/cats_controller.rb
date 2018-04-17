class CatsController < ApplicationController

  def index
    # @cats = Cat.find_by(user_id: params[:user_id])
    #Or should this just return the current user's cats?

    @cats = Cat.all

    render json: @cats
  end

  def create
    cat = Cat.new(cat_params)
    if cat.save
         render json: cat
      else
         render json: { message: cat.errors }, status: 400
      end
  end

  def show
    @cat = Cat.find_by(user_id: params[:user_id], id: params[:id])

    render json: @cat
  end

  def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy

    #add else statement -> look at notes

  end 

   private
    def cat_params
       params.permit(
        :name, 
        :age, 
        :size, 
        :sex, 
        :breed,
        :contact_phone,
        :contact_email,
        :contact_city,
        :photo,
        :user_id,
        :description )
    end
end
