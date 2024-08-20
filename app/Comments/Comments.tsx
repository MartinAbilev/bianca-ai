import { useEffect, useState } from "react"

export default  function Comments()
{
    const com: any = []
    const [comments, setComments] = useState(com)

    useEffect(()=>
    {
        fetch('/api/db', {cache: 'no-cache'}).then(res=>res.json()).then(json=>
            {
                setComments(json.rows)
                // console.log(json)
            })
    }, [])
    return (
    <div className="flex  flex-col items-center justify-top">
        <div>
            COMMENTS
        </div>
        {comments  && comments.map((row:any , key: number)=>
            {
                return (<div key={key} className="p-2">{key}: {JSON.stringify(row)} </div>)
            })}
    </div>)
}
