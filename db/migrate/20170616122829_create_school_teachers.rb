class CreateSchoolTeachers < ActiveRecord::Migration[5.0]
  def change
    create_table :school_teachers do |t|

      t.belongs_to :school, index: true
      t.timestamps
    end
  end
end
