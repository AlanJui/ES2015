![](https://dl.dropboxusercontent.com/u/45512449/ES2015.jpg)

使用指引
=======

本工具主要功能如下：
 * 以 Gulp 為基底，建構「自動化建置（Auto-build）」工具
 * 支援 ES2015 JavaScript 編譯
 * 支援 ESLint ，用以檢視 JavaScript 語法無誤
 * 支援 SASS 編譯
 * 支援 BrowserSync ，可為開發時使用之 Web Server

# 安裝作業

## 事前準備

使用本工具前，須事先完成 node, npm 安裝。欲確認 node、npm 是否已完成安裝，並能正常運作，可在「終端機」輸入如下指令，以便確認：
 
    $ node -v
    v5.2.0

    $ npm -v
    3.3.12


## 安裝配合本工具所需之公用 Node 模組

本工具執行時，尚需配合如下之公用 Node 模組，才能正常運作：

 * Gulp
 * ESLint
 * JSON Server

`安裝指令`

    $ npm install -g gulp eslint json-server

## 透過 package.json 安裝所需之 Node 模組

    $ npm install

# 執行作業

## 啟動 JSON Server

    $ npm run db

## 執行開發建置工具

    $ gulp

