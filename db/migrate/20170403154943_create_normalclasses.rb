class CreateNormalclasses < ActiveRecord::Migration[5.0]
  def change
    create_table :normalclasses do |t|

      t.string :name

      t.timestamps
    end

    add_index :normalclasses, :name

  end
end
