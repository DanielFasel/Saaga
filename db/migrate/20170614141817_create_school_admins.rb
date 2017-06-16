class CreateSchoolAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :school_admins do |t|

      t.belongs_to :school
      t.timestamps
    end
  end
end
