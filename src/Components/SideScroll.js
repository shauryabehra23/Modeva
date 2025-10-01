import Card from "./Card"

export default function SideScroll(props)
{
    return(
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap min-h-[33vh] max-h-[60vh] snap-x snap-mandatory justify-around">
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