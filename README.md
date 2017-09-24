# SAAGA

#### Table of content
* [Helpful Commands](#helpful-commands)
* [Where are we?](#where-are-we?)
    - [Needed for 0.4.0](#Needed-for-0.4.0)
* [Database diagrams and Wireframes](#database-diagrams-and-wireframes)
* [How to start?](#how-to-start?)
    - [Ruby](#ruby)
    - [Ruby on rails](#ruby-on-rails)
    - [Postgresql](#postgreql)
    - [NodeJS](#nodejs)
    - [Yarn and NPM](#yarn-and-npm)
    - [Github](#github)
* [File Structure](#file-structure)
    - [Backend](#backend)
    - [Frontend](#frontend)
        - [Static Pages](#static-pages)
        - [SPA](#spa)
* [Roadmap](#roadmap)


## Helpful Commands
Server commands:
- `rails s` or `rails server` is used to start the rails server. This allows the site to be accessible at `localhost:3000`.
- `./bin/webpack-dev-server` starts the NodeJs server for the SPA's (Singe Page Apps). For more details on the webpacker integration watch their [ReadMe](https://github.com/rails/webpacker) file.

Database commands:
- `rails db:drop`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed`

Testing commands:
- `rails test`

Scaffolding commands:
- `rails g` you can then add "controllers", "models" and so on.

These are just some of the commands I used the most. There are more commands that might prove useful so I highly suggest to read the [Ruby on rails documentation](http://guides.rubyonrails.org/v5.0/) for more information.


## Where are we?

**Version 0.3.0** / branches:
  - master
  - 0.3.0_homepage
  - 0.3.0_class_management

### Needed for 0.4.0
- Menu for homepage, v1 **(in progress)**
- drawer menu for homepage, v1 **(in progress)**
- secondary drawer menu for homepage, v1 **(in progress)**
- general structure for all pages of the homepage
- Adding schools
- Deleting schools
- Colors for schools
- Management of students
- Management of classes
- ~~(completed) Schools structure in database~~
- ~~(completed) displaying teacher's schools and students~~
- ~~(completed) refactoring the homepage to a spa~~

---
**Branching:** we should try to stick to a structure to avoid repeating the messy branching I have done so far. Here is a interesting example on how we could do it. [Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)

---


## Database diagrams and Wireframes
The Database diagrams and wireframes can be found in a shared folder called *Saaga* on the site [Mega](https://mega.nz). If you do not have access to it contact Daniel.



## How to start?
The following installations are required to work with Saaga.
- Ruby 2.4.1
- Ruby on rails 5.0.1
- Github
- Postgresql
- NodeJS
- Yarn & NPM

If you are not sure how to proceed follow the installation guides below. The guide is  for Fedora but it should be fairly similar for other linux distributions. I'll do a windows and mac version if needed.  

### Ruby
The first step is to install Ruby. Make sure it is the version 2.4.1 otherwise you might get issues.
On fedora use the command `dnf install ruby` if the version is not right you can find more information about how to choose a particular version here : [rbenv and RVM for example](https://www.ruby-lang.org/en/documentation/installation/)

### Ruby on rails
After you installed Ruby you need to install rails. Follow this [guide](https://developer.fedoraproject.org/tech/languages/ruby/ror-installation.html).
Here it is even more important to have the right version (5.0.1 in our case). So instead of writing `gem install rails` write `gem install rails -v 5.0.1`. In case errors show up read the logs (the path is given in the terminal) and google the problem usually there is a quick fix.

### Github
To use Github you can either use a program with a graphical interface or the Terminal.
The simplest way in my opinion is to use a program (it might be a bit slower but it's easier to begin with). I currently use gitkraken which you can install from here [Gitkraken](https://support.gitkraken.com/how-to-install). Now you can create a folder and clone the Saaga repository.

### Postgrsql

If on linux follow this guide : [installing postgresql](https://www.if-not-true-then-false.com/2012/install-postgresql-on-fedora-centos-red-hat-rhel/). Be careful when changing the password settings to change the postgres password before. Otherwise you won't be able to log in as postgres to create a server. If you did it anyways here is how to fix it : [postgres password](https://askubuntu.com/questions/413585/postgres-password-authentication-fails)

You can now create the databases needed for *Saaga*. The default names, usernames and passwords of these databases can be found here : `config/databas.yml`. Only the development and test database is needed.

After installing postgres you can go into the *Saaga* repository folder and run : `bundle install`. This will install all the gems used by *Saaga*. If you can't install **pg '0.20.0'** you might need to install it manually before running `bundle install` using this command: `gem install pg -v '0.20.0' -- --with-pg-config=[path to pg_config]`. But check the log to make sure it is because it can't find **pg_config**.



### NodeJS
To install *Nodejs* in fedora simply do `dnf install nodjs`. You can find more information for other distributions on their [official website](https://nodejs.org/en/download/).

### Yarn and NPM
*NPM* gets installed with *Nodjs*. Use it to install *Yarn* as follows : `npm install -g yarn`. The -g is to install it globally and is recommended but not required.

---
After all is installed you can run `rails db:migrate` and `rails db:seed` to create and populate the database. Now you are ready to go and can start the server using `rails s` and  `./bin/webpack-dev-server` in two distinct terminal windows.



## File Structure
The files are organized according to the Ruby on rails conventions which is a MVC (Model View Controller). To understand what the different files do read the [Ruby on rails documentation](http://guides.rubyonrails.org/v5.0/)

### Backend

- Routes: `\config\routes.rb`
- Controllers: `\app\controllers\`
- Models: `\app\models\`
- Migrations: `\db\migrate\`
- Seeds: `\db\seeds.rb`
- Tests: `\test`

### Front end
The front end files are split in two: the static pages and the SPA's which use VueJs and therefore have a different structure.

#### Static Pages
The Rails convention seperates the code in views (`app\views\`) and assets (`app\assets\`). The html code is found in the view folder while the css, javascript and images are in the assets folder.  

#### SPA
The Single Page Apps use VueJs and are located here : `app\javascript\packs\`.

There are four distinct SPA: the homepage, the teacher's side, the student's side, and the admin's side. All of them share common code in the *general_helpers* (`app\javascript\packs\general_helpers`). Each SPA is composed of three main elements :
- a main javascript file
- vue single file components
- a store

The **main javascript file** gets loaded from a static page and then loads all the relevant components and dependencies.

**Vue single file components** combine the html, javascript and css in one file. These files are then structured in components that should be as reusable as possible so they can be reused and loaded in other components.

The **store** is using *Vuex* and is the place where all values are saved and manipulated to avoid having to deal with them in the *.vue* files.

For a better understanding of VueJs and Vuex read their respective documentation. [VueJs-documentation](https://vuejs.org/v2/guide/) [Vuex-documentation](https://vuex.vuejs.org/en/)




## Roadmap
The following versions and their content is neither exhaustive nor finale. It's aim is to give a general plan for what is to come.

---

#### ~~0.1.0~~ Completed
- ~~Environment setup~~
- ~~Login with devise~~
- ~~Static pages basic structure~~
- ~~Language selection~~

#### ~~0.2.0~~ Completed
- ~~VueJs setup~~
- ~~Vuex setup~~
- ~~Pundit setup~~
- ~~Webpacker setup~~
- ~~Structure for SPA~~
- ~~Modal windows with VueJs~~
- ~~Menus~~

#### 0.3.0
- Class Management
- Homepage, v1

#### 0.4.0
- Course management

#### 0.5.0
- Course creation

#### 0.6.0
- Feedback

#### 0.7.0
- Homeworks

#### 0.8.0
- Security

#### 0.9.0
- Polishing and tests

---

### Version 1
- Homeworks
- Feedback
- Course creation
- Working Beta

### Version 2
- Global
- Assignments

### Version 3
- Schools + Admins
- Payment
- Student side game

### Version 4
- Polishing
- Security Check
- Full scale deployment

### Version 5

- Release Version
