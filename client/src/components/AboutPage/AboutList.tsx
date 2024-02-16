import React from "react";
import { MemberNode } from "./MemberNode";

interface CanvasProps{

}

interface memberInfo{
    img: string,
    name: string,
    role: string,
    content: string,
}

interface CanvasState{
    listOfMembers: memberInfo[];
}

export class AboutList extends React.Component<CanvasProps, CanvasState> {

    constructor(props: CanvasProps){
        super(props);
        this.state = {
            listOfMembers: [
                {
                    img: "../../../public/aboutImg/KevinImage.jpg",
                    name: "Qi Wen (Kevin) Wei",
                    role: "Full-Stack Developer",
                    content: "Whoohoo"
                },
                {
                    img: "../../../public/aboutImg/KevinImage.jpg",
                    name: "Qi Wen (Kevin) Wei",
                    role: "Full-Stack Developer",
                    content: "Whoohoo"
                },
                {
                    img: "../../../public/aboutImg/KevinImage.jpg",
                    name: "Qi Wen (Kevin) Wei",
                    role: "Full-Stack Developer",
                    content: "Whoohoo"
                },
                {
                    img: "../../../public/aboutImg/KevinImage.jpg",
                    name: "Qi Wen (Kevin) Wei",
                    role: "Full-Stack Developer",
                    content: "Whoohoo"
                },
            ]
        }
    }
    render(){
        return(
            <div className="aboutList">
               {
                    this.state.listOfMembers.map(node => 
                        <MemberNode imgPath={node.img}
                                    name={node.name}
                                    role={node.role}
                                    content={node.content}/>)
               }
            </div>
        )
    }
}