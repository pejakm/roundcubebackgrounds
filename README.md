RoundCube Backgrounds
=====================


What is this?
----------------------------------------------------------------------------------------

This is a user javascript intented for use in Grease Monkey browser plugin or directly
in a browser, if one supports this (like Opera).

For more info refer to https://openuserjs.org

What is it for
----------------------------------------------------------------------------------------

The script changes background of your RoundCube webmail interface. The backgrounds used
are from GMail themes. Some of them are static, some of them change background each day
(depending on the day of the week) and only one for now changes background based on what
time of the day is it.

How do I install it?
----------------------------------------------------------------------------------------

**Opera**

Put the `roundcubebackgrounds.user.js` it in your userscript folder.

**Firefox**

Install GreaseMonkey extension, restart browser, drag and drop `roundcubebackgrounds.user.js`
to browser window.

**QupZilla**

Enable the GreaseMonkey plugin, drag and drop `roundcubebackgrounds.user.js` to browser window.

**Chrome**

Install Tampermonkey extension, drag and drop `roundcubebackgrounds.user.js` to browser window.

How do I use it?
----------------------------------------------------------------------------------------

Open `roundcubebackgrounds.user.js` in your text editor, find the line:

    $ // @include        http://demo.roundcube.net/mail/*

and replace the link with the link to your RoundCube webmail root.
User editable settings are below `### User settings start ###` line. Available settings
are: `theme` (background theme) and `res` (resolution of images). Change to your liking.

What themes are available?
----------------------------------------------------------------------------------------

The same themes that Google provides for GMail. Those are:

**Hourly**

 * ocean

**Daily**

 * mountains
 * beach
 * planets

**Static**

 * wood
 * desk
 * pebbles
 * graffiti
 * turf
 * treetops


Which image resolutions are available?
----------------------------------------------------------------------------------------

The ones Google provide:

 *1050x600
 *1280x800
 *1440x900
 *1680x1050
 *1920x1200

May I use/copy/sell/share this?
----------------------------------------------------------------------------------------

You can do everything allowed by the GPLv3+ license (refer to LICENSE file for details).

FAQ and Changelog
----------------------------------------------------------------------------------------

Coming soon.
