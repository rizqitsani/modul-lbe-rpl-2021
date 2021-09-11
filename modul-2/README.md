# Daftar Isi

- [Daftar Isi](#daftar-isi)
- [Persiapan](#persiapan)
- [Pendahuluan](#pendahuluan)
  - [Inisialisasi](#inisialisasi)
  - [Struktur Folder](#struktur-folder)
  - [Cara Kerja](#cara-kerja)
- [Component](#component)
  - [Class Component](#class-component)
  - [Functional Component](#functional-component)
- [JSX](#jsx)
- [Props](#props)
  - [Menambahkan Props](#menambahkan-props)
  - [Mengakses Props](#mengakses-props)
  - [Children Props](#children-props)
- [Rendering](#rendering)
  - [Conditional Rendering](#conditional-rendering)
  - [List Rendering](#list-rendering)
- [Styling](#styling)
  - [Style Props (Inline)](#style-props-inline)
  - [Regular CSS](#regular-css)
  - [CSS Module](#css-module)
- [Event Handling](#event-handling)
- [State](#state)
  - [useState](#usestate)
  - [Mengubah State](#mengubah-state)
- [Form Handling](#form-handling)

# Persiapan

Hal yang dibutuhkan:
1. Node dan NPM
2. Visual Studio Code

Hands on modul ini dapat diakses dengan cara:<br>
1. Clone repository
2. Buka folder modul-2 di terminal
3. Jalankan `npm install`
4. Setelah instalasi selesai, jalankan `npm start`

# Pendahuluan

## Inisialisasi

Untuk membuat aplikasi React, kita dapat menggunakan tools  [Create React App](https://create-react-app.dev/). Buka terminal lalu arahkan ke folder tempat kalian akan membuat aplikasi. Setelah itu jalankan perintah

```bash
npx create-react-app my-app
```

Jika ingin menjalankan aplikasi pada browser, jalankan

```bash
cd my-app
npm start
```

## Struktur Folder

![Struktur Folder](https://user-images.githubusercontent.com/68275535/132822108-38e3ec7c-e0d8-441d-98fd-4278eb556eeb.png)


Ketika membuka folder aplikasi, terdapat 3 folder:
1. node_modules<br />
  Folder yang berisi seluruh file dependency aplikasi
2. public<br />
  Folder tempat seluruh asset public berada. Di dalam folder ini terdapat file index.html yang merupakan file utama yang akan ditampilkan oleh aplikasi kita nantinya
3. src<br />
  Folder tempat dimana kita akan membuat hampir seluruh kode seperti component, style, dsb

## Cara Kerja

React adalah aplikasi yang bersifat Single Page Application (SPA). Pada SPA, server hanya akan mengirim satu file html. Selanjutnya, seluruh perubahan seperti interaksi user saat click, data pada website, dan navigasi akan dikelola oleh React. Jadi ketika, kita ingin berpindah halaman, kita tidak perlu meminta halaman html baru ke server. React akan melakukan unmount pada elemen yang ada di halaman tersebut dan menggantinya dengan elemen baru. Karena itulah disebut Single Application

Aplikasi kita dimulai pada file /src/index.js. Disini, React akan melakukan proses render dari komponen yang kita buat lalu memasangkannya ke file /public/index.html

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
```html
<body>
  <noscript>You need to enable JavaScript to run this app.<noscript>
  <div id="root"></div>
</body>
  ```

# Component

Component pada React menggambarkan suatu bagian dari halaman web. Component dapat digunakan kembali (reusable) dan dapat juga berisi component lainnya. Berikut ilustrasi penggambaran suatu halaman yang terdiri dari berbagai macam component

![Ilustrasi Component](https://user-images.githubusercontent.com/68275535/132822295-e5238630-1aed-4996-a9f5-5d6f2adff0cf.png)

Dalam React, terdapat dua tipe component yaitu

## Class Component

Class component merupakan cara lama yang bisa dipakai untuk membuat component. Disini kita akan membuat sebuah class javascript biasa yang meng-extend class Component yang mempunyai method render. Pada method ini kita akan mereturn elemen yang nantinya akan ditampilkan

```jsx
import { Component } from 'react';
 
export class Hello extends Component {
  render() {
    return <div>Hello world!</div>;
  }
}
```

## Functional Component

Pada awalnya, functional component hanya bisa digunakan untuk menampilkan component stateless yang berarti dia tidak mempunyai data. Namun sejak versi 16.8, kita dapat menggunakan state baik di class component maupun functional component. Sintaksnya cukup dengan membuat sebuah function yang mengembalikan elemen

```jsx
const Hello = () => {
  return <div>Hello world!</div>;
};
```

# JSX

Javascript XML (JSX) adalah perpanjangan dari Javascript. JSX tidak selalu dibutuhkan untuk membuat elemen pada React namun kode yang dihasilkan akan jauh lebih rapi dan sederhana. Pertama kita akan membuat elemen menggunakan fungsi createElement()

```jsx
import React from 'react';
 
const Hello = () => {
  return React.createElement('p', null, 'Hello world!');
};
 
const Nested = () => {
  return React.createElement(
    'div',
    {
      className: 'container',
      id: 'text-center',
    },
    React.createElement('h1', null, 'This is nested!')
  );
};
```

Fungsi createElement menerima tiga parameter, yaitu:
1. Tag yang ingin dibuat
2. Property yang ingin ditambahkan seperti class, id, dll. Jika tidak ada, bisa diisi dengan null
3.Children dari elemen tersebut. Bisa berupa string ataupun elemen lainnya

Sekarang mari kita buat elemen serupa menggunakan JSX

```jsx
import React from 'react';
 
const Hello = () => {
  return <p>Hello world!</p>;
};
 
const Nested = () => {
  return (
    <div className='container' id='text-center'>
      <h1>This is nested!</h1>
    </div>
  );
};
```

Code yang dihasilkan jauh lebih rapi. Di belakang layar, React akan mengkompilasi JSX menjadi bentuk Javascript biasa

Secara sekilas JSX memiliki struktur yang mirip dengan HTML. Perbedaannya terletak di penamaan beberapa atribut seperti class yang diubah menjadi className dan for menjadi htmlFor

Selain itu, kita dapat menggunakan ekspresi Javascript dalam JSX ini seperti menampilkan nilai variabel, property dari suatu object, hasil fungsi, dsb. Untuk membedakan antara mana yang merupakan konten dan ekspresi, kita menggunakan kurung kurawal `{}`

```jsx
const name = 'Hasna';
const cat = {
  name: 'Miaw',
  color: 'orange',
};
 
const Hello = () => {
  const greetPeople = (cat) => {
    return `${cat.name} - ${cat.color}`;
  };
 
  return (
    <div>
      <p>Hello, name</p>
      <p>Hello, {name}</p>
      <p>I have a pet named {cat.name}</p>
      <p>{greetPeople(cat)}</p>
    </div>
  );
};
```

# Props

Untuk meneruskan informasi ke suatu Component, kita dapat menggunakan props. Seperti yang sudah dijelaskan tadi, pada fungsi createElement, kita dapat menambahkan property tambahan sebagai argumen kedua. Property inilah yang kita namakan props

## Menambahkan Props

Cara menambahkan props mirip dengan menambahkan atribut pada html

```jsx
<Hello name='Wisnu' hobby='code' />
```

## Mengakses Props

Pada functional component, props dapat diakses melalui parameter fungsi

```jsx
const Hello = (props) => {
  console.log(props); // {name: 'Wisnu', hobby: 'code'}

  const name = props.name;
  const hobby = props.hobby;

  return <p>{`Hello, my name is ${name} and I love to ${hobby}`}</p>;
};
```

## Children Props

Sesuai namanya, children props dapat kita gunakan untuk mengakses children dari element tersebut. Semua yang berada ditengah tag dianggap sebagai children. Sebagai contoh disini kita akan membuat component Box yang menerima children

```jsx
<div>
  <Box>Selamat malam peserta LBE!</Box>
  <Box>Selamat menikmati!</Box>
</div>
```

```jsx
const Box = (props) => {
  return (
    <div
      style={{
        maxWidth: '20rem',
        borderRadius: '5px',
        background: 'lightblue',
        padding: '1rem 0.5rem',
      }}
    >
      {props.children}
    </div>
  );
};
```

Hasil yang terlihat di browser adalah sebagai berikut

![Ilustrasi Children Props](https://user-images.githubusercontent.com/68275535/132822392-444c7915-af34-4b6b-8e33-5b8cfda861a5.png)

# Rendering

## Conditional Rendering

Pada React, conditional rendering konsepnya sama persis seperti pada Javascript. Kita dapat menggunakan if-else, ternary operator. short circuit, dll

```jsx
const Conditional = () => {
  let isAuthenticated = true;
 
  // Cara 1
  if (isAuthenticated) {
    return <h1>Hello, User!</h1>;
  } else {
    return <h1>Hello strangers!</h1>;
  }
 
  // Cara 2
  let message;
  if (isAuthenticated) {
    message = <h1>Hello, User!</h1>;
  } else {
    message = <h1>Hello strangers!</h1>;
  }
 
  // Cara 3
  return isAuthenticated ? <h1>Hello, User!</h1> : <h1>Hello strangers!</h1>;
};
```

## List Rendering

Jika ingin merender sebuah list, kita dapat menggunakan fungsi map() dari Javascript

```jsx
const users = [
  { id: 1, name: 'Lathifa', address: 'Surabaya' },
  { id: 2, name: 'Hasna', address: 'Depok' },
  { id: 3, name: 'Wisnu', address: 'Bojonegoro' },
  { id: 4, name: 'Rizqi', address: 'Kediri' },
];
 
const List = () => {
  return (
    <ul>
      {users.map((user) => (
        <li>{`${user.name} - ${user.address}`}</li>
      ))}
    </ul>
  );
};
```

Akan tetapi, akan muncul warning di console untuk memberikan key props ke item di list kita

![Warning Missing Key](https://user-images.githubusercontent.com/68275535/132822484-ec4b2edd-03de-4336-9480-e6df02a830f5.png)

Penjelasan mengapa kita membutuhkan key dapat dilihat di [artikel berikut](https://twitter.com/dan_abramov/status/1415279090446204929). Singkatnya, kita membutuhkan suatu identifier untuk tiap item di list kita. Pada kasus diatas, kita dapat menggunakan property id sebagai key saat merender list

```jsx
const List = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.name} - ${user.address}`}</li>
      ))}
    </ul>
  );
};
```

# Styling

Terdapat beberapa cara untuk menambahkan style pada component kita

## Style Props (Inline)

Cara pertama ini mirip seperti inline styling pada HTML. Bedanya, kita tidak akan memberi string, melainkan object. Selain itu, seluruh property yang sebelumnya ditulis dengan kebab-case diubah menjadi camelCase. Contoh: background-color menjadi backgroundColor

```jsx
<div
  style={{
    maxWidth: '20rem',
    borderRadius: '5px',
    background: 'lightblue',
    margin: '1rem',
    padding: '1rem 0.5rem',
  }}
>
  {props.children}
</div>
```

## Regular CSS

Cara kedua yaitu menggunakan file berekstensi .css. File ini dapat kita langsung kita import kedalam component kita dan menggunakan className. Misal kita memiliki file Box.css

```css
.box {
  max-width: 20rem;
  border-radius: 5px;
  background: lightblue;
  margin: 1rem;
  padding: 1rem 0.5rem;
}
```

Lalu pada component Box.js, kita dapat meng-import file css diatas

```jsx
import './Box.css';
 
const Box = (props) => {
  return <div className='box'>{props.children}</div>;
};
```

Kelemahan pada cara ini adalah scope penerapannya bersifat global. Artinya component lain yang tidak meng-import Box.css tetap terexpose dengan class .box, maka jika ada penggunaan nama class yang duplicate, dapat bertabrakan. Hal ini terjadi karena saat kompilasi, React akan memindahkan seluruh isi file css ke tag <head>. Untuk mengatasinya, kita bisa menggunakan [BEM Convention](http://getbem.com/naming/) untuk mencegah conflict penamaan class

![Regular CSS](https://user-images.githubusercontent.com/68275535/132822587-2381ff5e-e005-4dd6-9ab8-f9b294e16bd6.png)

## CSS Module

Cara terakhir ini akan mengatasi kelemahan pada cara kedua karena style yang diberikan locally scoped. Untuk membuat CSS Module, kita dapat membuat file berekstensi .module.css. Nama file disarankan mengikuti nama file component yang akan kita beri style. Sebagai contoh kita akan membuat Box.module.css

```css
.box {
  max-width: 20rem;
  border-radius: 5px;
  background: lightblue;
  margin: 1rem;
  padding: 1rem 0.5rem;
}
```

Tidak ada perbedaan signifikan saat membuat file css. Perbedaan akan terlihat saat kita melakukan import. CSS modules akan menggabungkan seluruh style menjadi satu object lalu meng-exportnya secara default. Untuk menerapkan style, kita dapat mengakses property sesuai nama classnya

```jsx
import styles from './Box.module.css';
 
const Box = (props) => {
  return <div className={styles.box}>{props.children}</div>;
};
```

Selain ketiga cara diatas, kalian dapat menggunakan external library seperti [Tailwind CSS](https://tailwindcss.com/), [Chakra UI](https://chakra-ui.com/), [Material UI](material-ui.com), dll.

# Event Handling

Ketika user berinteraksi dengan halaman, akan ada event yang terjadi seperti event click, change, submit, dll

Pada HTML, kita dapat meng-handle event tersebut dengan cara memberi atribut seperti

```html
<button onclick='handleClick()'>Click me!</button>
```

Pada React, kita sama-sama memberi props namun strukturnya berubah menjadi

```jsx
<button onClick={handleClick}>Click me!</button>
```

Berikut contoh lengkapnya

```jsx
const Button = () => {
  const handleClick = (event) => {
    console.log('Button clicked', event);
  };
 
  return <button onClick={handleClick}>Click me!</button>;
};
 
export default Button;
```

Jika ingin menambah parameter, kita dapat menggunakan anonymous function

```jsx
const Button = () => {
  const handleClick = (message) => {
    console.log(message);
  };
 
  return <button onClick={() => handleClick('Hello')}>Click me!</button>;
};

export default Button;
```

# State

## useState

Pada modul ini, kita hanya akan membahas cara membuat state pada functional component. Untuk membuat state, kita dapat menggunakan hooks `useState`. Hooks adalah serangkaian fungsi tambahan yang memungkinkan kita menggunakan fitur-fitur React pada functional component

Fungsi useState menerima satu argumen sebagai initial value dan akan mengembalikan array yang berisi dua elemen yaitu value dan fungsi yang digunakan untuk mengubah value. Untuk menggunakan dua kembalian itu, kita dapat menggunakan array destructuring yang sudah dipelajari pada modul sebelumnya

```js
const [count, setCount] = useState(0);
```

Konvensi yang digunakan untuk fungsi pengubahnya adalah penambahan kata set di awal dan huruf pertama dijadikan kapital

```js
const [isAuthenticated, setIsAuthenticated] = useState(true);
```

## Mengubah State

Kita dapat langsung memberikan nilai sebagai argumen dari setCount seperti berikut

```jsx
import { useState } from 'react';
 
const Counter = () => {
  const [count, setCount] = useState(0);
 
  const handleIncrementClick = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  );
};
```

Akan tetapi, jika kita ingin mengambil setCount beberapa kali, perubahan state menjadi rusak

```jsx
const handleIncrementClick = () => {
  setCount(count + 1);
  setCount(count + 1);
};
```

<img src="https://user-images.githubusercontent.com/68275535/132820335-51cd36f3-f8dc-4308-9d3f-2e54a3f0ef05.gif" width="500px">

Cara yang lebih baik adalah menggunakan previous state, bukannya langsung merubah nilai. Untuk itu, kita dapat memberikan suatu fungsi sebagai argumennya. Fungsi tersebut akan secara otomatis memiliki previous state sebagai parameter

```jsx
const handleIncrementClick = () => {
  setCount((prevState) => prevState + 1);
  setCount((prevState) => prevState + 1);
};
```

Terakhir, saat kita ingin merubah state yang berupa object/array, pertama kita harus melakukan spread terhadap state, baru mengubahnya

```jsx
const [user, setUser] = useState({
  name: 'RPL',
  isAuthenticated: true,
});

const handleClick = () => {
  setUser({
    ...user,
    isAuthenticated: false,
  });
};
```

# Form Handling

Terdapat dua cara melakukan form handling pada React yaitu menggunakan Controlled Component dan Uncontrolled Component. Pada HTML, tag seperti input, textarea, dan select akan melakukan maintain statenya sendiri menggunakan user input. Hal ini disebut Uncontrolled Component

Untuk mengubahnya menjadi Controlled Component, kita dapat menggunakan setState untuk melakukan perubahan agar state component tersebut diatur oleh React. Tambahkan props value dan onChange ke dalam input component seperti berikut

```jsx
import { useState } from 'react';
 
const Form = () => {
  const [username, setUsername] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
 
  return (
    <div>
      <input type='text' value={username} onChange={handleUsernameChange} />
      <p>Username: {username}</p>
    </div>
  );
};
```

Jika ingin meng-handle event submit pada form, kita dapat menggunakan onSubmit props seperti berikut. Jangan lupa memberi preventDefault agar page tidak di load ulang

```jsx
import { useState } from 'react';
 
const Form = () => {
  const [username, setUsername] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(username);
  };
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={handleUsernameChange} />
        <button type='submit'>Submit</button>
      </form>
      <p>Username: {username}</p>
    </div>
  );
};
```
