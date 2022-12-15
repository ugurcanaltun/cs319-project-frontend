import * as React from 'react';
import PreApprovalStudent from "./Student/PreApprovalStudent";
import PreApprovalDepCoordinator from "./DepCoordinator/PreApprovalDepCoordinator";
import PreApprovalAdmCoordinator from "./AdmCoordinator/PreApprovalAdmCoordinator";
import PreApprovalFacAdmCoordinator from "./FacAdmCoordinator/PreApprovalFaculty";
import { useGetUserQuery } from '../redux/api/apiSlice';

export default function PreApprovalScreen() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetUserQuery()
    const userType = data.users.role
    return(
        userType === "student" 
        ? <PreApprovalStudent/> : 
        userType === "depCoordinator"
        ? <PreApprovalDepCoordinator/> :
        userType === "admCoordinator" 
        ? <PreApprovalAdmCoordinator/> :
        userType === "faCommittee" 
        ? <PreApprovalFacAdmCoordinator/> :
        <div></div>
    )
}