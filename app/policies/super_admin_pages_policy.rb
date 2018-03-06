# checking if user a superAdmin and letting them access the page.

class SuperAdminPagesPolicy < Struct.new(:user, :superAdminPages)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(SuperAdmin)
  end

end
