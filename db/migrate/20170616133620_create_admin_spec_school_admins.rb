class CreateAdminSpecSchoolAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_spec_school_admins do |t|

      t.belongs_to :admin_spec, index: true
      t.belongs_to :school_admin, index: true
      t.timestamps
    end
  end
end
