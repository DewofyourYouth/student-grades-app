# WebPals Student App

## Set Up Basics

- Assumes node, php, mysql and composer are installed on system.

### Laravel Backend

- Go to the `wp_students` directory
- Copy the `.env.example` as `.env`
- In `.env` edit the database settings to work with your `mysql` database (instructions for mysql - but should work with other relational databases with slight modifications)
    - The port should be set to `localhost:8000` (will extract to env variable when done in docker)
- `php artisan migrate`
- `npm install`
- `php artisan serve`

Example of the `.env` config:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=myDB
DB_USERNAME=root
DB_PASSWORD=r3@l~p@$$w0r|) # password here
```

### React FrontEnd

- Go to the `webpals_front_end` directory
- `npm start` or `npm run build`