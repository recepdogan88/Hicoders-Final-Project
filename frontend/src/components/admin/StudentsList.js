import * as React from "react";
import { List, Datagrid, TextField, EditButton, FilterButton,
FilterForm, EmailField, CreateButton, TextInput, DeleteButton } from "react-admin";
    
    

import { Stack } from '@mui/material';

const postFilters = [
    <TextInput label="Search" source="name" alwaysOn />,
   
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div>
    </Stack>
)

export const StudentsList = () => (
    <List  >
        
        <Datagrid rowClick="edit" size="medium"sx={{
                '& .column-name': { backgroundColor: '#fee' },
            }} >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
        
    </List>
);