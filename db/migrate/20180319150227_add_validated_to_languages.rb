class AddValidatedToLanguages < ActiveRecord::Migration[5.0]
  def change
    add_column :languages, :validated, :boolean
  end
end
