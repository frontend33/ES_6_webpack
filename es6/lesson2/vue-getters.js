export default class VueGetters {
    constructor(settings) {
        this.$el = document.querySelector(settings.el)
        this.$template = settings.template
        this.$data = settings.data
        this.data = {}

        for (let name in  this.$data) {
            Object.defineProperty(this.data, name, {
                get: () => {
                    return this.$data[name]
                },
                set: (value) => {
                    this.$data[name] = value
                    this.render()
                }
            })
        }
        /* После того как конструктор отработает в конце 
        вызова конструктора рендерим новый элемент вызываем рендер*/
        this.render()
    }

    // что бы отрендерить шаблон мы переменные заменяем на ключи из объекта data
    render() {
        /* + Виртуальный дом 
        + Обширные возможности в шаблонах

        
        /* Пример виртуального дома мы DOM превращаем в объект
            {
                tag: 'div',
                listeners: [],
                classes: [],
                children: [
                    {
                        tag: 'h2',
                        innerText: '{{clicks}}'
                    },
                    {
                        tag: 'div',
                        innerText: '{{some}}'
                    }
                ]
            }

        */
        /*
 При помощи регулярки находим все переменные заклюенные в фигурные скобки и 
        благодаря регулярки, в параметр name попадают названия ключей которые были использованы
        */
        

      
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
             /* В match попадает что просто находим 
            console.log(match) -- {{clicks}}
            в name попадает то, что в круглых написанно (.*)
            console.log(name) // clicks
            */
            let key = name.trim();
            return this.$data[key];
           
        })
        this.$el.innerHTML = html
    }
}