<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    public function store(AdminRequest $request)
    {
        $data = $request->validated();

        Category::create([
            'title' => $data['category']
        ]);
    }
}
