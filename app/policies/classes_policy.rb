class ClassesPolicy < Struct.new(:user, :classes)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(teacher)
  end
end
