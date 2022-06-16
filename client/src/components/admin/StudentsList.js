import * as React from "react";
import { List, Datagrid, TextField, EditButton, FilterButton,
FilterForm, EmailField, CreateButton, TextInput, DeleteButton } from "react-admin";

 


export const StudentsList = () => (
    <List>
        
        <Datagrid rowClick="edit" size="small" >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
        
    </List>
);