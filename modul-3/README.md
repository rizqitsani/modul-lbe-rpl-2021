# Daftar Isi

- [Daftar Isi](#daftar-isi)
- [Git](#git)
  - [Prerequisite](#prerequisite)
  - [Create a Repo](#create-a-repo)
  - [Cloning Repository](#cloning-repository)
  - [Git Flow](#git-flow)
- [React Router](#react-router)
  - [BrowserRouter](#browserrouter)
  - [Nested Routing](#nested-routing)
- [Component Lifecycle](#component-lifecycle)
  - [Class Component](#class-component)
  - [Functional Component](#functional-component)
- [Concurrency](#concurrency)
  - [Callback](#callback)
  - [Promise](#promise)
  - [Async/Await](#asyncawait)
- [HTTP Request](#http-request)
  - [REST API](#rest-api)
  - [JSON](#json)
  - [Fetch API](#fetch-api)

# Git

Git sendiri adalah sebuah software VCS (Version Controlled System) yang dilakukan secara offline. Dengan adanya Git, kita dapat melakukan manajemen project. Sedangkan, Github merupakan platform khusus developer yang digunakan sebagai layanan cloud untuk menyimpan dan mengelola project/repository git.



## Prerequisite
Kita akan membahas beberapa kata penting untuk memudahkan pemahaman repository.
| No |  Istilah (Kata) |                                  Keterangan                                  |
|:--:|:---------------:|:----------------------------------------------------------------------------:|
|  1 | Repo/Repository | Folder suatu project.                                                        |
|  2 | Commit          | Rekaman/snapshot dari repository (Riwayat perubahan repository).             |
|  3 | Hash            | Penanda unik pada sebuah commit (terdiri dari angka dan huruf yang panjang). |
|  4 | Checkout        | Berpindah ke sebuah perubahan tertentu.                                      |
|  5 | Branch          | Cabang dari sebuah perubahan.                                                |
|  6 | Merge           | Menggabungkan dua atau lebih branch.                                         |
|  7 | Remote          | Resource yang memiliki repository.                                           |
|  8 | Clone           | Mengambil repository dari remote.                                            |
|  9 | Push            | Mengirim commit ke repository.                                               |
| 10 | Pull            | Mengambil commit dari repository.                                            |

Sebelum lanjut, modul ini akan membahas membuat repository. Pastikan sudah memiliki Github Account.

## Create a Repo
Repository berfungsi sebagai tempat kolaborasi bersama orang lain dan mengecek hasil kodingan. Cara membuat repository adalah sebagai berikut.
1. Pada pojok kanan di lambang ‘+’, klik dropdown serta pilih “New Repository”.

![image6](https://user-images.githubusercontent.com/62658181/133782681-8b2ed4d9-cf06-4912-91d8-8ce38dd40da2.png)

2. Tuliskan nama repository pada “Repository name”. Serta tambahkan deskripsi.

![image12](https://user-images.githubusercontent.com/62658181/133782820-a05cceb7-7c15-4084-b5b5-19b2395e24b3.png)

3. Pilihlah visibilitas repository.

![image5](https://user-images.githubusercontent.com/62658181/133782846-1f1898db-729d-46eb-8f37-16645b18bd79.png)

4. Serta untuk opsi “initialize this repository with a README” dan tambahkan .gitignore, jika perlu.

![image7](https://user-images.githubusercontent.com/62658181/133782879-64fa9344-ecfd-44f6-97b5-ffa78ee0319b.png)

5. Tekan “Create repository”

## Cloning Repository
Ada beberapa cara untuk melakukan clone repository yang telah kita buat. Sebenarnya, semua cara untuk melakukan cloning repository sudah tersedia dalam “Quick setup” pasca kita membuat repository. Tapi, kita akan mencoba membuat repository baru dari command line.

Untuk menjalankan dengan cara ini, cukup ikutin langkah-langkah berikut.
```
// Membuat file README.md yang berisi “# test”
echo "# test" >> README.md

// Melakukan inisiasi folder git
git init

// Menambahkan file dalam folder ke dalam staging area. Tanda “.” menandakan seluruh konten dalam folder.
git add <nama file>
git add .

// Menyimpan snapshot dari staging area atas nama “nama commit”
git commit -m "nama commit"

// Mengubah branch saat ini agar berganti nama menjadi “main” (ditandai dengan argumen -M)
git branch -M main

// Menambahkan remote/koneksi reporitory original ke repository lokal
git remote add origin https://github.com/wisnupramoedya/test.git

// Mengirim branch main ke repository original
git push -u origin main
```

## Git Flow
Git Flow adalah salah satu workflow sederhana yang cukup populer. Workflow ini dibuat oleh [Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/) pada 2010. Ciri khas Git Flow ini adalah hanya mengambil dua macam branch, yakni:
- main — branch untuk production. Branch develop akan dimerge ke dalam branch ini.
- develop — branch untuk kode pre-production. Semua fitur pada branch feature akan dimasukkan ke dalam branch develop.

Selama siklus, semua fitur dalam branch dikerjakan pada branch `feature-*` masing-masing.

# React Router
React router memudahkan kita dalam melakukan pemindahan tampilan satu ke tampilan lainnya. Untuk kesempatan kali ini, kita akan menggunakan package `react-router-dom`. Seperti biasa, kita melakukan installasi react-router-dom dengan cara:
```
npm install react-router-dom
```
Setelah itu, kita akan membuat konsep routing sederhana. Pada kesempatan ini, kita akan mengenal tiga jenis component, sebagai berikut.

## BrowserRouter
Sebagai handler route yang utama. Tugas component ini adalah untuk melakukan handling route di dalamnya.
Link
Link bisa dianggap sebagai anchor jika dalam HTML biasa.
Switch
Switch berfungsi sebagai pengatur object mana yang akan ditampilkan pada browser saat ini.

Sekarang pada folder react kalian, silakan membuat component sederhana pada Home.js, About.js, serta Contact.js. Lantas untuk main App.js silakan mengisi sebagai berikut.

Pada App.js
```
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Selamat Datang di LBE RPL</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```

Coba jalankan `npm run start`.

![image9](https://user-images.githubusercontent.com/62658181/133782912-4f28447e-503b-4d3c-b886-0f1031339a2b.png)

## Nested Routing
Untuk contoh nested routing, kita bisa membuat file baru bernama Topics.js
```
function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Komponen</Link>
        </li>
        <li>
          <Link to={`${match.url}/lainnya`}>
           Lainnya
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topics;
```

Tambahkan component Topics pada App.js serta jalankan `npm run start`.

![image10](https://user-images.githubusercontent.com/62658181/133782925-ef8e3aa2-5693-4b97-888f-909bc158b414.png)

# Component Lifecycle

Ketika kita membuat suatu component, ia akan melewati beberapa tahapan mulai dari mounting, updating, dan unmounting. Tahapan tersebut dinamai Component Lifecycle

## Class Component

![image1](https://user-images.githubusercontent.com/68275535/133778252-fcfc4146-a3ad-4980-b892-91e8d236fe3f.png)

Dalam class component terdapat beberapa fungsi yang akan dipanggil pada tiap lifecycle

1. constructor<br/>
  - Hanya dipanggil sekali dalam lifecycle
  - Digunakan untuk mendeklarasikan state / binding function
2. render<br/>
  - Wajib ada dalam class component
  - Mengembalikan JSX
  - Tidak dapat melakukan HTTP request dan setState
3. componentDidMount<br/>
  - Hanya dipanggil sekali
  - Digunakan untuk melakukan HTTP request dan perubahan state
4. componentDidUpdate<br/>
  - Dipanggil setiap ada perubahan state/props
  - Dapat digunakan untuk melakukan HTTP request dan perubahan state
5. componentWillUnmount<br/>
  - Dipanggil ketika component akan dihapus dari DOM

## Functional Component

<img src="https://user-images.githubusercontent.com/68275535/133778290-c2eded12-7212-4487-b6ce-8adc03b72227.png" width="500px">

Lifecycle pada functional component agak sedikit berbeda. Pada functional component, seluruh kode didalamnya akan dijalankan pada saat mounting dan updating. Untuk menjalankan suatu kode pada suatu lifecycle tertentu, kita dapat menggunakan hooks useEffect. Berikut struktur dari useEffect

```jsx
useEffect(() => {
  // EFFECT
  console.log('effect');

  // CLEANUP
  return () => {
    console.log('cleanup')
  }
}, [input] /* DEPENDENCY ARRAY */)
```

Hooks useEffect menerima dua argumen. Argumen pertama berupa fungsi yang dapat mengembalikan fungsi lain dan argumen kedua adalah dependency array. Secara umum, terdapat tiga bagian dari useEffect:

1. Effect<br/>
  Berisi seluruh kode yang ingin dijalankan ketika perubahan terjadi
2. Cleanup<br/>
  Merupakan fungsi yang dikembalikan oleh effect. Fungsi ini akan dipanggil saat unmounting dan updating
3. Dependency Array<br/>
  Pada umumnya useEffect akan dijalankan setiap ada perubahan. Namun apabila kita hanya ingin menjalankan useEffect ketika suatu nilai variabel berubah, kita dapat menambahkan variabel tersebut kedalam dependency array ini. Jika dependency array dibiarkan kosong, useEffect hanya akan dijalankan sekali saat mounting

# Concurrency

![image8](https://user-images.githubusercontent.com/68275535/133778579-fb5d8d7e-2bef-42d9-b3e6-4c5754be3f0f.png)

Concurrency berarti adanya beberapa komputasi yang berjalan bersamaan. Ada dua cara yaitu sinkronus dan asinkronus. Pada program sinkronus, kode dijalankan dari atas ke bawah. Kode dibawah tidak bisa berjalan hingga proses sebelumnya selesai. Pada program asinkronus, kita dapat membuat kode berjalan sambil menunggu proses lainnya selesai. Program asinkronus sangat berguna jika kita membutuhkan waktu yang lama seperti saat mengambil data dari API, membaca file, dll.

## Callback

Callback adalah sebuah function yang dijadikan argumen oleh function lainnya. Callback ini nanti akan dijalankan oleh fungsi tersebut setelah menyelesaikan code yang lain. Contohnya adalah pada fungsi setTimeout. Fungsi setTimeout adalah salah satu cara menjalankan program asinkronus pada javascript. Ia akan menjalankan fungsi yang diberikan setelah waktu yang ditentukan lewat

```js
console.log('Halo');
 
setTimeout(() => {
  console.log('Halo setelah 1 detik');
}, 1000);
 
console.log('Mana yang lain?');
```

Jika kode diatas dijalankan, pada console akan muncul

```
Halo
Mana yang lain?
Halo setelah 1 detik
```

## Promise

Sesuai namanya, Promise bisa diibaratkan sebagai janji. Terdapat tiga kondisi dalam promise yaitu pending(dalam proses), fulfilled(terpenuhi), rejected (gagal). Untuk membuat promise, kita dapat menggunakan sintaks berikut

```js
const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 2);
 
  if (randomNumber === 1) {
    resolve(randomNumber);
  } else {
    reject('Kamu dapet 0 :(');
  }
});
 
myPromise
  .then((value) => console.log(`Yey dapet ${value}`))
  .catch((error) => console.error(error));
```

Promise akan menerima callback dengan dua parameter yaitu resolve dan reject. Ketika resolve dipanggil, maka status promise berubah dari pending menjadi fulfilled. Sebaliknya reject akan menyebabkan promise menjadi rejected

Untuk menggunakan promise, kita bisa menggabungkan (chaining) fungsi .then() dan fungsi .catch(). Kedua fungsi ini akan menerima sebuah callback function yang nantinya akan dipanggil ketika promise dalam kondisi fulfilled/rejected

## Async/Await

Async/await adalah syntatic sugar dari bentuk penggunaan promise menggunakan .then(). Secara fungsi keduanya melakukan hal yang sama. Secara sekilas, penggunaan async/await mirip seperti kode sinkronus

```js
const asyncFunction = async () => {
  try {
    const value = await myPromise;
    console.log(value);
  } catch (error) {
    console.error(error);
  }
};
 
asyncFunction();
```

Pertama, kita harus menambahkan keyword async kedepan function kita untuk menandakan akan terjadi proses asinkronus dalam fungsi tersebut. Lalu await kita gunakan untuk menghentikan pembacaan kode hingga promise dalam kondisi fulfilled

Untuk menghandle kondisi rejected, kita dapat menggunakan bantuan try catch block. Javascript akan menjalankan kode didalam try block terlebih dahulu. Apabila nanti ditemukan error atau promise gagal, baru kode dalam catch block dijalankan

# HTTP Request

React hanya bertanggung jawab untuk membuat user interface pada aplikasi kita. Namun, bisa jadi nantinya aplikasi kita perlu untuk mengakses database. Untuk itu, kita akan membahas bagaimana cara mengakses database menggunakan HTTP Request

## REST API

![image10](https://user-images.githubusercontent.com/68275535/133778661-53bc16ba-76f0-4996-a7f0-7f67c5b8474d.png)

HTTP/HTTPS adalah salah satu protokol yang dapat digunakan apabila kita ingin berinteraksi dengan server. Dalam ilustrasi di atas, aplikasi React kita adalah pihak clientnya. Jika ingin berinteraksi dengan server kita harus mengirimkan request, baru nanti server akan mengirimkan response

API (Application Program Interface) adalah suatu antarmuka yang menjadi perantara dari dua sistem yang berbeda, dalam hal ini client dan server. RESTful API atau biasa disebut REST API (Representational State Transfer) adalah suatu arsitektur metode komunikasi untuk pertukaran data yang umumnya menggunakan protokol HTTP.

REST API akan merepresentasikan state database kita pada saat itu. REST juga menjadikan data pada server sebagai suatu resource yang dapat ditambah, diubah, atau dihapus menggunakan HTTP method seperti GET, POST, PUT, dan DELETE

Contoh HTTP Request

<img src="https://user-images.githubusercontent.com/68275535/133778808-afd0635e-8918-48d6-bd3b-fe59030220e9.png" width="500px">

Contoh HTTP Response

<img src="https://user-images.githubusercontent.com/68275535/133778867-e9ec5890-74a9-4377-9545-23961a34ddfb.png" width="700px">

## JSON

JSON (Javascript Object Notation) adalah salah satu format request dan response yang sering digunakan dalam REST API. Sesuai namanya, JSON memiliki struktur yang mirip seperti Object pada Javascript. Bedanya key pada JSON dituliskan menggunakan tanda petik dua `“”`.

```json
{
  "confirmed": {
    "value": 227026185,
    "detail": "https://covid19.mathdro.id/api/confirmed"
  },
  "recovered": {
    "value": 0,
    "detail": "https://covid19.mathdro.id/api/recovered"
  },
  "deaths": {
    "value": 4670479,
    "detail": "https://covid19.mathdro.id/api/deaths"
  },
  "dailySummary": "https://covid19.mathdro.id/api/daily",
  "lastUpdate": "2021-09-17T07:21:42.000Z"
}
```

## Fetch API

Fetch API adalah built-in function dari Javascript yang berfungsi untuk melakukan HTTP Request. Fungsi fetch akan mengembalikan promise yang jika berhasil, ia akan berisi response dari request kita. Untuk mengubah response kedalam format JSON, kita perlu memanggil fungsi .json() yang akan mengembalikan promise juga. Promise dari fungsi fetch akan gagal apabila terdapat network error

```js
// GET
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
 
// POST
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'morpheus',
    job: 'leader',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

