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
                })

                if (response.ok)
                {
                    const data = await response.text()
                    callback(data)
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
    return <div className="button" onClick={(e) => { e.stopPropagation(); handleLoadBrainz(callback); }}>Load</div>
}
