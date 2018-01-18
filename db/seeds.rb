#Goes through the /seeds directory and loads all seed files

Dir[File.join(Rails.root, 'db', 'seeds/**/*', '*.rb')].sort.each do |seed|
  load seed
end
