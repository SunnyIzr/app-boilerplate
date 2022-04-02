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




NOTE: The following events will require a docker re-build:
- Adding/removing gems from Gemfile
- Altering appRouter