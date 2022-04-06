class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: [:dashboard]

  def dashboard
    render json: current_user
  end
end