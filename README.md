# SAAGA

#### Table of content
* [Helpful Commands](#helpful-commands)
* [Current Version](#current-version)
    - [In progress](#in-progress)
    - [Completed](#completed)
* [Database diagrams and Wireframes](#database-diagrams-and-wireframes)
* [Environment Setup](#environment-setup)
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
* [Schedule](#schedule)


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
- `rails g`

These are just some of the commands I used the most. There are more commands that might prove useful so I highly suggest to read the [Ruby on rails documentation](http://guides.rubyonrails.org/v5.0/) for more information.


## Current Version

**Version 0.3.0**

### In progress :
- Adding schools
- Deleting schools
- Colors for schools
- Management of students
- Management of classes

### Completed :
- ~~Schools structure in database~~
- ~~displaying teacher's schools and students~~

---
**Branching:** we should try to stick to a structure to avoid repeating the messy branching I have done so far. Here is a intersting example of a way of doing it. [Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)

---


## Database diagrams and Wireframes
The Database diagrams and wireframes can be found in a shared folder called *Saaga* on the site [Mega](https://mega.nz). If you do not have access to it contact us.



## Environment setup
The following installations are required to work with Saaga.
- Ruby 2.3.1
- Ruby on rails 5.0.1
- Postgresql 9.6.3
- NodeJS 6.10.3
- Yarn & NPM
- Github

If you are not sure how to proceed follow the installation guides below.

### Ruby
### Ruby on rails
### Postgrsql
### NodeJS
### Yarn and NPM
### Github




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

There are three distinct SPA: the teacher's side, the student's side, and the admin's side. All of them share common code in the *general_helpers* (`app\javascript\packs\general_helpers`). Each SPA is composed of three main elements :
- a main javascript file
- vue single file components
- a store

The **main javascript file** gets loaded from a static page and then loads all the relevant components and dependencies.

**Vue single file components** combine the html, javascript and css in one file. These files are then structured in components that should be as reusable as possible so they can be reused and loaded in other components.

The **store** is using *Vuex* and is the place where all values are saved and manipulated to avoid having to deal with them in the *.vue* files.

For a better understanding of VueJs and Vuex read their respective documentation. [VueJs-documentation](https://vuejs.org/v2/guide/) [Vuex-documentation](https://vuex.vuejs.org/en/)




## Schedule
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
