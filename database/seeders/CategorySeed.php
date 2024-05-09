<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->getData() as $value) {
            DB::table('categories')->insert($value);
        }
    }

    private function getData(): array
    {
        return [
            ['title' => 'Шиномонтаж'],
            ['title' => 'Ремонт и покраска дисков'],
            ['title' => 'Автосервис'],
            ['title' => 'Автомойка и детейлинг'],
            ['title' => 'Повторная ошиповка зимних шин'],
            ['title' => 'Обслуживание автопарков'],
            ['title' => 'Trade-In шин и дисков'],
            ['title' => 'Антибактериальная обработка салона автомобиля'],
        ];
    }
}
