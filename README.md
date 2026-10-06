# 🎹 Piano Player

A simple and interactive piano player built with **HTML, CSS, and JavaScript**.

This project allows users to play piano notes using their **keyboard**, control the **volume**, and show or hide the keyboard keys displayed on the piano.

## ✨ Features

* 🎹 Play piano notes using the keyboard
* 🖱️ Interactive piano keys
* 🔊 Volume control
* 👀 Show / Hide keyboard keys
* ⌨️ Keyboard event handling
* 🎵 Audio playback for each piano note
* 📱 Responsive layout

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

## 🎮 How to Use

Use the following keyboard keys to play the piano:

| Piano Key | Keyboard |
| --------- | -------- |
| White Key | `A`      |
| White Key | `S`      |
| White Key | `D`      |
| White Key | `F`      |
| White Key | `G`      |
| White Key | `H`      |
| White Key | `J`      |
| White Key | `K`      |
| White Key | `L`      |
| White Key | `;`      |
| Black Key | `W`      |
| Black Key | `E`      |
| Black Key | `T`      |
| Black Key | `Y`      |
| Black Key | `U`      |
| Black Key | `O`      |
| Black Key | `P`      |

### 🔊 Volume

Use the volume slider to increase or decrease the piano volume.

### 👀 Show Keys

The **Show Keys** checkbox allows you to display or hide the keyboard letters on the piano keys.

## 📂 Project Structure

```text
piano/
│
├── index.html
│
├── js/
│   └── app.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── tunes/
│       ├── a.wav
│       ├── w.wav
│       ├── s.wav
│       ├── e.wav
│       ├── d.wav
│       ├── f.wav
│       ├── t.wav
│       ├── g.wav
│       ├── y.wav
│       ├── h.wav
│       ├── u.wav
│       ├── j.wav
│       ├── k.wav
│       ├── o.wav
│       ├── l.wav
│       ├── p.wav
│       └── ;.wav
│
└── README.md
```

## 🔍 How It Works

When a keyboard key is pressed, JavaScript checks whether the pressed key matches one of the piano keys using its `data-key` attribute.

If a match is found:

1. The corresponding audio file is selected.
2. The audio is played.
3. The piano key receives an `active` class.
4. After a short delay, the `active` class is removed.

The volume slider directly controls the audio volume, while the checkbox controls the visibility of the keyboard labels.

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Open the project folder and launch `index.html` in your browser.

No external libraries or frameworks are required.

## 👩🏻‍💻 Author

**Elaheh Bafandeh**
LinkedIn: [Elaheh Bafandeh](https://www.linkedin.com/in/elaheh-bafandeh/)

---

# 🎹 پیانو پلیر

یک پروژه ساده و تعاملی **پیانو** که با استفاده از **HTML، CSS و JavaScript** ساخته شده است.

در این پروژه کاربر می‌تواند با استفاده از **کیبورد کامپیوتر** نت‌های پیانو را اجرا کند، میزان صدا را کنترل کند و نمایش حروف مربوط به کلیدهای کیبورد را فعال یا غیرفعال کند.

## ✨ ویژگی‌ها

* 🎹 اجرای نت‌های پیانو با استفاده از کیبورد
* 🖱️ کلیدهای تعاملی پیانو
* 🔊 کنترل میزان صدا
* 👀 نمایش / مخفی کردن حروف کلیدها
* ⌨️ مدیریت رویدادهای کیبورد
* 🎵 پخش فایل صوتی برای هر نت
* 📱 طراحی واکنش‌گرا (Responsive)

## 🛠️ تکنولوژی‌های استفاده‌شده

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

## 🎮 نحوه استفاده

برای اجرای نت‌های مختلف، از کلیدهای زیر روی کیبورد استفاده کنید:

| کلید پیانو | کلید کیبورد |
| ---------- | ----------- |
| کلید سفید  | `A`         |
| کلید سفید  | `S`         |
| کلید سفید  | `D`         |
| کلید سفید  | `F`         |
| کلید سفید  | `G`         |
| کلید سفید  | `H`         |
| کلید سفید  | `J`         |
| کلید سفید  | `K`         |
| کلید سفید  | `L`         |
| کلید سفید  | `;`         |
| کلید مشکی  | `W`         |
| کلید مشکی  | `E`         |
| کلید مشکی  | `T`         |
| کلید مشکی  | `Y`         |
| کلید مشکی  | `U`         |
| کلید مشکی  | `O`         |
| کلید مشکی  | `P`         |

### 🔊 کنترل صدا

با استفاده از نوار **Volume** می‌توانید میزان صدای پیانو را افزایش یا کاهش دهید.

### 👀 نمایش کلیدها

با استفاده از گزینه **Show Keys** می‌توانید حروف مربوط به کلیدهای کیبورد را روی کلیدهای پیانو نمایش داده یا مخفی کنید.

## 📂 ساختار پروژه

```text
piano/
│
├── index.html
│
├── js/
│   └── app.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── tunes/
│       ├── a.wav
│       ├── w.wav
│       ├── s.wav
│       ├── e.wav
│       ├── d.wav
│       ├── f.wav
│       ├── t.wav
│       ├── g.wav
│       ├── y.wav
│       ├── h.wav
│       ├── u.wav
│       ├── j.wav
│       ├── k.wav
│       ├── o.wav
│       ├── l.wav
│       ├── p.wav
│       └── ;.wav
│
└── README.md
```

## 🔍 نحوه عملکرد پروژه

هنگامی که کاربر یکی از کلیدهای کیبورد را فشار می‌دهد، JavaScript بررسی می‌کند که آیا کلید فشرده‌شده با یکی از کلیدهای پیانو مطابقت دارد یا خیر.

این کار با استفاده از ویژگی `data-key` انجام می‌شود.

در صورت وجود تطابق:

1. فایل صوتی مربوط به آن نت انتخاب می‌شود.
2. فایل صوتی پخش می‌شود.
3. کلاس `active` به کلید پیانو اضافه می‌شود.
4. پس از مدت کوتاهی، کلاس `active` حذف می‌شود.

همچنین نوار **Volume** میزان صدای Audio را کنترل می‌کند و گزینه **Show Keys** وظیفه نمایش یا مخفی کردن حروف روی کلیدهای پیانو را بر عهده دارد.

## 🚀 اجرای پروژه

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

سپس وارد پوشه پروژه شوید و فایل `index.html` را در مرورگر اجرا کنید.

این پروژه برای اجرا به هیچ کتابخانه یا فریم‌ورک خارجی نیاز ندارد.

## 👩🏻‍💻 توسعه‌دهنده

**Elaheh Bafandeh**

LinkedIn: [Elaheh Bafandeh](https://www.linkedin.com/in/elaheh-bafandeh/)

