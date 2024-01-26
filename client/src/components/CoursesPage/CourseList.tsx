import React from "react";
import { CourseNode } from "./CourseNode";

interface CanvasProps{

}

interface courseInfo{
    img: string,
    title: string,
    content: string,
    completionPercent: number,
    // 0 - Course Completed
    // 1 - Resume Course
    // 2 - Start Course
    status: number,
}

interface CanvasState{
    listOfCourses: courseInfo[];
}

export class CourseList extends React.Component<CanvasProps, CanvasState> {

    constructor(props: CanvasProps){
        super(props);
        this.state = {
            listOfCourses: [
                {img: "../../../public/courseImg/CourseImg1.png",
                title: "Budgeting",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 100,
                status: 0},
                {img: "../../../public/courseImg/CourseImg2.png",
                title: "Building your credit",
                content: "Elevate your financial profile! Discover the secrets to building credit in our dedicated section. #CreditMastery #FinancialWellness",
                completionPercent: 32,
                status: 1},
                {img: "../../../public/courseImg/CourseImg3.png",
                title: "Investing",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 0,
                status: 2},
                {img: "../../../public/courseImg/CourseImg3.png",
                title: "Investing",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 0,
                status: 2},
                {img: "../../../public/courseImg/CourseImg3.png",
                title: "Investing",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 0,
                status: 2},
                {img: "../../../public/courseImg/CourseImg3.png",
                title: "Investing",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 0,
                status: 2},
                {img: "../../../public/courseImg/CourseImg3.png",
                title: "Investing",
                content: "Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness",
                completionPercent: 0,
                status: 2},
                
            ]
        }
    }
    render(){
        return(
            <div className="courseList">
                {
                    this.state.listOfCourses.map(node => 
                    <CourseNode imgPath={node.img}
                                title={node.title}
                                content={node.content}
                                status={node.status}
                                percentCompletion={node.completionPercent}/>)
                }
            </div>
        )
    }
}