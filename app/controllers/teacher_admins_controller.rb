class TeacherAdminsController < ApplicationController
respond_to :html, :json

  def schools
    @user=current_user
    @tspec=@user.teacher_spec
    @tad=@tspec.teacher_admin
    @schools=@tad.schools.all

    respond_with(@schools)
  end



end
