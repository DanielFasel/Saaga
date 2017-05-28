class NormalclassesController < ActionController::Base

  respond_to :html, :json


  def index
    @normalclass=Normalclass.all
    respond_with(@normalclass)

  end

  def create

    @normalclass = Normalclass.new(normalclass_params)
    @normalclass.save

    render :json => @normalclass


  end


  def destroy
    @normalclass = Normalclass.find(params[:id])
    @normalclass.destroy
   
  end



  private


  def normalclass_params

    params.require(:normalclass).permit(:name)

  end




end
