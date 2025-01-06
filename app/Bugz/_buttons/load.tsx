export default function Load(props:{callback: Function})
{
    const {callback} = props
    const handleLoadBrainz = async (brain: Object) =>
        {
            try
            {
                const response = await fetch('/api/db/brainz/load',
                {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',  // Add this line
                      },
                })

                if (response.ok)
                {
                    const data = await response.json()

                    console.log('Bug from DB retrievied', data)
                    callback( data )
                }
                else
                {
                    alert('Failed to upload data')
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
