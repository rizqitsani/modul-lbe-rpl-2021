# Daftar Isi

- [Daftar Isi](#daftar-isi)
- [Persiapan](#persiapan)
- [HTML](#html)
  - [Dokumen HTML](#dokumen-html)
  - [Elemen, Tag, Attribut](#elemen-tag-attribut)
    - [Elemen](#elemen)
    - [Tag](#tag)
    - [Atribut](#atribut)
  - [Cara Kerja HTML](#cara-kerja-html)
  - [Struktur HTML](#struktur-html)
  - [Layout Dasar](#layout-dasar)
  - [Judul dan Paragraf](#judul-dan-paragraf)
    - [Tag Judul](#tag-judul)
    - [Tag Paragraf](#tag-paragraf)
    - [Tag Tautan](#tag-tautan)
    - [Tag Gambar](#tag-gambar)
    - [Tag Daftar (List)](#tag-daftar-list)
    - [Tag Table](#tag-table)
    - [Tag Form & Input](#tag-form--input)
    - [Tag div & span](#tag-div--span)
- [CSS](#css)
  - [Sintaks](#sintaks)
  - [Cara Menggunakan CSS](#cara-menggunakan-css)
  - [Selectors](#selectors)
    - [Simple Selectors](#simple-selectors)
    - [Combinator Selectors](#combinator-selectors)
    - [Pseudo-class Selectors](#pseudo-class-selectors)
    - [Pseudo-elements Selectors](#pseudo-elements-selectors)
    - [Attribute Selectors](#attribute-selectors)
  - [Property dan Value](#property-dan-value)
    - [Colors](#colors)
    - [Box Model](#box-model)
  - [Specificity](#specificity)
- [Javascript](#javascript)
  - [Variabel dan Tipe Data](#variabel-dan-tipe-data)
    - [Tipe Data](#tipe-data)
    - [Deklarasi dan Inisialisasi](#deklarasi-dan-inisialisasi)
  - [Flow Control](#flow-control)
    - [Perbandingan](#perbandingan)
    - [Percabangan](#percabangan)
    - [Perulangan](#perulangan)
  - [Array](#array)
    - [Deklarasi](#deklarasi)
    - [Manipulasi](#manipulasi)
  - [Object](#object)
    - [Deklarasi](#deklarasi-1)
    - [Property dan Method](#property-dan-method)
    - [Mengakses Property dan Method](#mengakses-property-dan-method)
    - [This Keyword](#this-keyword)
  - [Destructuring](#destructuring)
  - [Function](#function)
    - [Struktur](#struktur)
    - [Pemanggilan](#pemanggilan)
    - [Default Parameter](#default-parameter)
    - [Arrow Function](#arrow-function)
    - [Higher Order Function](#higher-order-function)
  - [Rest dan Spread](#rest-dan-spread)
    - [Rest Parameter](#rest-parameter)
    - [Spread Operator](#spread-operator)
  - [Template Literals](#template-literals)
  - [Module](#module)
    - [Default](#default)
    - [Named](#named)
  - [Referensi](#referensi)

# Persiapan

Sebelum memulai materi, terdapat beberapa hal yang perlu dipersiapkan:

1. Browser dengan support HTML5 <br/>
  Contoh: Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, atau Safari.
2. Text Editor <br/>
  Contoh: Visual Studio Code (recommended), Sublime Text, atau Atom.

# HTML

HTML atau Hypertext Markup Language adalah bahasa markup standar yang digunakan untuk membuat halaman website. HTML mendefinisikan struktur dari halaman web yang akan dibaca dan ditampilkan oleh web browser seperti Chrome, Edge, Safari dll.

## Dokumen HTML

Dalam pembuatan html, kode html akan disimpan dalam suatu file yang mempunyai ekstensi **.html** atau **.htm** . Contoh : index.html atau index.htm

## Elemen, Tag, Attribut

Sebelum masuk lebih jauh, kita akan melihat tiga istilah utama yang harus diketahui ketika menulis HTML. Ketiga istilah tersebut adalah elemen, tag, dan atribut.

### Elemen

Elemen HTML merupakan komponen yang menetapkan peran sebuah objek dalam dokumen, termasuk struktur dan konten dari objek tersebut.

Contoh:
```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

Berdasarkan contoh kode diatas elemen h1 digunakan untuk membuat tulisan menjadi heading 1 sedangkan elemen p digunakan untuk membuat tulisan paragraf.

### Tag

Sebuah elemen biasanya direpresentasikan oleh tag. Tag pembuka menandakan elemen tersebut dimulai, dan tag penutup menandakan akhir dari sebuah elemen. Tag pembuka direpresentasikan dengan nama elemen yang diapit simbol “<>”, contohnya `<h1>`. Tag penutup dituliskan dengan menambahkan garis miring (“/”) setelah simbol “<”. Misalnya, tag penutup untuk elemen h1 adalah `</h1>`.

### Atribut

Atribut merupakan informasi tambahan yang dapat kita berikan untuk sebuah elemen. Setiap elemen memiliki atribut yang berbeda-beda, meskipun terdapat beberapa atribut standar yang dapat digunakan oleh semua elemen.

Atribut khusus elemen dibuat ketika nilai atribut tersebut memang hanya pantas digunakan untuk elemen tersebut. Misalnya, untuk elemen img yang digunakan untuk menampilkan gambar, terdapat atribut untuk menentukan di mana sumber gambar yang akan ditampilkan di simpan. Atribut ini tentunya tidak akan berguna untuk elemen p, yang hanya menampilkan teks.

Atribut standar yang dimiliki oleh semua elemen sendiri merupakan atribut yang umumnya dapat diimplementasikan oleh semua elemen, misalnya atribut “id” untuk identifikasi elemen, atau “class” untuk klasifikasi elemen.

Kode di bawah menunjukkan contoh elemen `a` yang digunakan dengan atribut wajib elemen tersebut (`href`):

```html
<a href=``http://www.apaya.com''>Ini adalah sebuah link</a>
```

Kode di atas memberikan contoh atribut href yang dimiliki oleh elemen a. Atribut ini berguna untuk memberikan referensi hyperlink dari sebuah elemen (karenanya namanya “href” - hyperlink reference). Atribut-atribut yang dimiliki oleh tiap-tiap elemen akan dibahas lebih lanjut ketika pembahasan dari sebuah elemen dilakukan. Sedangkan kode berikut menunjukkan contoh elemen `img` yang digunakan dengan atribut khusus elemen tersebut (`src`):

```html
<img src="img.jpg" width="104" height="142">
```

## Cara Kerja HTML

Aturan pertama dalam penulisan code HTML adalah mengapit teks dengan **tag**. Elemen HTML didefinisikan dengan tag pembuka, suatu konten, dan tag penutup, seperti yang sudah dijelaskan sebelumnya sebagai berikut:

```html
<tagname>Content goes here...</tagname>
```

> Note : <br/> Namun terdapat beberapa elemen HTML yang tidak memiliki konten salah satunya `<br>`. Element tersebut dapat disebut sebagai elemen yang kosong. Nah oleh karena itu elemen kosong tidak memiliki tag penutup atau </tagname>.

## Struktur HTML

Ada beberapa aturan dalam membuat dokumen HTML. Semua dokumen HTML harus dimulai dengan pendeklarasian tipe dokumen, dalam hal ini `<!DOCTYPE html>` sebelum tag html lainnya. Selain itu dalam html, elemen `<head>` dan `<body>` wajib berada diapitan elemen `<html>`. Sebagai berikut:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset= "utf-8">
    <title>Page Title</title>
    <link rel= "stylesheet" href= "stylesheet.css">
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Berdasarkan penjabaran contoh struktur html diatas perlu diketahui :

1. `<!DOCTYPE html>` <br/>
  Ini akan memastikan versi HTML situs web kamu adalah yang terbaru dan untuk menentukan versi HTML secara otomatis.
2. `<head>` <br/>
  Berisi informasi dokumen atau settingan dokumen html yang tidak terlihat di browser. Ada tiga element yang harus kamu letakkan di `<head>` yaitu :
    - Pengkodean karakter (encoding) <br/>
      `<meta charset= "utf-8">` untuk mencegah situs web menjadi kacau. UTF-8 adalah karakter encoding yang direkomendasikan untuk HTML5.
    - Judul situs web <br/>
      `<title>Page Title</title>` judul yang ditentukan dengan element ini hanya akan muncul di tab browser. 
    - Tautan ke file CSS <br/>
      `<link rel= "stylesheet" href= "stylesheet.css">` untuk mengakses file css yang kamu inginkan maka kita perlu menautkan nya terlebih dahulu melalui element ini.
3. `<body>`  <br/>
  Berisi konten yang terlihat di browser

## Layout Dasar

Layout (tata letak) adalah salah satu bagian paling penting dalam membuat situs web. Dengan menentukan terlebih dahulu layout dari suatu web yang ingin kita bangun, maka akan memudahkan kita dalam penataan element-element yang dibutuhkan.

![image1](https://user-images.githubusercontent.com/68275535/130474382-c674fb7f-72ef-4161-99f5-d7eed63104dd.png)

**Elemen Header**

Seperti namanya, merupakan elemen yang berisi judul dan penjelasan lain dokumen. Biasanya elemen ini diisikan dengan logo website, menu-menu global (seperti login dan logout), maupun nama halaman yang sedang ditampilkan.

**Elemen Navigation**

Elemen navigasi, yang memberikan akses navigasi ke halaman-halaman lain dalam web.

**Elemen Sidebar**

Elemen pendukung konten, dapat berupa pembantu navigasi konten, ataupun berbagai hal lain seperti daftar konten lain, iklan, atau menu tambahan. Sidebar dapat berada di kiri atau kanan konten, atau bahkan di kiri dan kanan konten, sesuai dengan kreatifitas perancangnya.

**Elemen Konten**

Isi utama dari dokumen web. Pengguna biasanya datang ke web untuk melihat teks yang berada pada bagian ini.

**Elemen Footer**

Bagian penutup dari website, yang dapat saja berisi informasi lain tentang website, seperti lisensi penggunaan, sitemap, ataupun link ke website lain.

Nah lalu bagaimana kita dapat membuat layout seperti contoh di atas? Kita dapat menggunakan tag `<div>` maupun tag yang telah tersedia seperti `<header>`, `<footer>`, dll.

## Judul dan Paragraf

### Tag Judul

Tag judul digunakan untuk memformat elemen judul. Tag ini bervariasi mulai dari `<h1>` hingga `<h6>`. Yang mana semakin besar angka semakin kecil ukuran fontnya

```html
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Tag Paragraf

Paragraf digunakan untuk menulis teks biasa. Sebuah paragraf selalu dimulai pada baris baru dan pada browser secara otomatis akan menambahkan margin pada sebelum dan setelah paragraf. Untuk membuat paragraf maka tag nya yaitu `<p>`

```html
<p>My First Paragraph</p>
<p>My Second Paragraph</p>
```

### Tag Tautan

Kita dapat dengan mudah membuat tautan dengan tag `<a>`. Teks dalam tag tersebut akan ditampilkan pada browser sebagai teks tautan.

```html
<a href="https://www.apaya.com">Visit Apaya</a>
```

Setiap tautan memiliki tujuan, agar tautan tersebut berfungsi maka kita harus menentukan URL tujuan di elemen `<a>` dengan menambahkan atribut `href`. Seperti kode yang telah dijabarkan di atas, di mana alamat URLnya yaitu `https://www.apaya.com`.

### Tag Gambar

Tag `<img>` digunakan untuk menampilkan gambar. Kita dapat menetapkan gambar dengan menentukan URL di atribut `src`. URL tersebut dapat kita arahkan ke penyimpanan lokal (folder yang ada di komputer) ataupun gambar yang ada di internet.

Adapun atribut dari tag ini secara rinci sebagai berikut:

```html
<img src="(URL)" alt="Image" height="(Image height)" width="(Image width)">
```

### Tag Daftar (List)

Kita dapat membuat daftar dengan mengapit teks dengan tag `<li>`. Terdapat 3 macam daftar yang dapat kita gunakan dalam HTML:

1. Unordered List (`ul`) <br/>
  Merupakan daftar yang diurutkan tanpa ada nya nomor urut. Sehingga dalam pengaplikasiannya akan menghasilkan daftar dengan awalan titik. Dan untuk mengisi listnya kita menggunakan tag `<li>`

    ```html
    <h2>An unordered HTML list</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    ```

    Ilustrasi:

    ![image10](https://user-images.githubusercontent.com/68275535/130474609-1850b569-baf4-4051-9a8d-8a4149639379.png)
2. Ordered List (`ol`) <br/>
  Merupakan daftar yang terurut dengan awalan angka. Dan untuk mengisi listnya kita menggunakan tag `<li>`

    ```html
    <h2>An Ordered HTML list</h2>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    ```

    Ilustrasi:

    ![image5](https://user-images.githubusercontent.com/68275535/130474833-06ac3ef9-fb46-4c95-928e-4a0b7e640982.png)
3. Description List (`dl`) <br/>
  Merupakan daftar yang digunakan jika ingin menambahkan deskripsi untuk tiap daftar. Dengan menggunakan tag `<dt>` untuk mendefinisikan nama bagian dan tag `<dd>` untuk mendefinisikan isi termnya

    ```html
    <h2>A Description list</h2>
    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>
    ```

    Ilustrasi:

    ![image12](https://user-images.githubusercontent.com/68275535/130474944-5d1de062-2968-4c04-b821-3c396c56de52.png)


### Tag Table

Jika kamu ingin membuat sebuah tabel pada website. Maka kamu dapat menggunakan tag `<table>`  kemudian untuk membuat header atau kolom kita menggunakan tag `<th>` dan untuk membuat baris tabel kita menggunakan tag `<tr>` dan untuk isi dari tabel kita, kita dapat menggunakan tag `<td>`

```html
<table>
  <tr>
    <th>No</th>
    <th>Nama</th>
  </tr>
  <tr>
      <td>1</td>
      <td>Ani</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Boge</td>
  </tr>
</table>
```

Ilustrasi:

![image](https://user-images.githubusercontent.com/68275535/130475305-df78906b-d4ff-4e4a-82c4-ce1befc797c5.png)

### Tag Form & Input

Jika kita ingin membuat suatu form dalam website maka kita dapat menggunakan tag `<form>` yang mana tag tersebut adalah container untuk berbagai jenis elemen input, seperti: fields, checkboxes, radio buttons, submit buttons, dll

Atribut dari `<form>` yaitu:

1. Action <br/>
  Atribut yang mendefinisikan action yang akan dilakukan ketika formulir dikirimkan. Biasanya, data formulir dikirim ke file di server ketika pengguna mengklik tombol kirim

    Nilainya berupa URL. Contoh: `/user/create`
2. Target <br/>
  Menentukkan tempat dari respon yang diterima setelah mengirim form

    ![image3](https://user-images.githubusercontent.com/68275535/130475395-1778983d-d9cd-41a3-8126-3f2c4ae480c3.png)

3. Method <br/>
  Menentukkan HTPP method yang digunakan oleh browser untuk mengirim data form

    Nilainya berupa HTTP request method. Contoh: `GET`, `POST`
4. Autocomplete <br/>
  Menentukkan apakah input (control) secara otomatis melengkapi konten yang sebelumnya telah ditulis atau tidak. Hal ini dilakukan otomatis (jika on) oleh browser untuk menampilkan tulisan yang sebelumnya telah diinput untuk menghindari penulisan berulang kali

    Nilainya berupa `on` atau `off`

Element yang dapat digunakan untuk melengkapi sebuah form, diantaranya adalah sebagai berikut

- `<button>`
- `<fieldset>`
- `<input>`
- `<label>`
- `<legend>`
- `<optgroup>`
- `<option>`
- `<select>`
- `<textarea>`

Adapun untuk input terdapat banyak jenisnya

- `<input type="text">`
- `<input type="password">`
- `<input type="number">`
- `<input type="email">`
- `<input type="radio">`
- `<input type="checkbox">`
- `<input type="file">`
- `<input type="hidden">`
- dll

Contoh penggunaan tag `<form>` beserta inputnya

```html
<form action="#" method="post">
  <input type="text">
  <input type="password">
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <button type="submit">
</form>
```

Sangat banyak sekali atribut baik dari elemen yang dapat digunakan di dalam tag form ataupun atribut dari tag input itu sendiri. Maka untuk selanjutnya kalian bisa membaca secara lengkapnya di https://www.w3schools.com/html/html_forms.asp

### Tag div & span

Tag `<div>` merupakan block-level elemen yang mana selalu dimulai dengan baris baru. Div dapat dikatakan pula sebagai container untuk elemen-elemen html. Pada tag ini kita dapat menggunakan atribut class atau id untuk mempermudah styling di css nanti

```html
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</div> 
```

Ilustrasi:

![image13](https://user-images.githubusercontent.com/68275535/130475539-a8db8730-46e2-4996-8e1a-0829a163225e.png)


Tag <span> merupakan inline-level elemen yang tidak dimulai dengan baris baru.Sama seperti div tag ini merupakan container untuk menandai bagian dari teks, atau bagian dari dokumen

```html
<p>
  My mother has <span style="color: blue; font-weight: bold">blue</span>eyes
  and my father has
  <span style="color: darkolivegreen; font-weight: bold">dark green</span>
  eyes.
</p>
```

Ilustrasi:

![image9](https://user-images.githubusercontent.com/68275535/130475641-578b3af0-ee2a-449e-8758-f4ec1e223761.png)

# CSS

CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendeskripsikan style sebuah web page, agar web page lebih bagus secara visual. Jika HTML adalah elemen-elemen yang membangun kerangka halaman web, CSS dipakai untuk mempercantik elemen tersebut. CSS dapat digunakan untuk beberapa halaman web sekaligus

## Sintaks

![image2](https://user-images.githubusercontent.com/68275535/130475766-8e0e2807-ab77-4b15-adc2-74fd92719117.png)

**Selectors** adalah elemen HTML yang ingin diselect dan di-styling. Kemudian pada bagian **Declaration** (dibuka dan ditutup dengan curly braces) terdapat **property** dan **value** yang ingin diaplikasikan pada elemen.

## Cara Menggunakan CSS

Terdapat tiga cara menggunakan CSS, yaitu:

1. Inline <br/>
  Menulis CSS di dalam sebuah elemen HTML, pada atribut style suatu elemen HTML. Contoh di bawah, elemen h1 dan p menggunakan CSS metode in-line

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1 style="color:blue;text-align:center;">This is a heading</h1>
        <p style="color:red;">This is a paragraph.</p>
      </body>
    </html>
    ```
2. Internal <br/>
  Menulis CSS langsung pada file HTML itu juga, pada elemen style

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            background-color: linen;
          }

          h1 {
            color: maroon;
            margin-left: 40px;
          }
        </style>
      </head>
      <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
      </body>
    </html>
    ```
3. Eksternal <br/>
  Menulis CSS pada file terpisah berekstensi ‘.css’ dan dikaitkan pada HTML dengan elemen link seperti berikut

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
      </body>
    </html>
    ```

    Lalu pada file `styles.css`, isinya sebagai berikut

    ```css
    body {
      background-color: lightblue;
    }

    h1 {
      color: navy;
      margin-left: 20px;
    }
    ```

## Selectors

**Selectors** adalah elemen HTML yang ingin diselect dan diberi style. Ada beberapa kategori selectors:

### Simple Selectors

1. Element selector <br/>
  Pada contoh di bawah, selectornya adalah p. Maka semua elemen p akan terpengaruh oleh styling CSS

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          p {
            text-align: center;
            color: red;
          } 
        </style>
      </head>
      <body>
        <p>Every paragraph will be affected by the style.</p>
        <p id="para1">Me too!</p>
        <p>And me!</p>
      </body>
    </html>
    ```

2. Berdasarkan ID <br/>
  Pada contoh di bawah, elemen dengan id para1 akan terpengaruh styling CSS

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          #para1 {
            text-align: center;
            color: red;
          } 
        </style>
      </head>
      <body>
        <p id="para1">Hello World!</p>
        <p>This paragraph is not affected by the style.</p>
      </body>
    </html>
    ```

3. Berdasarkan class <br/>
  Pada contoh di bawah, elemen dengan id para1 akan terpengaruh styling CSS

    ```css
    .center {
      text-align: center;
      color: red;
    } 
    ```

    Kamu juga bisa select elemen dan class tertentu. Pada contoh di bawah, hanya elemen p dengan class “center” yang akan terpengaruh styling CSS

    ```css
    p.center {
      text-align: center;
      color: red;
    } 
    ```

4. Universal Selector <br/>
  Dengan memakai * , kamu akan menselect keseluruhan dokumen HTML

    ```css
    * {
      text-align: center;
      color: blue;
    } 
    ```

5. Grouping Selector <br/>
  Dengan koma, kita bisa menggabungkan beberapa selector. Pada contoh dibawah, elemen h1, h2, dan p akan terpengaruh oleh CSS

    ```css
    h1, h2, p {
      text-align: center;
      color: red;
    } 
    ```

### Combinator Selectors

Combinator selectors adalah menselect lebih dari 1 simple selector. Ada 4 jenis combinator selectors

1. Descendant Selector (space) <br/>
  Memilih suatu elemen di dalam elemen. Pada contoh di bawah, memilih semua p di dalam semua div

    ```css
    div p {
      background-color: yellow;
    }
    ```

2. Child Selector (>) <br/>
  Memilih semua child dari suatu elemen. Pada contoh di bawah, memilih semua p yang merupakan anak dari div

    ```css
    div > p {
      background-color: yellow;
    }
    ```

3. Adjacent Sibling Selector (+) <br/>
  Untuk memilih suatu elemen yang tepat setelah satu elemen. Pada contoh di bawah, memilih semua p yang terletak tepat setelah div

    ```css
    div + p {
      background-color: yellow;
    }
    ```

4. General Sibling Selector (~) <br/>
  Untuk memilih elemen yang merupakan saudara selanjutnya suatu elemen. Pada contoh di bawah, akan memilih p yang merupakan saudara selanjutnya elemen div

    ```css
    div ~ p {
      background-color: yellow;
    }
    ```

### Pseudo-class Selectors

Pseudo-class dimanfaatkan untuk memilih suatu state dari suatu elemen. Contohnya, saat elemen di-hover dan di-klik

Contoh pseudo-class dapat dilihat pada pengaplikasiannya di elemen `<a>` di bawah

```css
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

Pada contoh di bawah, akan memilih semua p yang merupakan child pertama dari suatu elemen

```css
p:first-child {
  color: blue;
}
```

### Pseudo-elements Selectors

Pseudo-element digunakan untuk styling bagian tertentu dari sebuah elemen. Contohnya: styling huruf pertama, baris pertama dari suatu elemen; dan insert sebuah content sebelum atau sesudah suatu elemen

1. ::first-line <br/>
  Untuk menambahkan style ke baris pertama sebuah elemen

    ```css
    p::first-line {
      color: #ff0000;
      font-variant: small-caps;
    }
    ```

2. ::first-letter <br/>
  Untuk menambahkan style ke huruf pertama sebuah elemen

    ```css
    p::first-letter {
      color: #ff0000;
      font-size: xx-large;
    }
    ```

3. ::before <br/>
  Untuk insert sebuah content sebelum content di dalam sebuah elemen

    ```css
    h1::before {
      content: url(smiley.gif);
    }
    ```

    ![image11](https://user-images.githubusercontent.com/68275535/130475855-efae16ea-d3f5-4a22-9f6a-a10cf90c9a12.png)

### Attribute Selectors

Untuk memilih elemen HTML yang mempunyai atribut tertentu. Berikut beberapa jenis attribute selectors

1. CSS \[attribute] Selector <br/>
  Pada contoh di bawah, akan memilih elemen `<a>` yang mempunyai atribut target. Atribut ini dipakai untuk menspesifikan bagaimana behavior suatu `<a>` jika di-klik

    ```css
    a[target] {
      background-color: yellow;
    }
    ```

2. CSS \[attribute="value"] Selector <br/>
  Pada contoh di bawah, akan memilih elemen `<a>` yang mempunyai atribut target dan value = “_blank”

    ```css
    a[target="_blank"] {
      background-color: yellow;
    }
    ```

3. CSS \[attribute~="value"] Selector <br/>
  [attribute~="value"] selector digunakan untuk select elemen dengan value atribut mengandung suatu kata. Pada contoh di bawah, akan memilih elemen dengan atribut title dan value yang mengandung “flower”

    ```css
    [title~="flower"] {
      border: 5px solid yellow;
    }
    ```

## Property dan Value

Ingat, apa itu property dan value dengan melihat syntax CSS di bawah ini

![image2](https://user-images.githubusercontent.com/68275535/130475766-8e0e2807-ab77-4b15-adc2-74fd92719117.png)

CSS mempunyai beragam property, di sini akan dijelaskan beberapa contoh saja untuk kamu memahami dasarnya. Contoh property di CSS, yaitu: Colors, Backgrounds, Borders, Margins, Padding, Height/Width, Outline, dan lain-lain

### Colors

Value dari colors bisa berupa:
- nama warna(red, green, black, violet dll)
- rgb(255,0,0)
- rgb(100%,0%,0%)
- #ff0000
- #f00

**Background Color**

```html
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```

Ilustrasi:

![image6](https://user-images.githubusercontent.com/68275535/130476063-e2c6effd-370c-440b-9e80-2906b48f5502.png)

**Text Color**

```html
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

Ilustrasi:

![image8](https://user-images.githubusercontent.com/68275535/130476132-54e0010f-853f-4a84-a368-93caff0815f7.png)

### Box Model

Setiap elemen HTML dapat mempunyai property Margin, Border, dan Padding. Gabungan dari margin, border, padding, dan content dinamakan Box Model. **Margin** adalah properti yang digunakan untuk mendefinisikan ruangan di sekeliling elemen, yang berada diluar border. Sedangkan **Padding** adalah properti yang digunakan untuk mendefinisikan ruangan di sekeliling elemen, yang berada di dalam border.

![image4](https://user-images.githubusercontent.com/68275535/130476218-d8c1b98d-1af8-4e64-ac0c-8a8186c9143a.png)

Contoh:

```css
p {
  margin: 25px 50px 75px 100px;  /* top right bottom left */
  padding : 20px;                /* Nilai dari semua sisi sama besar */
}
```

Selain dua property diatas, CSS memiliki banyak property dan cara menulis value yang beragam. Kalian dapat melihatnya lebih lanjut di https://www.w3schools.com/css/default.asp

## Specificity

CSS Specificity menentukan seberapa spesifik kah sebuah aturan pada CSS. Jika ada 2 atau lebih aturan pada sebuah elemen yang sama, maka aturan paling spesifik lah yang akan dipakai oleh browser

Berikut hierarki Specificity yang paling kuat:
1. Inline styles
2. ID
3. Classes, attributes dan pseudo-classes
4. Elements dan pseudo-elements

Jadi jika ada conflict pada `<a>` seperti contoh di bawah, maka hierarki yang lebih tinggi yang akan menang (`<a>` akan berwarna hijau)

```html
<div class="container">
  <div id="main">
    <p>
      <a href="#" id="id1" class="class1">Link</a>
    </p>
  </div>
</div>
```

```css
#id1 {
  color: green;
}
.class1 {
  color: yellow;
}
```

**Menghitung Specificity**

Specificity bisa dihitung skornya, dan yang lebih tinggi skornya maka dialah yang lebih kuat aturan CSS-nya. Cara menghitungnya: mulai dari 0, tambahkan 1000 untuk atribut style, tambahkan 100 untuk setiap ID, tambahkan 10 untuk setiap atribut, kelas atau pseudo-class, tambahkan 1 untuk setiap nama elemen atau pseudo-element

Contoh:

```
A: h1 { … }
B: #content h1 { … }
C: <div id="content"><h1 style="color: #ffffff">Heading</h1></div>
```

Specificity A adalah 1 (1 elemen)
Specificity B adalah 101 (1 ID, 1 elemen)
Specificity C adalah 1000 (inline styling)

Karena 1 < 101 < 1000 , maka C mempunyai specificity yang paling besar, dan akan itulah yang akan dipakai

# Javascript

## Variabel dan Tipe Data

### Tipe Data

Terdapat beberapa tipe data dalam javascript yaitu: string, number, boolean, array, object, function, undefined, dan null

### Deklarasi dan Inisialisasi

Javascript adalah bahasa pemrograman yang bersifat dynamic-typing yang berarti ketika kita mendeklarasikan variabel, tidak perlu menentukan tipe datanya

Untuk mendeklarasikan, kita dapat menggunakan var, let, dan const. Tapi disini kita hanya akan menggunakan let dan const. Mengapa? Bisa dilihat di https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

```js
let carName;          // Sama dengan let carName = undefined
let name = 'Rizqi';
 
let name = 'Wisnu';   // Error
 
carName = 'Toyota';
name = 'Wisnu';
 
const DAY_IN_A_YEAR = 365;
DAY_IN_A_YEAR = 100;  // Error
```

## Flow Control

### Perbandingan

Secara umum, operator perbandingan di Javascript hampir sama dengan bahasa pemrograman lain. Perbedaannya terletak pada strict equality operator (=== dan !==). Pada strict equality comparison, selain membandingkan nilai, Javascript juga membandingkan tipe datanya

```js
x == 3;     // true
x === '3';  // false
x != 3;     // false
x !== '3';  // true
x < 1;      // false
x <= 5;     // true
x > 3;      // false
x >= 3;     // true
```

### Percabangan

Contoh percabangan menggunakan if, else if, dan else

```js
if (kondisi1) {
  //  kode disini akan dijalankan jika kondisi1 bernilai benar
} else if (kondisi2) {
  //  kode disini akan dijalankan jika kondisi1 bernilai salah dan kondisi2 bernilai benar
} else {
  //  kode disini akan dijalankan jika kondisi1 bernilai salah dan kondisi2 bernilai salah
}

```

Contoh percabangan menggunakan switch

```js
switch(ekspresi) {
  case x:
    // kode
    break;
  case y:
    // kode
    break;
  default:
    // kode
}
```

Contoh percabangan menggunakan ternary operator

```js
let isMinors = (age < 18) ? true : false;
```

### Perulangan

Perulangan dalam Javascript dapat menggunakan sintaks for dan while

```js
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}
 
let x = 0;
while(x < 10) {
  sum += x;
}
```

## Array

### Deklarasi

Array memungkinkan kita untuk menyimpan berbagai data dalam satu variabel. Berikut contoh cara mendeklarasikan array

```js
const myArray = ['LBE', 2021];
```

Untuk mengakses elemen pada suatu array, kita dapat menggunakan indeksnya. Seperti C++, Javascript menggunakan zero-based indexing yang berarti elemen pertama mempunyai indeks 0

```js
const myArray = ['LBE', 'React'];
const data = myArray[1];  // data = 'React'
 
myArray[0] = 'I love';
console.log(myArray); // ['I love', 'React'];
```

### Manipulasi

Kalau ingin menambahkan atau menghilangkan elemen pada array, kita dapat menggunakan push dan pop. Sesuai artinya, push akan menambah data ke belakang array dan pop akan menghilangkan data terakhir pada array tersebut

```js
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]
 
myArray.pop();
console.log(myArray); // [1, 2, 3]
```

## Object

Object di Javascript memiliki **property** dan **method**. Pada dunia nyata, contoh object adalah mobil. Property-nya adalah nama mobil, berat mobil, warna mobil. Sedangkan method-nya adalah jalankan mobil dan berhentikan mobil (berupa aksi)

### Deklarasi

Yaitu dengan membuat variabel dan assign object dengan membuka curly braces, kemudian isi property dan method-nya. Pada contoh di bawah, hanya ada property

```js
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
```

### Property dan Method

Berikut adalah contoh object pada Javascript. Key pada object harus berupa string. Apabila terdapat karakter khusus atau spasi, key harus diapit oleh tanda petik

```js
const person = {
  firstName: "John", // property
  lastName: "Doe",
  "Phone Number": 5566,
  fullName: function() { // method
    return this.firstName + " " + this.lastName;
  }
};
```

Pada contoh di atas, method fullName disimpan pada property sebagai definisi function

### Mengakses Property dan Method

Dapat dilakukan dengan dua cara yaitu menggunakan tanda dot `.` atau bracket/kurung sikut `[]`. Tanda bracket dapat digunakan apabila key memiliki karakter khusus atau spasi

```js
// Cara 1 (Menggunakan dot)
person.lastName; // Doe
 
// Cara 2 (Menggunakan bracket)
person["Phone Number"]; // 5566
```

Sedangkan untuk mengakses method, kita dapat menambahkan tanda kurung ()

```js
person.fullName(); // John Doe
```

### This Keyword

```js
const person = {
  firstName: "John", // property
  lastName : "Doe",
  id   	: 5566,
  fullName : function() { // method
    return this.firstName + " " + this.lastName;
  }
};
```

Pada contoh di atas, keyword this dalam method fullName menunjuk kepada pemilik function, yaitu object “person”. **This** adalah object “person” yang memiliki method fullName. Dengan kata lain, `this.firstName` adalah property dari object this

## Destructuring

Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil. Sebelum adanya ES6, kita biasa melakukan destructuring seperti berikut

```js
const alphabets = ['A', 'B', 'C', 'D', 'E'];
 
const first = alphabets[0];
const second = alphabets[1];
 
console.log(first, second); // A B
```

Sekarang, setelah adanya ES6, destructuring menjadi lebih mudah dilakukan. Kita bisa menggunakan kurung siku `[]` dan melakukan destructuring sesuai posisinya pada array. Apabila kita ingin melewati suatu posisi, kita dapat mengosongkannya

```js
const [first, second] = alphabets;
console.log(first, second); // A B
 
const [first, , third] = alphabets;
console.log(first, third); // A C
```

Destructuring pada object sedikit berbeda dengan array. Kita dapat menggunakan tanda kurung `()` dan properti pada object tersebut. Apabila properti tidak terdapat dalam object, undefined akan dikembalikan

```js
const user = {
  name: 'Rizqi',
  email: 'rizqitsani@mail.com'
};
 
const {name, email} = user;
console.log(name, email); // Rizqi rizqitsani@mail.com
 
const {name, phone} = user;
console.log(name, phone); // Rizqi undefined
```

## Function

### Struktur

Karena sifatnya yang dynamic typing, kita tidak perlu mendefinisikan tipe data suatu parameter dalam fungsi

```js
function doSomething(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

### Pemanggilan

```js
function multiply(a, b) {
  return a * b;
}
 
let result = multiply(4, 3) // result = 12
```

### Default Parameter

Selain tidak melakukan pengecekan terhadap tipe data, Javascript juga tidak melakukan pengecekan terhadap jumlah argumen yang diberikan. Untuk mengatasinya, kita dapat menggunakan default parameter

```js
function pow(base, exponent = 2) {
  return base ** exponent;
}
 
pow(3, 3);  // 27
pow(5);     // 25
```

### Arrow Function

Arrow function memungkinkan kita untuk menulis function lebih singkat. Berikut contohnya

```js
// Satu parameter
number => number > 0;
 
// Dua parameter
(a, b) => a *b;
 
// Multiline statements
number => {
  let adder = 1;
  return number + adder;
}
```

Lalu apabila kita ingin menambahkan nama ke function tersebut, kita dapat menggunakan variabel

```js
const multiplyByTwo = number => number * 2;
```

### Higher Order Function

Dalam Javascript terdapat juga istilah Higher Order Function yaitu sebuah function yang menerima atau mengembalikan function lain. Hal ini memungkinkan kita untuk membuat suatu function lebih reusable. Berikut contoh penggunaannya

```js
const myArray = [1, 2, 3];
 
function multiplyByTwo(number) {
  return number * 2;
}
 
function arrayManipulator(array, manipulator) {
  let newArray = [];
 
  for (let index = 0; index < array.length; index++) {
    newArray.push(manipulator(array[index]));
  }
 
  return newArray;
}
 
console.log(arrayManipulator(myArray, multiplyByTwo)); // [2, 4, 6]
```

Selain itu, Javascript juga mempunyai built-in higher order function seperti .forEach, .map ,dan .filter

```js
myArray.forEach(number => {
  console.log(number * 2);
});
 
const mappedArray = myArray.map(number => number * 2);
console.log(mappedArray); // [2, 4, 6]
 
const filteredArray = myArray.filter(number => number < 2);
console.log(filteredArray); // [1]
```

## Rest dan Spread

### Rest Parameter

Apabila kita tidak mengetahui jumlah argumen yang diberikan ke suatu fungsi, kita dapat menggunakan rest parameter. Rest parameter akan menggabungkan semua argumen tersebut ke dalam satu array

```js
const user = (name, ...hobbies) => {
  console.log(name);
  console.log(hobbies);
}
 
user('Rizqi', 'Code', 'Sleep');
```

Saat dijalankan, parameter name akan berisi ‘Rizqi’ dan parameter hobbies akan berisi [‘Code’, ‘Sleep’]

### Spread Operator

Kebalikan dari rest parameter, spread operator akan menyebarkan suatu iterable (dapat berupa string, array, atau object) menjadi elemen-elemen terpisah. Spread operator dapat digunakan apabila kita ingin menggabungkan array

```js
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
 
const combined = [...firstArray, ...secondArray];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

## Template Literals

Template literals memungkinkan kita untuk melakukan string interpolation. Artinya kita dapat melakukan substitusi terhadap variable ataupun expression dalam string kita. Untuk menggunakannya kurang lebih sama seperti string yang diapit menggunakan `` (backtick)

```js
const name = 'Rizqi';
console.log(`Hello, ${name}`); // Hello, Rizqi
```

## Module

Module memungkinkan developer untuk memecah codenya menjadi beberapa file terpisah lalu menghubungkannya ketika dibutuhkan. Terdapat dua module system yang bisa digunakan yaitu CommonJS dan ES6 Module. Disini kita hanya akan mempelajari ES6 Module karena sistem ini digunakan saat mempelajari React kedepannya

### Default

Default export digunakan apabila kita ingin melakukan ekspor satu entitas dari satu file. Berikut contoh sintaksnya

```js
// user.js
 
const user = {
  name: 'Rizqi',
  email: 'rizqitsani@mail.com'
};
 
// main.js
 
import user from './user.js'
 
console.log(user.name); // Rizqi
```

### Named

Named export digunakan apabila kita ingin melakukan ekspor banyak nilai dari satu berkas. Semua nilai yang ingin diekspor digabungkan ke dalam sebuah object literal

```js
// user.js
 
const user = {
  name: 'Rizqi',
  email: 'rizqitsani@mail.com'
};
 
const isAuthenticated = true;
 
export { user, isAuthenticated };
 
// main.js
 
import { user, isAuthenticated } from './user.js'
 
console.log(user.name); // Rizqi true
```

## Referensi

- https://www.w3schools.com/
- https://github.com/minons1/PelatihanSoftwareHouseHMTCITS/wiki/CSS
- http://dev.bertzzie.com/knowledge/desain-web-dasar/HTMLdanCSSDasar.html
- http://dev.bertzzie.com/knowledge/desain-web-dasar/Layout.html#
- https://gawibowo.com/css-specificity.htm
