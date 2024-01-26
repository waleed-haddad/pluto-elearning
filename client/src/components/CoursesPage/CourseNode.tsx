interface CanvasProps{
    imgPath: string,
    title: string,
    content: string,
    status: number,
    percentCompletion: number,
}

export const CourseNode = (props: CanvasProps) => {
    return(
        <div className="courseNode">
            <img src={props.imgPath} alt="courseNodeImg" className="courseImgNode"/>
            <div className="percentCompletion">{props.percentCompletion}%</div>
            <div className="courseTitleNode">{props.title}</div>
            <div className="courseContentNode">{props.content}</div>
            <button className={"courseButtonNode " + "courseButtonVer" + props.status}>
                {
                    props.status == 0? <>Course Completed!</> : 
                    props.status == 1? <>Resume Course</> : <>Start Course</>
                }
            </button>
        </div>
    )
}