class CreateStudentSpecs < ActiveRecord::Migration[5.0]
  def change
    create_table :student_specs do |t|

      t.belongs_to :user, index: true
    
      t.timestamps
    end
  end
end
