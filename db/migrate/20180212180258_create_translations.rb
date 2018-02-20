class CreateTranslations < ActiveRecord::Migration[5.0]
  def change
    create_table :translations do |t|

      t.string :translation
      t.string :temporary
      t.boolean :validated
      t.belongs_to :language
      t.belongs_to :user

      t.belongs_to :word

      t.timestamps
    end
  end
end
