class ScoursesPolicy < Struct.new(:user, :scourses)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Student)
  end
end
