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
