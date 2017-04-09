class User < ActiveRecord::Base
  has_many :lists
  has_many :items, through: :lists

    #commented out has_secure_password while testing user authentication from command line
    #password_digest is the attribute in column, user is created in console with:
    #User.create!({:username => "dake", :password_digest => "helloworld"})
    #has_secure_password
end
