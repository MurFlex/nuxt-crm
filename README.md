# Nuxt 3 CRM App

This is a CRM made using Nuxt 3 framework.

## Server

Here I used [appwrite](https://appwrite.io/) service for constructing the backend.
There are 3 tables:

- customers
  - name - string required.
  - email - string required.
  - avatar_url - url default(any icon url).
  - from_source - string default(null).
  - deal - relation to deals (one to one).
- comments
  - text - string required.
  - deal - relation to deals (many to one).
- deals
  - name - string required.
  - price - integer required.
  - status - enum default(todo).
    - to be agreed
    - in progress
    - produced
    - done
  - comments - relation to comments (many to one).
  - customer - relation to customers (one to one).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```
