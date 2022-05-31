import * as React from "react";
import {  Create, SimpleForm,  TextInput ,SelectInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';


export const QuestionCreate = (props) => (
    <Create title="Create a Question" redirect="list">
        <SimpleForm>
        <RichTextInput source="question"  />
            <TextInput source="option1" />
            <TextInput source="option2" />
            <TextInput source="option3" />
            <TextInput source="option4" />
            <TextInput source="answer" />
            <SelectInput source="category" choices={[
            { id: 'grammar', name: 'Grammar' },
            { id: 'reading', name: 'Reading' },
            { id: 'listening', name: 'Listening' },
        ]} />          
        </SimpleForm>
    </Create>
);
