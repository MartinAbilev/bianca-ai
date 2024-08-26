function handleClick(brain: Object)
{

}
export default function Load(props:{brain: Object})
{
    const {brain} = props;
    return <div className="button" onClick={(e) => { e.stopPropagation(); handleClick(brain); }}>Load</div>
}
