import { Admin, Resource } from "react-admin";
import dataProvider from "../dataProvider";
import { StudentsList } from "../components/admin/StudentsList";
import { StudentCreate } from "../components/admin/StudentCreate";
import { StudentEdit } from "../components/admin/StudentEdit";
import { QuestionsList } from "../components/admin/QuestionsList";
import { QuestionCreate } from "../components/admin/QuestionCreate";
import { QuestionEdit } from "../components/admin/QuestionEdit";
import Person from "@mui/icons-material/Person";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { ExamList } from "../components/admin/ExamList";
import { ExamCreate } from "../components/admin/ExamCreate";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ExamEdit } from "../components/admin/ExamEdit";
import "./css/Admin.css"
import React from 'react'
import NavBar from "../components/exam/NavBar";

export default function AdminPage() {
  return (
    <div className="mt-1">
      <NavBar/>
      <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name="students" list={StudentsList} create={StudentCreate} edit={StudentEdit} icon={Person} />
        <Resource name="questions" list={QuestionsList} create={QuestionCreate} edit={QuestionEdit} icon={QuestionMarkIcon} />
        <Resource name="exams" list={ExamList} create={ExamCreate} edit={ExamEdit} icon={AssignmentIcon} />
      </Admin>
    </div>


  )
}
//<Resource name="exams" list={CreateExam} />