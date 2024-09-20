#!/usr/bin/php
<?php
const PATH_PREFIX = '';

const FILES = [
  'bridge' => [
    'url' => 'https://github.com/voidnick/moms_zapret/raw/master/bridge',
    'dst_file' => '/etc/tor/torrc',
    'regex' => '~^Bridge\s[^\r\n]*~mis',
  ],
  'hostlist.txt' => [
    'url' => 'https://raw.githubusercontent.com/voidnick/moms_zapret/master/hostlist.txt',
    'dst_file' => '/usr/local/sbin/zapret/hostlist.txt',
  ],
  'proxy.pac' => [
    'url' => 'https://raw.githubusercontent.com/voidnick/moms_zapret/master/proxy.pac',
    'dst_file' => '/var/www/html/proxy.pac',
  ],
];

foreach (FILES as $file_data) {
  $file_body = @file_get_contents($file_data['url']);
  if (!$file_body) {
    continue;
  }

  $file = PATH_PREFIX . $file_data['dst_file'];
  if (!is_file($file)) {
    continue;
  }
  
  if (!isset($file_data['regex'])) {
    file_put_contents($file, $file_body);
    continue;
  }
  
  $update = trim($file_body);
  $file_body = file_get_contents($file);
  $file_body = preg_replace($file_data['regex'], $update, $file_body);
  file_put_contents($file, $file_body);
}




