class Dog < ApplicationRecord

  validates :name, presence: :true

  def self.random
    Dog.limit(1).order("RANDOM()")
  end
  
end
