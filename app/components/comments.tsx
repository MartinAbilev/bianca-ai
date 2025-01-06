import { useEffect, useState } from "react"

export default  function Comments()
{
    const com: any = []
    const [comments, setComments] = useState(com)

    useEffect(()=>
    {
        fetch('/api/db/comments/getAll',
        {
            cache: 'no-cache',
            headers:
            {
              'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then(json=>
        {
            console.log('comments: ', json)
            setComments(json)
        })
    }, [])
    return (
    <div className="flex  flex-col items-center justify-top">
        <div>
            COMMENTS
        </div>
        {
            comments.rows ?  comments.rows.map((row:any , key: number)=>
            {
                return (<div key={key} className="p-2">{key}: {JSON.stringify(row)} </div>)
            })
            :
            <div className="p-4">
                {JSON.stringify(comments)}
            </div>


        }
    </div>)
}
