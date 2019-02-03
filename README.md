# SAAGA

#### Table of content
* [Helpful Commands](#helpful-commands)
* [Where are we?](#where-are-we)
    - [Needed for 0.4.0](#needed-for-040)
* [Database diagrams and Wireframes](#database-diagrams-and-wireframes)
* [Local Machine Setup Guide](#local-machine-setup-guide)
    - [Fresh Install](#fresh-install)
    - [Ruby](#ruby)
    - [NodeJS](#nodejs)
    - [Python](#python)
    - [Yarn](#yarn)
    - [Rails](#rails)
    - [Postgresql](#postgreql)
    - [PgAdmin4](#pgadmin4)
    - [Initial Setup](#initial-setup)
* [Server Setup Guide](#server-setup-guide)
    - [DigitalOcean](#digitalocean)
    - [Dependencies](#dependencies)
    - [Manual Deployment](#manual-deployment)
    - [Automatic deployement using Capistrano](#automatic-deployment-using-capistrano)
* [File Structure](#file-structure)
    - [Backend](#backend)
    - [Frontend](#frontend)
        - [Static Pages](#static-pages)
        - [SPA](#spa)
* [Roadmap](#roadmap)


## Helpful Commands

This needs to be updated (03.02.2019)

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


## Local Machine Setup Guide
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

On the server install using the second link and the git method. Remember to first install the dependencies from the first link. Also remember to append the given command to the `/.bash_profile` after after setting up rbenv in the shell. And to install the ruby-build as a plugin.

If the result is positive we can proceed and install Ruby itself. To install simply use the following command: `rbenv install *version (ex. 3.2.1)*`. To check which versions are available use this command: `rbenv install -l`. To set the global version use `rbenv global *version*` and to set a local version `cd` into the desired directory and use `rbenv local *version*` which creates a `.ruby-version` file indicating the set version. More commands and options can be found on the Git readme file.

One thing to remember is that one should use the command `rbenv rehash` after installing a new version of Ruby or a new Gem.

### NodeJs

To install Nodejs we will also use a version manager called *nvm* this time. To install follow the installation process explained here: https://github.com/creationix/nvm#install-script.

The commands are similar to those used with *rbenv*. To install the latest version the command is `nvm install node`. The other comands are explained on their Readme file.

### Python

To install Python we will use *pyenv*. To install follow this guide: https://github.com/pyenv/pyenv-installer. Don't forget to install the prerequisites and add the Path to the `.bashrc` file. On the server, if it doesn't work after exiting and loggin in again add the path also to the `.bash_profile` file.

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

## Server Setup Guide

### DigitalOcean
First create an account. Then create a new project. In this new project we can create droplets. In my case I chose Fedora (because my dev-machine uses fedora). To add the ssh keys use the `ssh-keygen` command on the local machine. This will create the public and private keys. I used the following command `ssh-keygen -a 1000 -b 4096 -C "" -E sha256 -o -t rsa` according to the first answer: https://www.digitalocean.com/community/questions/ubuntu-16-04-creating-new-user-and-adding-ssh-keys.

Once this is done get the public key and add it to the droplet. The public key is stored in the following folder: `/home/.ssh/id_rsa.pub`. Then finalize the creation of the droplet. After the droplet is created request a static IP. Called floating Ip with DigitalOcean. Append the droplet to this IP and then use the same IP to forward the domain name traffic to this new server. To do that go to Godaddy and click on: manage dns. Add the IP under the column value of the type A. 

Once the droplet is connected to the domain name login using this command `ssh root@saaga.org`. Once connected update the server using `sudo dnf update` then reboot the server using `sudo shutdown -r now`. After that install nano (terminal text editor) using `sudo dnf install nano`.

The next step is to prepare the directory for the new user, add that user and grant him sudo rights. This is to prevent to login as root as it leads to security risks. To do this I followed the answer of the previous link. 

1. `mkdir -p /home/username/.ssh`
2. `touch /home/username/.ssh/authorized_keys`
3. `useradd -d /home/username username`, this might gives some errors but as far as I know they don't matter (at least it works anyways).
4. `gpasswd -a username wheel`, the answer being for Ubuntu this is the Fedora equivalent to give sudo rights taken from the guide linked below.
5. `chown -R username:username /home/username/`, the next commands fix the permissions for the new user.
6.  ~~`chown root:root /home/username`~~, is not used since it causes problems when installing rbenv.
7. `chmod 700 /home/username/.ssh`
8. `chmod 644 /home/username/.ssh/authorized_keys` Once I understand it better a more comprehensive guide for permissions will have to be made (for example with the addition of SeLinux).
9. `passwd username`, while this login method is or will be disabled I still add a password incase.

Now the public key stored on the local machine can be added to this file: `/home/username/.ssh/authorized_keys` with the help of nano. Once this is done it is possible to login as the new user with the following command `ssh username@saaga.org`.

Then follow the DigitalOcean guide to setup a fedora server starting from chapter 2 after the installation of nano. 
https://www.digitalocean.com/community/tutorials/initial-setup-of-a-fedora-22-server

In the future one should consider using an other operating system than fedora for the server due to unstability and better documentation for other operating systems like ubuntu for example.
Once this is done the basic server setup is done and the environment of the server can be installed.

### Dependencies

Once the server is initialised it is time to install the dependencies. To do so use the previous steps meant for the local developement machine without the PgAdmin 4 since it is a graphical interface.


### Manual Deployment
Basic steps to fetch the website from a github repository and clone it to the server.
- `ssh-keygen`, on the server. A more secure key could be generated according to the example above.
- copy the public key from the `/home/username/.ssh` directory. It is called `id_rsa.pub`. The `vi` editor is required instead of `nano`.
- Add the key to the deplo keys of the application's git repository. 
- Create a directory that will host the website. For example `mkdir /home/username/apps`.
- `cd` into that directory and initialise git (`git init`) then clone the desired repository: `git clone "ssh-clone-url"`.
- Once this is done use `bundle install` in the apps directory.

The next steps are taken from this guide: https://www.digitalocean.com/community/tutorials/how-to-deploy-a-rails-app-with-puma-and-nginx-on-ubuntu-14-04.

- Check the `database.yml` file incase it hasn't been done before. Not all is needed, I just added the password for example.
- install rbenv-vars
- Use the command `rake secret` in the apps directory and copy the secret.
- Create the `.rbenv-vars` file in the same directory.
- Add the secret, appname and password according to the guide.
- Check if it worked by using the command `rbenv vars` within that directory.
- Create the database (remember to use `rbenv rehash` if needed) with the command: `RAILS_ENV=production rake db:create` use `migrate`, `seed`, `precompile` if necessary. 

Next comes the Puma configuration.

- Check the amount of processor the server has using: ` grep -c processor /proc/cpuinfo`.
- Open the config/puma.rb file which is in the apps directory and paste the following configuration instead of the default ones: 

---
   <pre> # Change to match your CPU core count
workers 2

# Min and Max threads per worker
threads 1, 6

app_dir = File.expand_path("../..", __FILE__)
shared_dir = "#{app_dir}/shared"

# Default to production
rails_env = ENV['RAILS_ENV'] || "production"
environment rails_env

# Set up socket location
bind "unix://#{shared_dir}/sockets/puma.sock"

# Logging
stdout_redirect "#{shared_dir}/log/puma.stdout.log", "#{shared_dir}/log/puma.stderr.log", true

# Set master PID and state locations
pidfile "#{shared_dir}/pids/puma.pid"
state_path "#{shared_dir}/pids/puma.state"
activate_control_app

on_worker_boot do
  require "active_record"
  ActiveRecord::Base.connection.disconnect! rescue ActiveRecord::ConnectionNotEstablished
  ActiveRecord::Base.establish_connection(YAML.load_file("#{app_dir}/config/database.yml")[rails_env])
end
</pre>

---
- The only required change (unless more control is needed) is the worker number to adapt it to the CPU core count of the server which we got before.
- Add the line `daemonize true` to the `puma.rb` file which will allow Puma to run in the background.
- Make the directories that are mentionned in the config file: `mkdir -p shared/pids shared/sockets shared/log`.
- Skip the Puma UpStart since this guide is for ubuntu and it wouldn+t work in Fedora.

Now let's configure `Nginx`

- Add a file to the `/etc/nginx/conf.d` directory that ends with `.conf`. The actual name doesn't matter since all file ending with .conf will get included in the default configuration file.
- Copy and paste the following code from the guide and adjust the paths for the directories and root as well as the server name (saaga.org):

---
<pre>
upstream app {
    # Path to Puma SOCK file, as defined previously
    server unix:/home/deploy/appname/shared/sockets/puma.sock fail_timeout=0;
}

server {
    listen 80;
    server_name localhost;

    root /home/deploy/appname/public;

    try_files $uri/index.html $uri @app;

    location @app {
        proxy_pass http://app;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
    }

    error_page 500 502 503 504 /500.html;
    client_max_body_size 4G;
    keepalive_timeout 10;
}
</pre> 

---

- Remove the server from the default configuration file located at `/etc/nginx/nginx.conf`. 
- Change if necessary `type_hash_max_size` to 4096.
- Start nginx: `systemctl start nginx.service`.
- If necessary fix the `Pid` error with the following commands according to this guide: https://www.cloudinsidr.com/content/heres-fix-nginx-error-failed-read-pid-file-linux/.
- (`mkdir /etc/systemd/system/nginx.service.d`, might give an error but it doesn't matter)
- (`printf "[Service]\nExecStartPost=/bin/sleep 0.1\n" > /etc/systemd/system/nginx.service.d/override.conf`, as root user)
- (`systemctl daemon-reload`, then restart nginx using: `systemctl restart nginx`)

Now that both Puma and Nginx it is time to start them up.

- Start Nginx according to the previous given commands
- Start Puma with : `RACK_ENV=production bundle exec puma` withing the app's directory if starting for the first time (not 100% sure about this command) or with this command once started once, `bundle exec pumactl -P /home/username/apps/appname/shared/pids/puma.pid start/restart/stop`
- Disable SeLinux unless you really know what you are doing using this command with sudo: setenforce 0. Getenforce to check that it is indeed Permissive.
- If you want to see the rails errors you need to change `config.conside_all_requests_local = true` in the `config/environments/production.rb` file within the app's directory. 

### Automatic deployement using Capistrano

This needs to be done since an automatic deployment will be required once the website is actually live. For the moment the manual deployment works for my needs.

## File Structure
Needs to be updated (03.02.2019)

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
