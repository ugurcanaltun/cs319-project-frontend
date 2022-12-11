import * as React from 'react';
import CourseTransferStudent from "./Student/CourseTransferStudent";
import CourseTransferDepCoordinator from "./DepCoordinator/CourseTransferDepCoordinator";
import CourseTransferDepChair from "./DepChair/CourseTransferDepChair"
import CourseTransferDean from "./Dean/CourseTransferDean"
import CourseTransferFaculty from "./FacAdmCoordinator/CourseTransferFaculty";
import { useSelector } from 'react-redux';

export default function CourseTransferScreen() {
    const userType = useSelector(state => state.userType.userType)
    return(
        userType === "student" 
        ? <CourseTransferStudent/> : 
        userType === "depCoordinator"
        ? <CourseTransferDepCoordinator/> :
        userType === "dChair" 
        ? <CourseTransferDepChair/> :
        userType === "dean" 
        ? <CourseTransferDean/> :
        userType === "faCommittee"
        ? <CourseTransferFaculty/> :
        <div></div>
    )
}