class Tweet < ActiveRecord::Base
	belongs_to :user, class_name: 'User', foreign_key: 'user_id'

	def as_json(options={})
		super(methods: [:name])
	end

	def name
		user.display_name
	end

end
