Raw
===

A CRUD package for Laravel. Using this you can create your entire c.r.u.d (Create Read Update Delete) interface in a matter of minutes

Installation
=============

Run the following command in your laravel root directory
> composer require webtools/raw
> dev-master

Or add `webtools/raw` as a requirement to `composer.json`:

"webtools/raw": "dev-master"

Once the package is installed you will need to add the service provider. Add the following in the `providers` section in app/config/app.php

'Webtools\Raw\RawServiceProvider'

The package assets need to be published afterwards

php artisan asset:publish webtools/raw

Documentation
=============

An sql file containing sample data is available in the package. 

 - yourinstallpath/vendor/webtools/raw/raw.sql

You need to import this file in your database and then you can access:

 - yourinstallpath/raw_items

Example code is available by accessing

 - vendor/webtools/raw/src/controllers/RawController.php
