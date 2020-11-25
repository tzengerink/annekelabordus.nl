<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'd_yfzad9k6');

/** MySQL database username */
define('DB_USER', 'u_ycxx25da');

/** MySQL database password */
define('DB_PASSWORD', 'tdz28mcupd');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a8KH_A@<8]W_T@tF#U@w)1tb6(NBd@T4)>G7V7$ }U7haU>a0q!M6sqHF#K)');
define('SECURE_AUTH_KEY',  'Z;MOU8]8|u4*dyh8A@;La!}OEOs{zuQ]UQ-$X8Ru5I_X`424<ufr6H((gV#p');
define('LOGGED_IN_KEY',    'gku2d[-OYa0xUKrDHKABvxaM{(m@]G] VZ}FnX*lA~szCwjSZgL~z}8QmA]z');
define('NONCE_KEY',        'zi;gk!O8{p$Pp{yWzpS>bUEFyO{o6E_vfT%{cIJ2p}n(G66NUKHjO}[b{Pb!');
define('AUTH_SALT',        'xuW }E29ti}{Ub>(X*<[m2FiUOep!|4XQtY!tw@j$!mt0`VP5BjbOt*$HTr4');
define('SECURE_AUTH_SALT', 'hP-a)$5X2jO84565{h$`|ui!3]kbHjFKy486gE0_baO 3[M16H-g2Dl-}tlz');
define('LOGGED_IN_SALT',   'PGkSRS-nJ(r;CtbPWRfmJb*me<vZV|$J6yu@c!i[42]pDBQ!ZrrhE`7#xB9B');
define('NONCE_SALT',       ']A>xd%K%Wi@<a% ox`98U~N5!CQ}@bly#~Srj`LnXANGk;4;CwJ%L{F~H#7T');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = '7ty8_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
