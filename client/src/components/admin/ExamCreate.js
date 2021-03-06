import * as React from "react";
import { Create,SimpleForm,TextInput, DateTimeInput} from "react-admin";


export const ExamCreate = () => (
    <Create title="Create a Student" redirect="list">
        <SimpleForm>
            <TextInput source="examname" />
            <DateTimeInput source="start" />
            <DateTimeInput source="end" />
        </SimpleForm>
    </Create>
    
);