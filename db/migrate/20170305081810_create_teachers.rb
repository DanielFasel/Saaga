class CreateTeachers < ActiveRecord::Migration[5.0]
  def change
    create_table :teachers do |t|

      t.string :type

      t.integer :teacher_id
      t.timestamps
    end

add_index :teachers, :teacher_id

  end
end
