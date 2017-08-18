## addons

### Overview of Add-ons:

Add-ons are created with the `addons:create` command, providing a reference
to an add-on service (such as `heroku-postgresql`) or a service and plan
(such as `heroku-postgresql:hobby-dev`).

At creation, each add-on is given a globally unique name. In addition, each
add-on has at least one attachment alias to each application which uses the
add-on. In all cases, the owning application will be attached to the add-on.
An attachment alias is unique to its application, and is used as a prefix to
any environment variables it exports to the application.

In this example, a `heroku-postgresql` add-on is created and its given name
is `postgresql-deep-6913` with a default attachment alias of `DATABASE`:

For more information, read [https://devcenter.heroku.com/articles/add-ons](https://devcenter.heroku.com/articles/add-ons).

### `heroku addons`

## Some other topic

### Overview of some other topic
