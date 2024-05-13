<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'count_orders' => Order::all()->count(),
        'categories' => Category::all()
    ]);
})->name('main');

Route::get('/services', function () {
    return Inertia::render('Services', [
        'categories' => Category::all(),
        'services' => Service::all()
    ]);
})->name('services');

Route::get('/about', function () {
    return Inertia::render('About', []);
})->name('about');

Route::get('/orders', [OrderController::class, 'index'])->middleware('auth')->name('orders');
Route::post('/orders/delete', [OrderController::class, 'deleteOrder'])->middleware('auth')->name('orders.delete');

Route::get('/admin/panel', function () {
    return Inertia::render('AdminPanel', [
        'count_orders' => Order::all()->count(),
        'categories' => Category::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/sendOrder', [OrderController::class, 'send'])->name('order.send');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/category/stroe', [CategoryController::class, 'store'])->name('category.store');
    Route::post('/service/stroe', [ServiceController::class, 'store'])->name('service.store');
});

require __DIR__.'/auth.php';
