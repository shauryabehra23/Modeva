import Card from "./Card"

export default function SideScroll(props)
{
    return(
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap max-h-[60vh] snap-x h-min snap-mandatory justify-around">
            <Card type={props.type} />
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
            <Card type={props.type}/>
        </div>
    );
}