# README

1. Create rails app in a new folder
Follow steps here: https://docs.docker.com/samples/rails/
- Change Gemfile to 7.0
- Change Dockerfile to Ruby 3.0.0
- Run `docker-compose run --no-deps web rails new . --force -T --database=postgresql --api`

2. Pull in boilerplate that contains React setup, Nginx config and docker-compose. React setup contains:
- Vite server
- Redux toolkit
- React Router

3. Copy rails files from rails app created in Step 1 to backend folder. Some notes:
- Copy .gitignore and .dockerignore files from boilerplate
- Remove docker-compose.yml from rails folder
- Update Dockerfile from boilerplate
- NOTE: You may have to remove the /tmp folder if you have db issues when creating the database
- NOTE: You'll have to namespace rails routes to api/v1 in order to view on NGINX server


NOTE: The following events will require a docker re-build:
- Adding/removing gems from Gemfile
- Altering appRouter