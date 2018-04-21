class DogsController < ApplicationController

  # Not currently using:
  # def index
  #   @dogs = Dog.find_by(user_id: params[:user_id])

  #   render json: @dogs
  # end

  def create
    @dog = Dog.new(dog_params)
    @dog.save

    render json: @dog
  end

  def random
    @dog = Dog.random

    render json: @dog
  end

  # Not currently using:
  # def destroy
  #   @dog = Dog.find(params[:id])
  #   @dog.destroy
  # end 

  private
    def dog_params
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
