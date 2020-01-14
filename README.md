# Student App

An CRUD app for keeping track of and updating students and their grades. Uses new React hooks for state management.

## Set Up Basics

- Assumes [node](https://nodejs.org/en/), [php](https://www.php.net/manual/en/install.php), [mysql](https://dev.mysql.com/downloads/installer/) and [composer](https://getcomposer.org/) are installed on system.

### Laravel Backend

- Go to the `wp_students` directory
- Copy the `.env.example` as `.env`
- In `.env` edit the database settings to work with your `mysql` database (instructions for mysql - but should work with other relational databases with slight modifications)
    - The port should be set to `localhost:8000` (will extract to env variable when done in docker)
- `php artisan migrate`
- `php artisan serve`

Example of the `.env` config:

```
# don't touch the stuff above

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=myDB
DB_USERNAME=root
DB_PASSWORD=r3@l~p@$$w0r|) # password here

# don't touch the stuff below
```

### React FrontEnd

- Go to the `webpals_front_end` directory
- `npm start` or `npm run build`

[demo here](https://www.youtube.com/watch?v=ogBhhMFAc3U)
