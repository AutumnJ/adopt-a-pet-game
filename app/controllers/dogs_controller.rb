class DogsController < ApplicationController

  def index
    @dogs = Dog.find_by(user_id: params[:user_id])

    render json: @dogs
  end

  def create
    @dog = Dog.new(dog_params)
  end

  def show
    @dog = Dog.find_by(user_id: params[:user_id], id: params[:id])

    render json: @dog
  end

  def destroy
    @dog = Dog.find(params[:id])
    @dog.destroy

    #add else statement -> look at notes
  end 

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
