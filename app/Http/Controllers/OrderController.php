<?php

namespace App\Http\Controllers;

use App\Events\OrderEvent;
use App\Http\Requests\AdminRequest;
use App\Http\Requests\User\UserRequest;
use App\Models\Order;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();

        return Inertia::render('Orders', ['orders' => $orders]);
    }
    public function send(UserRequest $request)
    {
        $data = $request->validated();

        $status = Order::create($data);
        
        broadcast(new OrderEvent())->toOthers();

        return (boolean) $status;
    }

    public function deleteOrder(AdminRequest $request)
    {
        $data = $request->validated();

        $order = Order::find($data['id']);

        $order->delete();

        $orders = Order::all();

        return $orders;
    }
}
