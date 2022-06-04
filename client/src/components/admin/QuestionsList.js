import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton,  FilterButton,
    FilterForm,
    ListBase,
    Pagination,
    TextInput,
 } from "react-admin";
 import { Stack } from '@mui/material';
 

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            
        </div>
    </Stack>
)

export const QuestionsList = () => {
    
   return ( <List>
       <ListToolbar />
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="question" />
            <TextField source="option1" />
            <TextField source="option2" />
            <TextField source="option3" />
            <TextField source="option4" />
            <TextField source="answer" />
            <TextField source="category" />
            <EditButton/>
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
        <Pagination />
    </List>
   )
}