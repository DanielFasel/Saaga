class SchoolStudentsController < ApplicationController
  respond_to :html, :json
  def index
    @school=School.find(params[:id])
    @schoolstudent=@school.school_student
    @students=@schoolstudent.users
    respond_with(@students)
  end

end
