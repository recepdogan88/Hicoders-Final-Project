import * as React from "react";
import { Create,SimpleForm,TextInput, DateInput} from "react-admin";


export const ExamCreate = () => (
    <Create title="Create a Student" redirect="list">
        <SimpleForm>
            <TextInput source="examname" />
            <DateInput source="published_at" />
        </SimpleForm>
    </Create>
    
);