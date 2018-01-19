class CreateTranslations < ActiveRecord::Migration[5.0]
  def change
    create_table :translations do |t|

      t.string :translation
      t.belongs_to :word
      t.belongs_to :language
      t.belongs_to :user

      t.timestamps
    end
  end
end
