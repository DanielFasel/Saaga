class TeacherSpecsController < ApplicationController
respond_to :html, :json

  def schools
    @user=current_user
    @tspec=@user.teacher_spec
  #not finnished need to redo all 

    respond_with(@tspec)
  end


end
