class CreateSchoolAdminTeacherAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :school_admin_teacher_admins do |t|

      t.belongs_to :teacher_admin
      t.belongs_to :school_admin

      t.timestamps
    end
  end
end
