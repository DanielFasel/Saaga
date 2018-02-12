class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|

      t.string :name
      t.integer :completed
      t.integer :total
      t.belongs_to :site

      t.timestamps
    end
  end
end
