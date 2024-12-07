# Описание Проекта

### динамичность веб-страниц

изменяется вёрстка элементов, скрываются, запрещаются, подсвечиваются интерфейсные элементы, всплывают сообщения об ошибках или успешных действиях

### производительность отрисовки

реализованы анимации при удалении и рендеринге элементов списка, можно протестировать на странице [http://localhost:3000/favorite](http://localhost:3000/favorite)

### навигация в приложении

реализован постраничный просмотр списка на странице [http://localhost:3000](http://localhost:3000), а также навигация по приложению, при помощи библиотеки react-router-dom

### кроссбраузерность

адаптивная вёрстка всего приложения

### коммуникации

веб-приложение использует AJAX для получения и фейкового сохранения данных (файл filterSlice.js); отображается прогресс загрузки объёмных данных

### модель данных

для хранения данных используется redux/toolkit, реализация в папке redux;
реализованы 2 слайса, один для управления данными о фильмах, второй для управления состоянием фильтров и сортировки

### сборка проекта

prod-сборка проекта выполняется без ошибок и предупреждений, командой `npm run build`

### тесты

реализованы тесты для компонентов формы, можно увидеть в папке `components->Form`, команда для старта тестирования `npm test` 



# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.