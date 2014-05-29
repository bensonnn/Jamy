require 'spec_helper'

describe Track, :type => :model do
  it { should validate_uniqueness_of(:track_id) }
  it { should validate_presence_of(:track_id) }
  it { should belong_to(:blog) }

  
end
