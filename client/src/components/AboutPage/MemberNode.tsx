interface CanvasProps{
    imgPath: string,
    name: string,
    role: string,
    content: string
}

export const MemberNode = (props: CanvasProps) => {
    return(
        <div className="aboutNode">
            <img src={props.imgPath} alt="aboutNodeImg" className="aboutImgNode"/>
            <div className="aboutNameNode">{props.name}</div>
            <div className="aboutRoleNode">{props.role}</div>
            <div className="aboutContentNode">{props.content}</div>
        </div>
    )
}