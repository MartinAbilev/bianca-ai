import {users} from "./users.json"
import {convos} from "./utterances.json"

export  function corpus()
{
    const corpus: any =[]

    const len = convos.length
    let ii = 0
    for (let i = 0; i < len; i+2)
    {
        corpus[ii] = {a: convos[i].text, b: convos[i+1].text}
        i<20 && console.log('convo', corpus[ii])
        ii++
    }

    return corpus
}
