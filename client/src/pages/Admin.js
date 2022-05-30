import { Admin,  Resource } from "react-admin";
import dataProvider from "../dataProvider";
import { StudentsList } from "../components/admin/StudentsList";
import { StudentCreate } from "../components/admin/StudentCreate";
import { StudentEdit } from "../components/admin/StudentEdit";
import { QuestionsList } from "../components/admin/QuestionsList";
import { QuestionCreate } from "../components/admin/QuestionCreate";
import { QuestionEdit } from "../components/admin/QuestionEdit";
import Person from "@mui/icons-material/Person";

import React from 'react'

export default function AdminPage() {
  return (
   
    <Admin basename="/admin" dataProvider={dataProvider}>
            <Resource name="students" list={StudentsList} create={StudentCreate} edit={StudentEdit} icon={Person} />
            <Resource name="questions" list={QuestionsList} create={QuestionCreate} edit={QuestionEdit} icon={Person} />
    </Admin>
    
  )
}
