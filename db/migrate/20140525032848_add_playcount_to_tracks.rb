class AddPlaycountToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :playcount, :integer
  end
end
