class HomeworksPolicy < Struct.new(:user, :homeworks)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Student)
  end
end
