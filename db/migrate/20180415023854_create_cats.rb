class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :age
      t.string :size
      t.string :sex
      t.string :breed
      t.string :contact_phone
      t.string :contact_email
      t.string :contact_city
      t.string :photo
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
