const mix = require('laravel-mix');
require('laravel-mix-alias');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'public/js');

mix.alias({
    '@': '/resources/js',
    '@assets': '/resources/assets',
});

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'moment': ['moment','window.moment'],
  })
