require 'spec_helper'

describe Blog, :type => :model do
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:regex) }
  it { should have_many(:tracks) }

  
end
