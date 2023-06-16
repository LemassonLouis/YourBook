# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```




# Personnal sources

## Get a demo / explanation of how work Remix

- https://www.youtube.com/watch?v=RBYJTop1e-g


## Prisma

### Setup and use

- https://www.youtube.com/watch?v=4tXGRe5CDDg
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-mysql

### CRUD and API

- https://www.prisma.io/docs/concepts/components/prisma-client/crud#create-a-single-record
- https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique


## Remix-auth

- https://github.com/sergiodxa/remix-auth
- https://github.com/sergiodxa/remix-auth-form
- https://github.com/pbteja1998/remix-auth-email-link
- https://nodejs.org/api/crypto.html#crypto
- https://www.youtube.com/watch?v=5O_uufXA8xE