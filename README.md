## Тестовое задание для компании СкайПро:

 - [Описание задания](https://docs.google.com/document/d/1oO-nicZ1qGTNppouI8AbwWJeLGITvzQT_GTTQf-76bA/edit)
 - [Макет](https://www.figma.com/file/NBdyWNYPzd2cOvWsiNyjSD/Untitled?type=design&node-id=133-340&mode=design&t=RHm8frXZGY1VXtFW-0)

 ## Команды проекта:

 Установка зависимостей

```bash
  npm i 
```
 Установка зависимостей

```bash
  npm run start
```
Сборка в продакшен режиме

```bash
  npm run build:prod
```
 Сборка в режиме разработки 

```bash
   npm run build:dev
```
 Сборка в продакшен + деплой в GH pages

```bash
  npm run deploy
```
##  Стек:

 - TypeScript
 - Webpack
 - Babel
 - Postcss
 - SCSS

##  Описание проекта:

Проект создан в соответствии с заданием и макетом. 
Использование фреймворка React я посчитал излишним т.к сайт
является магазином, а следовательно b2c проектом которому 
понадобится SEO оптимизация. Настроить ранжирование и индексацию 
страниц будет гараздо проще и удобнее для обычного 
многостраничного сайта.

Использование typescript положительно влияет на последующее 
сопровождение проекта, а также исключает потенциальные ошибки связанные с форматами и типами данных - делает продукт более безопасным в рантайме. 

В проекте использована кастомная конфигурация сборки в которой реализована prod и dev сборка через env флаг. Конфигурация оптимальна для расширения и покрывает все необходимые кейсы данного проекта. В сборке учтена обработка css: добавление префиксов, группировка медиазапросов, минификация файлов, синтаксис SCSS, переменные. Подключен транспилятор для комфортной работы с последними стандартами JS. Добавлен babel/polyfill для адаптации самых свежих фич языка. Для приведения стилей к одному стандарту используется normalize.css. Используется image-webpack-loader для сжатия картинок. В перспективе можно добавить шаблонизатор, тут для двух страниц я не стал внедрять дополнительную зависимость. 
