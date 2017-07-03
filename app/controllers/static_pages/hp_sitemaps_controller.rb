class StaticPages::HpSitemapsController < ApplicationController

	# to allow visiting this page without being logged in.
	skip_before_action :authenticate_user!, :only => [:index]

	def index
	end

end
