# Liquid Thought Vue 3 + Typescript + Vite + Tailwind

![Liquid store collage](https://github.com/pickmanmurimi/liquidthought_ecommerce_frontend/blob/main/public/productdetails.png?raw=true)


## Requirements

node v14.18.1
yarn 1.22.17 or npm 6.14.15

## Installation
Installation is quite strait forward on local.
Create a `.env.local` file in the root directory of the project.

Let's now add our environment variables in the `.env` file you just created.

    VITE_API_BASE=
    VITE_GOOGLE_PLACES_API_KEY=

The `VITE_API_BASE` holds the value for your api url.

You will first need to set up the Laravel API created as part of this project.
The laravel api can be found here, (https://github.com/pickmanmurimi/liquidthought_ecommerce_api).
The instructions on how to run it are in the readme.md file found at the root directory of the project.

After you have your api running, copy its address and paste it on the `VITE_API_BASE` key. You will also
need to add the api extension `api/v1` to get the right api.

In the end, assuming you have the api running on `http://liquidecommerceapi.test`, add `api/v1` to that url
when you add it to your .env. You should have something like;

    VITE_API_BASE=http://liquidecommerceapi.test/api/v1/

The second variable `VITE_GOOGLE_PLACES_API_KEY`, holds the Google api key for the places api.
You can read the docs on Google Maps api to understand how you can generate your own key.

We are using the autocomplete api to be precise, you can read the docs here,
https://developers.google.com/maps/documentation/places/web-service/autocomplete

##Running the project
 Now your .env file is set, you just need to install the dependencies now.

    yarn
        or
    npm install

When done, run

    yarn dev
I am guessing that too less that `500ms` to spin up a dev server, it's the power of vite 😉.
Pretty exciting, huh?

A server will spin up, just follow the link provided, and you should be greeted by the landing page,
Look around to see what was done with the app.
![Liquid store collage](https://github.com/pickmanmurimi/liquidthought_ecommerce_frontend/blob/main/public/liquidshopcollage.png?raw=true)
