<?php

namespace App\Http\Controllers;

use App\Events\OrderEvent;
use App\Http\Requests\User\UserRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function send(UserRequest $request)
    {
        $data = $request->validated();

        (boolean)$status = Order::create($data);

        broadcast(new OrderEvent())->toOthers();

        return redirect()->back()->with('orderStatus', $status);
    }
}
