import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton,  
    Pagination,
    TextInput,
    Filter,
    SearchInput,
 } from "react-admin";
 
 


export const QuestionsList = (props) => {
    const postFilters = [
        <SearchInput source="q" alwaysOn />
    ];

   return ( <List {...props} filters={<postFilters />}>
       
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