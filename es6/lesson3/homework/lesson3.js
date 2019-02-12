import * as ArticlesModel from './articles';
import 'babel-polyfill'


async function testArticlesModel() {
    let articles = await ArticlesModel.all();
    console.log('articles count = ' + articles.length);

    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    let articlesState = await ArticlesModel.one(articles[ind].id)
    console.log(articlesState);

    let stateRemove = await ArticlesModel.remove(articlesState.id)
    console.log('что с удалением? - ' + stateRemove);

    let articlesAllNow = await ArticlesModel.all();
    console.log('articles count = ' + articlesAllNow.length);

}

// Ловим любую ошибку из промисов с одного места 
testArticlesModel().then(() => {
}).catch((e) => {
    document.querySelector('body').innerHTML += `<p>${e.message}</p>`;
    console.log(e.stack);
});