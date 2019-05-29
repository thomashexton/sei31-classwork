class FruitsController < ApplicationController
	def index
		@fruits = Fruit.all.order('created_at DESC')
		respond_to do |format|
			format.html { render :index }
			format.json { render :json => @fruits }
		end
	end

	def create
		@fruit = Fruit.new fruit_params
		if @fruit.save
			redirect_to fruit_path( @fruit.id )
		else
			render :new
		end
	end

	private
	def fruit_params
		params.require( :fruit ).permit( :name )
	end
end
