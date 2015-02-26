class MainController < ApplicationController
  def index
    @events = Event.order('start_at DESC').all
  end
end
