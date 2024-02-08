<div style="text-align: justify">

# TEST: DOT_QA_AUTOMATION

## Cypress
Cypress adalah sebuah alat pengujian *end-to-end* (E2E) yang berbasis pada Javascript dan memiliki fitur *auto detect* pada perubahan yang terjadi pada *automation script*. Fitur lain dari Cypress adalah mampu menjalankan perintah dari *automation script* dengan grafis (GUI) atau perintah baris (CLI). Selain itu, Cypress memberikan kemudahan bagi pengguna untuk bisa langsung mengakses DOM dari sebuah elemen yang ada pada sebuah situs.

## Instalasi
Terdapat beberapa tahap yang perlu dilakukan untuk menjalankan *test script* pada folder ini. Berikut adalah proses dalam melaksanakan tahapan tersebut:
- Lakukan *clone repo* dengan perintah:
  `sudo git clone https://github.com/hardyyudha/DOT_QA.git`
- Ubah permission pada folder repository yang sudah di-*clone* barusan dengan perintah:
  `sudo chown -R user_anda DOT_QA`
- Saat membuka repository **DOT_QA** menggunakan **VS CODE**, jalankan perintah berikut:
  `sudo npm install`
- Setelah proses selesai, jalankan perintah berikut:
  `npx cypress open`

  ##### Note
  Jika Cypress tidak bisa terbuka, lakukan langkah berikut:
  - Hapus `node_modules`
  - Jalankan perintah berikut:
    ```
    sudo npm init
    sudo npm install cypress --save-dev
    sudo npx install cypress --f
    npx cypress open
    ```

## Running Script
Untuk menjalankan *script* dapat dilakukan dengan dua cara, yaitu GUI dan CLI. Berikut adalah langkah dalam menjalankan secara GUI:
- Pada terminal **VS Code**, jalankan perintah berikut:
  `npx cypress open`
- Pilih browser yang diinginkan
- Pilih file `pse_test.cy.js`

Sedangkan untuk menjalankan CLI, dapat menggunakan cara berikut:
- Pada terminal **VS Code**, jalankan perintah:
  `npx cypress run`
- Tunggu hingga proses selesai dan hasil akan muncul di terminal **VS Code**

Report akan muncul pada saat menjalankan *test* menggunakan CLI dan akan tersimpan pada path `cypress/results` berupa **html** dan **json**

##### Note
Akan muncul *error* pada *report* di bagian **Login dengan Google Credential** dikarenakan Cypress tidak bisa membuka *window* baru. Sehingga untuk membuat sukses *test* tersebut, perlu dijalankan *test* pada mode GUI

## Dokumentasi Test Case
Dokumentasi terkait *test case* dengan skenario *login* ada pada link [ini].(https://docs.google.com/spreadsheets/d/1OBsNdN3RRQPZocJU3FYj19Ci8vT3IkHbGQi1DFABQC0/edit?usp=sharing)
</div>