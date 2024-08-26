import { useEffect } from "react";

export default function Save(props:{brain: Object})
{
    const {brain} = props
    const handleInsertBrainz = async (brain: Object) =>
    {
        try
        {
            const response = await fetch('/api/db/brainz/insert',
            {
                method: 'POST',
                body: JSON.stringify(brain)
            })

            if (response.ok)
            {
                const data = await response.text()
                alert(`Success: ${data}`)
            }
            else
            {
                alert('Failed to insert data')
            }
        }
        catch (error)
        {
          console.error('Error:', error)
          alert('An error occurred')
        }
    }

    return <div className="button" onClick={(e) => { e.stopPropagation(); handleInsertBrainz(brain); }}>Save</div>
}
