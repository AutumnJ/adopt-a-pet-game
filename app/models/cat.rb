class Cat < ApplicationRecord

  validates :name, presence: :true

  def self.random
    Cat.limit(1).order("RANDOM()")
  end
  
end
