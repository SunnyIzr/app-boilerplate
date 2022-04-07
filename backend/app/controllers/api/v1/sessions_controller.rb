class Api::V1::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      session[:user_id] = @user.id
      render json: @user
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

  private

  def login_params
    params.require(:user).permit(:email, :password)
  end
end