# checking if user a student and letting them access the page.

class StudentpagesPolicy < Struct.new(:user, :studentpages)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Student)
  end
  
end
