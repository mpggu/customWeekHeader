<?php
/**
 * Plugin Name: Custom Week Header
 * Plugin URI: https://github.com/mpggu/customWeekHeader
 * Description: A simple script to display whether it's week 1 or week 2, respectively
 * Version: 0.0.1
 * Author: Manuel Kraus
 * Author URI: https://kraus.rocks
 * License: Apache License, v. 2.0
 */

function custom_week_header() {
  wp_register_script('customWeekHeader', plugins_url('/js/customWeekHeader.js', __FILE__), array('jquery'));
  wp_enqueue_script('customWeekHeader');
}

add_action('wp_enqueue_scripts', 'custom_week_header');