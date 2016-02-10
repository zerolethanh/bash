<?php

require __DIR__ . '/../../../../../home/lvt/laravel-bankinvoice/bankinvoice/bootstrap/autoload.php';

$app = require_once __DIR__ . '/../../../../../home/lvt/laravel-bankinvoice/bankinvoice/bootstrap/app.php';

$kernel = $app->make('Illuminate\Contracts\Http\Kernel');
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);
$response->send();
$kernel->terminate($request, $response);
