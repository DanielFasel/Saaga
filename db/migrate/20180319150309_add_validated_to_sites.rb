class AddValidatedToSites < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :validated, :boolean
  end
end
