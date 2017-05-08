class CreateNormalclassStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :normalclass_students do |t|


      t.belongs_to :student, index: true
      t.belongs_to :normalclass, index: true


      t.timestamps
    end
  end
end
