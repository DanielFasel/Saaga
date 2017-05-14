class NormalclassesController < ActionController::Base


  def create

    @normalclass = Normalclass.new(normalclass_params)
    @normalclass.save

    redirect_to teacher_path, :notice => "The class was added"


  end


  def destroy
    @normalclass = Normalclass.find(params[:id])
    @normalclass.destroy
    redirect_to teacher_path, :notice => "The class was deleted"
  end



  private


  def normalclass_params

    params.require(:normalclass).permit(:name)

  end




end
