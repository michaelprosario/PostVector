# PostVector

This is a community project to learn system design using Angular, Firebase, and Node. The goal of the app is to function like Buffer or Hootsuite, a social media content tool used to share social media accounts with multiple users and to allow scheduling of content. 

![Post Vector](/public/post-vector-logo.png "Post Vector")

Read more about the [architecture and plan](ARCHITECTURE_AND_PLAN.md).

## Setup to Run

You will need to [create a Facebook application](https://developers.facebook.com/docs/development/create-an-app/) if you want to run this on your own. Once you have your Facebook application id and secret, you will need to create a `.env` file with the following settings:

```env
FACEBOOK_APP_ID=1234567890
FACEBOOK_APP_SECRET=1234567890abcdef1234567890abcdef
FACEBOOK_CALLBACK_URL=http://localhost:4200/api/auth/facebook/callback
```

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Colors

- Blue #1364C2
- Green #17BE98
