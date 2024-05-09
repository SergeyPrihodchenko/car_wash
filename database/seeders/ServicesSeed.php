<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->getData() as $value) {
            DB::table('services')->insert($value);
        }
    }

    private function getData(): array
    {
        return [
            ['category_id' => 1, 'title' => 'Смена колёс в сборе', 'price' => 5500],
            ['category_id' => 1, 'title' => 'Сезонная замена шин', 'price' => 5500],
            ['category_id' => 2, 'title' => 'Ремонт литых дисков', 'price' => 5500],
            ['category_id' => 2, 'title' => 'Покраска дисков', 'price' => 5500],
            ['category_id' => 2, 'title' => 'Сварка дисков аргоном', 'price' => 5500],
            ['category_id' => 3, 'title' => 'Диагностика', 'price' => 5500],
            ['category_id' => 3, 'title' => 'Регламентное ТО', 'price' => 5500],
            ['category_id' => 3, 'title' => 'Жидкости и фильтры', 'price' => 5500],
            ['category_id' => 3, 'title' => 'Двигатель, система впуска', 'price' => 5500],
            ['category_id' => 4, 'title' => 'Автомойка и детейлинг', 'price' => 5500],
            ['category_id' => 4, 'title' => 'Автохимчистка', 'price' => 5500],
            ['category_id' => 4, 'title' => 'Абразивная полировка кузова', 'price' => 5500],
            ['category_id' => 4, 'title' => 'Мойка двигателя паром', 'price' => 5500],
            ['category_id' => 5, 'title' => 'Повторная ошиповка', 'price' => 5500],
            ['category_id' => 6, 'title' => 'Регламентное техобслуживание', 'price' => 5500],
            ['category_id' => 6, 'title' => 'Шиномонтаж и балансировка', 'price' => 5500],
            ['category_id' => 6, 'title' => 'Сезонное хранение колес', 'price' => 5500],
            ['category_id' => 7, 'title' => 'Выкуп б/у шин и дисков', 'price' => 5500],
            ['category_id' => 8, 'title' => 'Антибактериальная обработка салона автомобиля', 'price' => 5500],
        ];
    }
}
