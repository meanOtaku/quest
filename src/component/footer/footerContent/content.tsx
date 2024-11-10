import content from "./Content.module.css"

interface ContentProps {
    services: string,
    dmc: string[]
}
export default function Content(props: ContentProps) {
    return(
        <div className="flex flex-col text-left">
            <div className={content.heading}>
                {props.services}
            </div>
            {props.dmc.map(function(object, i){
                return (
                    <div className={content.content} key={i}>
                        {object}
                    </div>
                );
            })}
        </div>
    )
}