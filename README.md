<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Contoh aplikasi Siakad sederhana dgn Laravel v7 sebagai back-end dan Vuejs v2 sebagai front-end

- [Laravel Doc](https://laravel.com/docs/routing).
- [Vuejs](https://vuejs.org/v2/guide/).

## Cara Instalasi
Pastikan di komputernya terinstall Composer dan Nodejs. Dibuat di Environment Laravel Homestead. Mungkin akan ada sedikit perbedaan jika dijalankan di XAMPP dan sejenisnya.
- Clone repository ke desktop
- Jalankan perintah composer install d root directory aplikasinya (tunggu hingga selesai)
- ubah nama file .env.example jadi .env
- setting database di .env 
- Jalankan perintah 'php artisan key:generate'
- Jalankan perintah 'php artisan migrate'
- Jalankan perintah 'php artisan jwt:secret' untuk membuat secret key JWT
- Jalankan perintah npm install d root directory aplikasinya

- buka http://namahost/login/admin
- email : admin@admin.com
  password: password
  
## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
