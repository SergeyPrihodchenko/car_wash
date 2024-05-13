<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Models\Service;

class ServiceController extends Controller
{
    public function store(AdminRequest $request)
    {
        $data = $request->validated();

        Service::create([
            'category_id' => $data['category_id'],
            'title' => $data['service'],
            'price' =>$data['price']
        ]);
    }
}
