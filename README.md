# README

1. Create rails app in a new folder
Follow steps here: https://docs.docker.com/samples/rails/
- Create folder with app name
- Create Dockerfile, Gemfile, Gemfile.lock, entrypoint.sh, docker-compose.yml as per https://docs.docker.com/samples/rails/
- Change Gemfile to 7.0
- Change Dockerfile to Ruby 3.0.0
- Run `docker-compose run --no-deps web rails new . --force -T --database=postgresql --api`

2. Pull in boilerplate that contains React setup (/`frontend`), Nginx config (`/config`), tmp (`/tmp`) make sure this is empty though and replace `docker-compose.yml`. React setup contains:
- Vite server
- Redux toolkit
- React Router
- NOTE: May need to alter frontend Dockerfile to install vite globally `RUN npm install -g vite`
- NOTE: Make sure that node_modules is not copied over from frontend folder
- NOTE: May need to manually run `$ dco run frontend npm install` which will install packages on container

3. Copy rails files from rails app created in Step 1 to backend folder. Some notes:
- Copy `.gitignore`, `/backend/.gitignore` and `/backend/.dockerignore` files from boilerplate
- Remove docker-compose.yml from rails folder
- Copy config/database.yml from boilerplate (Make sure to replace db name)
- Update Dockerfile from boilerplate
- NOTE: You may have to remove the /tmp folder if you have db issues when creating the database
- NOTE: You'll have to namespace rails routes to api/v1 in order to view on NGINX server

***
#### Check
Run the following
- `$ dco build`
- `$ dco up`

Make sure the following is working:
- `http://localhost:4000/`: This should show React frontend
- `http://localhost:4000/`: This should show Rails backend
- `http://localhost:8080/`: This should show React frontend on NGinx server
- `http://localhost:8080/api`: This should show Rails backend on NGinx server

***

4. Add MUI and fonts by running the following:
`dco run frontend npm install @mui/material @emotion/react @emotion/styled`
`dco run frontend npm install @fontsource/roboto` (Be sure to import fonts in entrypoint)

5. Add sidekiq
- Add `gem "sidekiq"` to Gemfile
- Update config/application.rb with `config.active_job.queue_adapter = :sidekiq`
- Add sidekiq initializer
- Add sidekiq routes
- Update docker-compose.yml

NOTE: The following events will require a docker re-build:
- Adding/removing gems from Gemfile
- Altering appRouter


### To Run
`dco build`
`dco up`
