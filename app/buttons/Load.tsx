export default function Load(props:{callback: Function})
{
    const {callback} = props
    const handleLoadBrainz = async (brain: Object) =>
        {
            try
            {
                const response = await fetch('/api/db/brainz/load',
                {
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',  // Add this line
                      },
                })

                if (response.ok)
                {
                    const data = await response.json()
                    callback( JSON.stringify(data) )
                    alert(`Success: ${JSON.stringify(data)}`)
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
    return <div className="button" onClick={(e) => { e.stopPropagation(); handleLoadBrainz(callback); }}>Load</div>
}
