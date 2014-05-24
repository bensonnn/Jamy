class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
    	t.string :title
    	t.string :url
      t.string :regex 
      t.timestamps
    end
  end
end
