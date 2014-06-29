<?php
require "Slim/Slim.php";
\Slim\Slim::registerAutoloader();

// create new Slim instance
$app = new \Slim\Slim();
 
// add new Route 
$app->get("/", function () {
    echo "<h1>Hello Slim World</h1>";
});

// add new Route 
$app->get("/users/:id", function ($id) {
    echo '{"id":'.$id.',"name":"zhanghd"}';
});
 
// add new Route
$app->get("/user/:id", function ($id) {
    echo '{"id":"1","username":"luckydog","nicename":"luckydog","email":"luckydog@g.cn","url":"","user_registered":"2014-06-03 10:20:01","user_activation_key":"","user_status":"0","display_name":"luckydog","balance":"0"}';
});
// add new Route
$app->get("/user", function () {
    header('X-CG-Total: 30');
    $page =  $_REQUEST['page'];
    $num =  $_REQUEST['num'];
    $str = '[';

    for($i = 0; $i <= $num; $i++){
      $str .= ($i != 0 ? ',':'');
      $str .= '{"id":"'.(($page - 1)*$num+$i+1).'","username":"luckydog'.(($page - 1)*$num+$i +1).'","nicename":"luckydog","email":"luckydog@g.cn","url":"","user_registered":"2014-06-03 10:20:01","user_activation_key":"","user_status":"0","display_name":"luckydog","balance":"0"}';
    }
    $str .= ']';
    echo $str;
});

  // add new Route
$app->get("/lottogroup/:id", function ($id) {
    echo '{"id":'.$id.',"name":"luckydog"}';
});

$app->get("/lottogroup", function () {
    header('X-CG-Total: 30');
    $page =  $_REQUEST['page'];
    $num =  $_REQUEST['num'];
    $str = '[';

    for($i = 0; $i <= $num; $i++){
      $str .= ($i != 0 ? ',':'');
      $str .= '{"id":"'.(($page - 1)*$num+$i+1).'","name":"luckydog'.(($page - 1)*$num+$i +1).'"}';
    }
    $str .= ']';
    echo $str;
});


  // add new Route
$app->get("/lotto/:id", function ($id) {
    echo '{"id":"'.$id.'","name":"lottery name4","slug":"lottoslug_4","intro":"ltname intro","created":"0000-00-00 00:00:00","public":"0","status":"0"}';
});

$app->get("/lotto", function () {
    header('X-CG-Total: 50');
    $page =  $_REQUEST['page'];
    $num =  $_REQUEST['num'];
    $str = '[';

    for($i = 0; $i <= $num; $i++){
      $str .= ($i != 0 ? ',':'');
      $str .= '{"id":"'.(($page - 1)*$num+$i +1).'","name":"lottery name4'.(($page - 1)*$num+$i +1).'","slug":"lottoslug_4'.(($page - 1)*$num+$i +1).'","intro":"ltname introserver'.(($page - 1)*$num+$i +1).'","groupName":"luckydog2","groupId":"2","created":"0000-00-00 00:00:00","public":"1","status":"hot"}';
    }
    $str .= ']';
    echo $str;
});
         // add new Route
$app->get("/lottoDetail/:id", function ($id) {
  echo '{"id":"5","name":"lottery name5","slug":"lottoslug_5","intro":"ltname intro","created":"0000-00-00 00:00:00","public":"0","status":null,"groups":[{"id":"5","name":"methodgroup name 5","lotto_id":"5","methods":[{"id":"2","name":"name","slug":"name1","lotto_id":"5","group_id":"5","desc":"0","config":"name"},{"id":"3","name":"name","slug":"name2","lotto_id":"0","group_id":"5","desc":"0","config":"name"},{"id":"4","name":"name","slug":"sluge","lotto_id":"5","group_id":"5","desc":"0","config":"name"}]},{"id":"12","name":"methodgroup name 12","lotto_id":"5","methods":[]}]}';
});
// run the Slim app
$app->run();

