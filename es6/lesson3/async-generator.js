export function asyncSequence(generator, prevValue) {
    let current = generator.next(prevValue)
    if(!current.done) {
        current.value.then((res) => {
            asyncSequence(generator, res)
        }).catch((err) => {
            generator.throw(err)
        })
    }
}