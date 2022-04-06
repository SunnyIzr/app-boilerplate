class Api::V1::StaticPagesController < ApplicationController
  def home
    p '*' * 500
    p session
    p session[:user_id]
    p '*' * 500
    if session[:user_id]
      render json: {logged_in: true, message: "Welcome back, User##{session[:user_id]}"}
    else
      render json: {logged_in: false, message: 'You are not logged in!'}
    end
  end

  def login
    session[:user_id] = 377
    render json: {login: 'success'}
  end

  def logout
    session.delete(:user_id)
    render json: {logout: 'success'}
  end
end
