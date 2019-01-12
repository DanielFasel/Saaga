# SAAGA

#### Table of content
* [Helpful Commands](#helpful-commands)
* [Where are we?](#where-are-we)
    - [Needed for 0.4.0](#needed-for-040)
* [Database diagrams and Wireframes](#database-diagrams-and-wireframes)
* [How to start?](#how-to-start)
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

- `rails c --sandbox` allows to access database through the terminal

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


## New Installation Guide
- Fresh install
- Ruby (rbenv)
- NodeJs (nvm)
- Python (pyenv)
- Yarn
- Rails (for the specific ruby version)'
- Postgresql
- PgAdmin4
- Initial Setup

### Fresh Install
I use mainly Fedora and therefore this following guide will be with Fedora (It's kind of for me so If you are using a different Distro deal with it).

After a fresh Fedora install, in this case Fedora 29, a few things need to be done:

1. Updating the hole system using: `sudo dnf update`.
2. Add the rpmFusion repositories.
3. Use Tweaks (install if needed via Software) to remove the Background Logo, add the Places Status Indicator, the Minimize and Maximize buttons.
4. Install the Workspaces to Dock and Dash to Docks Extentions (and all other desired extentions like Weather or Pomodoro for exaxmple).
6. Install a text editor. For example Visual Code (with this guide: https://code.visualstudio.com/docs/setup/linux).
7. Install a git system. For example GitKraken (with these guides: https://blog.scottlowe.org/2018/05/01/installing-gitkraken-on-fedora-27/ , https://gist.github.com/aelkz/17528d2f6a5db73185c7dfbd28e49d18. As mentioned in the comments, `sudo dnf install libgnome-keyring` is needed for Fedora 29).
8. Install various browsers to test the website.

Once these steps are done it is time to install the development specific programs and dependencies. 


### Ruby

To install Ruby we will use *rbenv* (*rvm* would be an other option), which is a version manager, instead of the basic Ruby packages of the official Fedora repositoriy. *Rbenv* allows for a better management of the different versions of Ruby required during the development phase.

The installation is done following this guide: https://developer.fedoraproject.org/start/sw/web-app/rails.html. Once the dependencies, *rbenv* and *ruby-build* are installed run the *rbenv-doctor* script to verify the installation. The script can be found on the official Git page of *rbenv*: https://github.com/rbenv/rbenv#installation.

If the result is positive we can proceed and install Ruby itself. To install simply use the following command: `rbenv install *version (ex. 3.2.1)*`. To check which versions are available use this command: `rbenv install -l`. To set the global version use `rbenv global *version*` and to set a local version `cd` into the desired directory and use `rbenv local *version*` which creates a `.ruby-version` file indicating the set version. More commands and options can be found on the Git readme file.

One thing to remember is that one should use the command `rbenv rehash` after installing a new version of Ruby or a new Gem.

### NodeJs

To install Nodejs we will also use a version manager called *nvm* this time. To install follow the installation process explained here: https://github.com/creationix/nvm#install-script.

The commands are similar to those used with *rbenv*. To install the latest version the command is `nvm install node`. The other comands are explained on their Readme file.

### Python

To install Python we will use *pyenv*. To install follow this guide: https://github.com/pyenv/pyenv-installer. Don't forget to install the prerequisites and add the Path to the `.bashrc` file.

The commands to install and manage different python versions can be found here: https://github.com/pyenv/pyenv/blob/master/COMMANDS.md. They are mostly the same as with *rbenv*. As with rbenv `pyenv rehash`should be run after installing a new version.

### Yarn

Yarn can be installed using this guide: https://yarnpkg.com/en/docs/install#centos-stable.

### Rails

Rails can be installed according to this guide:
https://developer.fedoraproject.org/start/sw/web-app/rails.html. If a speccific version is required (which will be) use this command: `gem install rails -v 5.2.0`.

Remember that the gems like rail (at least I think so) are installed with the ruby version set in this directory. Also remember that after installing a new gem as well as a new ruby version the following   command should be run: `rbenv rehash`.

After installing rails also install `bundler` with the command `gem install bundler`. 

### Postgresql

First install Posgresql from their official webpage: https://www.postgresql.org/download/linux/redhat/. After starting the service follow the steps given below taken from this guide: https://fedoraproject.org/wiki/PostgreSQL.

1. `sudo su - postgres` 
2. `psql`
3. `\password postgres` then chose a password for postgres
4. `create role username with createdb login password 'password';`, create a user with rights to create databases.
5. Modify the `postgresql.conf` file that is located in this directory  `/var/lib/pgsql/data/`. From `listen_addresses = 'localhost'` to `listen_addresses = '*'`.
6. Modify the `pg_hba.conf`file that is locatedin the same directory. Change `indent` to `md5`. From the fields shown in the guide.

Afterr this is done restart the service: `systemctl restart postgresql-11`. Also install postgrel-devel, that is needed for the pg gem, using  the command `sudo dnf install postgresql-devel`.

### PgAdmin4

To install run the following commands:
1. `sudo dnf install pgadmin4`
2. `sudo /usr/pgadmin4/bin/pgadmin4-web-setup.sh`, this script will ask you for email and password to login to Pgadmin4.
3. `sudo dnf install pgadmin4-desktop-gnome`

These steps were taken from this guide: https://people.planetpostgresql.org/devrim/index.php?/archives/96-Installing-pgAdmin4-3.X-on-RHEL-CentOS-7-and-Fedora-27.html.
### Initial Setup

If you are creating a new application use the `rails new` command. Since rails 5.1 webpack is integrated into rails. This allows us to use an option of the `rails new` command to install VueJs as we generate a new Rails app. Postgresql can also be setup in this initial phase with the help of an option. In other words the command to generate to initial files of our particular environement goes as follows: `rails new myapp --webpack=vue -d postgresql`. 

If on the other hand you are just seting up a dev machine you will need to get the source code from Git. Either use the terminal or GitKraken to download the code and then `cd` in the newly created folder.
There run : `bundle install`. This will install all the gems used by the webpage. If you can't install **pg '0.21.0'** you might need to install it manually before running `bundle install` using this command: `gem install pg -v '0.21.0' -- --with-pg-config=[path to pg_config]`. But check the log to make sure it is because it can't find **pg_config**.

You can now create the databases needed for the webpage. The default names, usernames and passwords of these databases can be found here : `config/databas.yml`. Only the development and test database is needed.

After all is installed you can run `rails db:migrate` and `rails db:seed` to create and populate the database. Now you are ready to go and can start the server using `rails s` and  `./bin/webpack-dev-server` in two distinct terminal windows.

## Server Setup

### DigitalOcean
First create an account. Then create a new project. In this new project we can create droplets. In my case I chose Fedora (because my dev-machine uses fedora). To add the ssh keys use the `ssh-keygen` command on the local machine. This will create the public and private keys. I used the following command `ssh-keygen -a 1000 -b 4096 -C "" -E sha256 -o -t rsa` according to the first answer: https://www.digitalocean.com/community/questions/ubuntu-16-04-creating-new-user-and-adding-ssh-keys.

Once this is done get the public key and add it to the droplet. The public key is stored in the following folder: `/home/.ssh/id_rsa.pub`. Then finalize the creation of the droplet. After the droplet is created request a static IP. Called floating Ip with DigitalOcean. Append the droplet to this IP and then use the same IP to forward the domain name traffic to this new server. To do that go to Godaddy and click on: manage dns. Add the IP under the column value of the type A. 

The next step is to add a new user on the server. Otherwise we would have to use the root user which is not good. To add the user follow the instructions given in the answer above.

Then follow the DigitalOcean guide to setup a fedora server. 
https://www.digitalocean.com/community/tutorials/initial-setup-of-a-fedora-22-server

In the future one should consider using an other operating system than fedora for the server due to unstability and better documentation for other operating systems like ubuntu for example.

Once this is done the basic server setup is done and the environment of the server can be installed.

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
