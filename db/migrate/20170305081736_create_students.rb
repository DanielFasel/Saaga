class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|

      t.integer :studentlist_id

      t.integer :user_id
      t.timestamps
    end

    add_index :students, :user_id
  end
end
