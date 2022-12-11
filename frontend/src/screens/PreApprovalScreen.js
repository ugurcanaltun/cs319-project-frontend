import * as React from 'react';
import PreApprovalStudent from "./Student/PreApprovalStudent";
import PreApprovalDepCoordinator from "./DepCoordinator/PreApprovalDepCoordinator";
import PreApprovalAdmCoordinator from "./AdmCoordinator/PreApprovalAdmCoordinator";
import PreApprovalFacAdmCoordinator from "./FacAdmCoordinator/PreApprovalFaculty";
import { useSelector } from 'react-redux';

export default function PreApprovalScreen() {
    const userType = useSelector(state => state.userType.userType)
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