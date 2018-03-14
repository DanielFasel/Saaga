# checking if user a translator and letting them access the page.

class TranslatorsPolicy < Struct.new(:user, :translators)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Translator)
  end

end
