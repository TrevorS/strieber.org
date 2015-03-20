class StaticController < ApplicationController
  def index
    @page ||= 'me'
  end

  def projects
    @page = 'projects'
    render :index
  end

  def contact
    @page = 'contact'
    render :index
  end
end
