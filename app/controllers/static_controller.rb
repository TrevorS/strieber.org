class StaticController < ApplicationController

  def index
    puts 'index method'
    @page ||= 'me'
    render 'static/index'
  end

  def projects
    puts 'projects method'
    @page = 'projects'
    render 'static/index'
  end

  def contact
    puts 'contact method'
    @page = 'contact'
    render 'static/index'
  end
end
