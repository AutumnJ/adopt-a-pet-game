class CatsController < ApplicationController

  # Not currently using:
  # def index
  #   @cats = Cat.all

  #   render json: @cats
  # end

  def create
    cat = Cat.new(cat_params)
    if cat.save
         render json: cat
      else
         render json: { message: cat.errors }, status: 400
      end
  end

  def show
    @cat = Cat.random

    render json: @cat
  end

  # Not currently using:
  # def destroy
  #   @cat = Cat.find(params[:id])
  #   @cat.destroy
  # end 

   private
    def cat_params
       params.permit(
        :cat,
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
