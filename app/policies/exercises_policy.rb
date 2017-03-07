class ExercisesPolicy < Struct.new(:user, :exercises)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Teacher)
  end
end
