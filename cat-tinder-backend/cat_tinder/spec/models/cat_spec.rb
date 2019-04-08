require 'rails_helper'

RSpec.describe Cat, type: :model do
    it "should validate name" do
        cat = Cat.create
        expect(cat.errors[:name]).to_not be_empty
    end
end
RSpec.describe Cat, type: :model do
    it "should be a valid age" do
        cat = Cat.create
        expect(cat.errors[:age]).to_not be_empty
    end
end
RSpec.describe Cat, type: :model do
    it "should be a valid enjoyment" do
        cat = Cat.create
        expect(cat.errors[:enjoys]).to_not be_empty
    end
end
