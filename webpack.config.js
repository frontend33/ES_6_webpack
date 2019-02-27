let path = require('path')

let conf = {
		// 	entry: './es6/Homework2.js',
	// entry: './es6/lesson3.js',
	// entry: './es6/lesson3/homework/lesson3.js',
	// entry: './es6/lesson4/scripts.js',
	// entry: './es6/lesson5/scripts.js',
	// entry: './es6/lesson6/scripts.js',
	entry: './es6/lesson6-hw-done/index.js',

	output: {
		path: path.resolve(__dirname, './js'),
		filename: 'main.js',
		publicPath: 'js/'
	},
	// Выводит ошибки в браузере
	devServer: {
		overlay: true,
		proxy: {
			'/js-6-api/**': {
				target: 'http://faceprog.ru/',
				secure: false,
				changeOrigin: true
			}
		}
	},
	// Правила загрузки файлов в вебпаке
	module: {
		rules: [
			{
				// Регулярное выражение попали ли в расширение
				test: /\.js$/,
				/* Если файл найден идем в бабел лоадер
				loader должен загрузить содержимое файла и обрабатываем по правилам
				тестирует имя файла и выбирает какой модуль нужно применить js css и т. д.
				loader решает как обратотать импорт куда обернуть и подставить style или script 
				*/
				loader: 'babel-loader',
				// exclude: 'node_modules/'
			}
		]
	}
};

module.exports = (env, options) => {
	// Указываем какой source-map выбираем и используем только в девелопмент режиме
	conf.devtool = options.mode === "production" ? 
                    false :
                    "cheap-module-eval-source-map";
	return conf;

};
