# Belet Film Program

![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![Cross-Platform](https://img.shields.io/badge/Cross--Platform-✓-green?style=for-the-badge)

**Belet Film Program** — это неофициальный настольный клиент для сайта [film.belet.tm](https://film.belet.tm/), созданный с помощью Electron. Программа позволяет открыть сайт в отдельном окне, как мини-браузер, с кастомной иконкой и возможностью применения локальных стилей и интерфейсных настроек.

> ⚠️ **Важно**: Это приложение **не является официальным продуктом Belet Film**. Все права на контент, дизайн и торговые марки принадлежат **JAN Tehnologiya**. Этот клиент предназначен только для личного или образовательного использования.

## 🚀 Возможности

- 📱 Открытие сайта `film.belet.tm` в отдельном окне Electron
- 🎨 Кастомная иконка приложения
- 🖥️ Убирает стандартное меню Windows/Linux/macOS (File, Edit, View, Window, Help)
- 🌙 Возможность применения локальных стилей через `preload.js` (например, тёмная тема, скрытие ненужных элементов)
- 🔧 Кроссплатформенный: Windows, Linux, macOS
- 📦 Компактная сборка с использованием `asar` для уменьшения веса приложения

## 📦 Установка и запуск из исходников

### Предварительные требования
- Node.js (версия 16 или выше)
- npm или yarn

1. **Склонируйте репозиторий**
```bash
git clone https://github.com/yourusername/belet-film-app.git
cd belet-film-app
```

2. **Установите зависимости**
```bash
npm install
```
или, если используете yarn:
```bash
yarn install
```

3. **Запуск приложения**
```bash
npm start
```
или, если используете yarn:
```bash
yarn start
```

После запуска приложение откроется в отдельном окне с сайтом [film.belet.tm](https://film.belet.tm/) .

## 🔧 Сборка установщика

**Windows**
```bash
npm run dist
```
* В папке dist/ появится .exe установщик или распакованная версия **(win-unpacked).**

**Linux**
* Используйте **Linux** напрямую или *WSL2* на **Windows**.
* Установите необходимые пакеты:
```bash
sudo apt update
sudo apt install -y nodejs npm ruby ruby-dev build-essential
sudo gem install --no-document fpm
```

* Соберите приложение:
```bash
npm run dist
```
* В папке dist/ появятся .AppImage, .deb и .rpm

**macOS**
* Сборка требует **macOS** для создания .dmg или .pkg
```bash
npm run dist
```
* Результат будет в папке dist/

## 🎨 Кастомизация интерфейса
* Через preload.js можно изменять стили сайта только в твоём приложении, оригинальный сайт остаётся без изменений (опционально):
```bash
// preload.js
window.addEventListener('DOMContentLoaded', () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'custom-style.css';
    document.head.appendChild(link);
});
```

## 📦 Структура проекта
* *main.js* — главный файл приложения, создаёт окно и управляет настройками
* *preload.js* (опционально) — подключение кастомных стилей и скриптов
* *package.json* — зависимости и скрипты сборки
* *package-lock.json* — фиксированные версии зависимостей
* *icon.ico*, *icon.png*, *icon.icns* — иконки для разных платформ
* *node_modules*/ — зависимости проекта (не хранить в GitHub)
* *dist*/ — собранные установщики (не хранить в GitHub)
