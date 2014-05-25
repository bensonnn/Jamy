class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.text :src
      t.string :track_id
      t.string :artwork_url
      t.string :uploaded
      t.string :permalink_url
      t.text :purchase_url
      t.integer :blog_id
      t.timestamps
    end
  end
end