class Api::V1::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: {
        message: "Welcome #{@user.first_name}."
      }
    else  
      render json: {
        errors: "Invalid credentials"
      }, status: :forbidden
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      message: "Logout successful."
    }
  end
end