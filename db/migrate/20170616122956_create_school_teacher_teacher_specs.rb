class CreateSchoolTeacherTeacherSpecs < ActiveRecord::Migration[5.0]
  def change
    create_table :school_teacher_teacher_specs do |t|

      t.belongs_to :school_teacher
      t.belongs_to :teacher_spec
      t.timestamps
    end
  end
end
