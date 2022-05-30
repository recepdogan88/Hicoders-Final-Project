import * as React from "react";
import {  Edit,  SimpleForm,  TextInput, SelectInput } from "react-admin";
import { RichTextInput ,RichTextInputToolbar} from 'ra-input-rich-text';

export const QuestionEdit = () => (
    <Edit title="Edit Student">
        <SimpleForm>
            <TextInput disabled source="id" />
            <RichTextInput source="question"toolbar={<RichTextInputToolbar size="large" />} />
            <TextInput source="option1" />
            <TextInput source="option2" />
            <TextInput source="option3" />
            <TextInput source="option4" />
            <TextInput source="answer" />
            <SelectInput source="category" choices={[
                { id: 'grammar', name: 'grammar' },
                { id: 'reading', name: 'reading' },
                { id: 'listening', name: 'listening' },
            ]} />          
        </SimpleForm>
    </Edit>
);