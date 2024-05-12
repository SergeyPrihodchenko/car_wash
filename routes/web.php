<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Models\Order;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'count_orders' => Order::all()->count()
    ]);
})->name('main');

Route::get('/services', function () {
    return Inertia::render('Services', []);
})->name('services');

Route::get('/about', function () {
    return Inertia::render('About', []);
})->name('about');

Route::get('/orders', [OrderController::class, 'index'])->middleware('auth')->name('orders');
Route::post('/orders/delete', [OrderController::class, 'deleteOrder'])->middleware('auth')->name('orders.delete');

Route::get('/admin/panel', function () {
    return Inertia::render('AdminPanel', [
        'count_orders' => Order::all()->count()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/sendOrder', [OrderController::class, 'send'])->name('order.send');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
