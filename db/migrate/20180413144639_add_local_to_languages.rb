class AddLocalToLanguages < ActiveRecord::Migration[5.0]
  def change
    add_column :languages, :local, :string
  end
end
