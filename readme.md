# Payments

### First Steps
```bash
# using ssh
> git clone git@github.com:sscl00/pagos-backend.git

# install dependencies
> cd pagos-backend
> git checkout dev
> npm install

# run project as mode development
> npm run dev
```

Enviorment development run on `http://localhost:3000`

### Project Struncture
|     Name      |                           Description                                         |
| --------------| ------------------------------------------------------------------------------|
| **config**    | Application configuration including environment-specific configs.             |
| **lib**       | Contains drivers, libraries.                                                  |
| **mocks**     | Examples that represents minimal expression of mongoDB collections            |
| **routes**    | Contain all express routes, separated by api/collection.                      |
| **services**  | Express middlewares which process the incoming requests before handling data. |
| **utils**     | Utilities for extend functions.                                               |

### Running Scripts
| Npm Script |                  Description                          |
| ---------- |-------------------------------------------------------|
| `dev`      | Run mode dev server.                                  |