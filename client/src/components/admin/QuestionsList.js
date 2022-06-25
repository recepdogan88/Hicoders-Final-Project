import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput, } from "react-admin";
import { useContext } from 'react'
import { EnglishContext } from "../../context/EnglishContext";
import { useState } from "react";




export const QuestionsList = (props) => {
    const [filteredData,setFilteredData]=useState("")
    const { newdata } = useContext(EnglishContext)
    const postFilters = [
        <TextInput label="Filter by category" source="q" alwaysOn onChange={(e)=> setFilteredData(e.target.value)}/>,
    ];
    let questions=newdata
    console.log(questions)

    let filterData=questions.filter(question => question.category.includes(filteredData))
    console.log(filterData)

    return (
       
            <List {...props} filters={postFilters} className="mt-1">
                <Datagrid rowClick="edit" className="mt-2">
                    <TextField source="id" />
                    <TextField source="question" />
                    <TextField source="option1" />
                    <TextField source="option2" />
                    <TextField source="option3" />
                    <TextField source="option4" />
                    <TextField source="answer" />
                    <TextField source="category" />
                    <EditButton />
                    <DeleteButton mutationMode="pessimistic" />
                </Datagrid>
                <div className="d-flex justify-content-end">
                    <div className="number-question">Number of questions : {filterData.length}</div>
                </div>
            </List>
            )
} 
/*
<div className="d-flex justify-content-end">
                <div className="p-5 fw-bold">Number of questions : {newdata.length}</div>
            </div>
*/