User.create!(
    username: 'ndake11@gmail.com',
    password: 'password',
)

User.create!(
    username: 'premium@gmail.com',
    password: 'password',
)

User.create!(
    username: 'standard@gmail.com',
    password: 'password',
)

users = User.all

10.times do
  List.create!(
      name:  Faker::Name.title,
      user_id: users.sample.id,
      permission: private
  )
end
lists = List.all

100.times do
  Item.create!(
      description: Faker::Lorem.sentence,
      list_id: lists.sample.id,
      completed: false
  )
end

100.times do
  Item.create!(
      description: Faker::Lorem.sentence,
      list_id: lists.sample.id,
      completed: true
  )
end

items = Item.all