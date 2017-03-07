class GlobalPolicy < Struct.new(:user, :global)

   class Scope
     def resolve
       scope
     end
   end

  def index?
     user.is_a?(Teacher) or  user.is_a?(Student)
  end
end
