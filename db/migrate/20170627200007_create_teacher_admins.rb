class CreateTeacherAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :teacher_admins do |t|

      t.belongs_to :teacher_spec, index: true
      t.timestamps
    end
  end
end
