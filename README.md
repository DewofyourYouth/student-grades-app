# WebPals Student App

## Set Up Basics

- Assumes node, php, mysql and laravel are installed on system.

### Laravel Backend

- Go to the `wp_students` directory
- Copy the `.env.example` as `.env`
- In `.env` edit the database settings to work with your `mysql` database (instructions for mysql - but should work with other relational databases with slight modifications)
    - The port should be set to `localhost:8000` (will extract to env variable when done in docker)
- `npm install`
- `php artisan serve`