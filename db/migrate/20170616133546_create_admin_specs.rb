class CreateAdminSpecs < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_specs do |t|

      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
