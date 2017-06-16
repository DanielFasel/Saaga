class CreateSchoolStudentStudentSpecs < ActiveRecord::Migration[5.0]
  def change
    create_table :school_student_student_specs do |t|

      t.belongs_to :school_student, index: true
      t.belongs_to :student_spec, index: true
      t.timestamps
    end
  end
end
