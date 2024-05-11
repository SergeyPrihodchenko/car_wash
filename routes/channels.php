<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('count_orders', function ($user) {
    return (boolean) $user->id;
});
