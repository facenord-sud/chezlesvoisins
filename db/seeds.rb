# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.find_or_create_by!(email: 'admin@example.com') do |user|
  user.password = 'password'
  user.password_confirmation = 'password'
end

50.times do |i|
  e = Event.new(name: "Titre #{i}", description: "Description #{i}", start_at: Time.now + 1.week, artist: "Artist #{i}")
  e.end_at = Time.now + 1.week + 1.day if rand(0..1) == 0
  e.save!
end