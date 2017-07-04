class SchoolsController < ApplicationController
  respond_to :html, :json

  def index
    @school=School.all
    respond_with(@school)
  end

  def create
    @school=School.new(school_params)
    @school.save

    render :json => @school

    @schoolTeacher=SchoolTeacher.new
    @schoolTeacher.school_id=@school.id
    @schoolTeacher.save
    @schoolStudent=SchoolStudent.new
    @schoolStudent.school_id=@school.id
    @schoolStudent.save
    @schoolAdmin=SchoolAdmin.new
    @schoolAdmin.school_id=@school.id
    @schoolAdmin.save
  end

  def destroy
    @school = School.find(params[:id])
    @school.destroy
  end



  



  private

  def school_params
    params.require(:school).permit(:name)
  end
end
