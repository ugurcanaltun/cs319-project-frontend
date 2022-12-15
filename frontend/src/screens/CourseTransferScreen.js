import * as React from 'react';
import CourseTransferStudent from "./Student/CourseTransferStudent";
import CourseTransferDepCoordinator from "./DepCoordinator/CourseTransferDepCoordinator";
import CourseTransferDepChair from "./DepChair/CourseTransferDepChair"
import CourseTransferDean from "./Dean/CourseTransferDean"
import CourseTransferFaculty from "./FacAdmCoordinator/CourseTransferFaculty";
import { useGetUserQuery } from '../redux/api/apiSlice';

export default function CourseTransferScreen() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetUserQuery()
    const userType = data.users.role
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