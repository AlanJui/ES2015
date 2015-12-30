![](https://dl.dropboxusercontent.com/u/45512449/ES2015.jpg)

使用指引
=======

本工具主要功能如下：
 * 以 Gulp 為基底，建構「自動化建置（Auto-build）」工具
 * 使用 Babel 將 ES2015 JavaScript 編譯成 ES5 語法
 * 使用 ESLint ，用以檢視 JavaScript 語法無誤
 * 可將 Sass 編譯成 css 檔案
 * 使用 BrowserSync ，以為開發時使用之 Web Server
 * 使用 JSON Server 作為開發時使用之 DB Server ，可增快 RESTful API 之開發

# 安裝作業

## 事前準備

須先完成「版本控管工具」 git 安裝。 

使用本工具前，須事先完成 node, npm 安裝。欲確認 node、npm 是否已完成安裝，並能正常運作，可在「終端機」輸入如下指令，以便確認：
 
    $ node -v
    v5.2.0

    $ npm -v
    3.3.12

## 安裝 NodeJS 公用模組

本工具執行時，尚需配合如下之 NodeJS 公用模組(Global)，才能正常運作：

 * Gulp
 * ESLint
 * JSON Server

`安裝指令`

    $ npm install -g gulp eslint json-server

## 自 GitHub 複製檔案到工作目錄

依據下列之操作指示，自 GitHub Repo 將檔案複製（Clone）到個人電腦的「工作目錄」中。

    $ cd <工作目錄>
    $ git clone https://github.com/AlanJui/ES2015.git
    $ cd ES2015

## 安裝專案層級的 NodeJS 檔案

透過 package.json 設定檔，安裝屬專案層級（Local）的 Node 模組。

    $ npm install

# 執行作業

## 啟動 JSON Server

    $ npm run db

## 執行開發建置工具

    $ gulp


# 參考資訊

## Gulp 入門

YouTube 教學影片：Gulp.js Build System

[![Gulp.js Build System](https://i.ytimg.com/vi/LmdT2zhFmn4/default.jpg)](https://www.youtube.com/watch?v=LmdT2zhFmn4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G)

## JSON Server

關於 JSON Server 更多的操作及用法，可參考：
[JSON Server 官網](https://github.com/typicode/json-server)。

























