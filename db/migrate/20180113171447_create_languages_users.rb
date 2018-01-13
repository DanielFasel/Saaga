class CreateLanguagesUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :languages_users, :id => false do |t|
      t.integer :user_id
      t.integer :language_id
    end
  end
end
