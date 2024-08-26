function handleClick(brain: Object)
{

}
export default function Save(props:{brain: Object})
{
    const {brain} = props;
    return <div className="button" onClick={(e) => { e.stopPropagation(); handleClick(brain); }}>Save</div>
}
