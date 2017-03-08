# checking if user a teacher or student and letting them access the page.

class ClassesPolicy < Struct.new(:user, :classes)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Teacher)
  end
end
