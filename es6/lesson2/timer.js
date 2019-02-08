// Благодаря cheap-module-eval-source-map карте сайта в webpack config мы можем четко видеть файлы в разделе souces в браузере 
export default class Timer {
    constructor(el, time) {
        this.el = el;
        this.time = time;
        this._interval;

        this.render();
        this.start();
    }

    start() {
        // Передаем свой this
        this._interval = window.setInterval(this.tick.bind(this), 1000);
    }

    stop() {
        window.clearInterval(this._interval);
    }

// Благодаря plugins @babel/plugin-proposal-class-properties мы можкм импортировать методы классов как стрелочную функцию 
    tick = () => {
        this.time--;
        this.render();

        if(this.time <= 0){
            this.stop();
        }
    }

    render() {
        this.el.innerHTML = this.time;
    }
}

