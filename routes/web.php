<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('main');

Route::get('/services', function () {
    return Inertia::render('Services', []);
})->name('services');

Route::get('/about', function () {
    return Inertia::render('About', []);
})->name('about');

Route::get('/orders', function () {
    return Inertia::render('Orders', []);
})->middleware('auth')->name('orders');

Route::get('/admin/panel', function () {
    return Inertia::render('AdminPanel');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/sendOrder', [OrderController::class, 'send'])->name('order.send');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
