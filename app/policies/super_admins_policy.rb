# checking if user a superAdmin and letting them access the page.

class SuperAdminsPolicy < Struct.new(:user, :superAdmins)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(SuperAdmin)
  end

end
