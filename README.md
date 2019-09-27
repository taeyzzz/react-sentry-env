# Sentry logger with react

https://sentry.io/welcome/

## initial sentry

```javascript
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "https://6defb5c19cbc4fbe80013fd960e983f1@sentry.io/1763246",
  environment: 'development', // => you can set environment to label error
});

```

# How to set Environment variable for create react app
- create .env file
  - .env: Default.
  - .env.local: Local overrides. This file is loaded for all environments except test.
  - .env.development, .env.test, .env.production: Environment-specific settings.
  - .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.


  Files on the left have more priority than files on the right:
  - npm start: .env.development.local, .env.development, .env.local, .env
  - npm run build: .env.production.local, .env.production, .env.local, .env
  - npm test: .env.test.local, .env.test, .env (note .env.local is missing)

- Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have NODE_ENV defined for you, and any other environment variables starting with

```javascript
REACT_APP_
```

### Example
```bash
REACT_APP_API_ENDPOINT = "https://api.endpoint.com/"
```

### package.json
```javascript
scripts: {
  "start": "react-scripts start", // `NODE_ENV` is equal to `development`.
  "build": "react-scripts build", // `NODE_ENV` is equal to `production`.
  "build:staging": "env-cmd -f .env.staging react-scripts build", // `NODE_ENV` is equal to `staging`.
  ...
}
```
### access Environment by
```javascript
process.env.REACT_APP_API_ENDPOINT
```

### referrence
https://dev.to/jam3/managing-env-variables-for-provisional-builds-h37
