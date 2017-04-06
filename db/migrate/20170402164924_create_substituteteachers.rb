class CreateSubstituteteachers < ActiveRecord::Migration[5.0]
  def change
    create_table :substituteteachers do |t|
      t.date :expiration


         t.integer :teacher_id
      t.timestamps
    end

    add_index :substituteteachers, :teacher_id

  end
end
