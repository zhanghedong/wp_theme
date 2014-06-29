<?php
$app = new \Slim\Slim();
$app->get('/user/:name', function($name){
                echo "Hello, $name";
});
$app->run();
