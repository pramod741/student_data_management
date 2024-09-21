import React,{useEffect, useState } from 'react';
// import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import {Container, Button,Paper}from '@mui/material';
// import { Padding } from '@mui/icons-material';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
     
//     },
//   },
// }));

export default function Student() {
  
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const[name,setName]=useState('')
  const[address,setAddress]=useState('')
  const[students, setStudents]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
    <form>
      <TextField id="outlined-basic" label="Student name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student address" variant="outlined"
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />

      <Button variant="contained" color="secondary" onClick={handleClick}>
      Submit
      </Button>
    </form>
    </Paper>
    <h1>Students</h1>
    <paper elevation={3} style={paperStyle}>

    {students.map(student=>(
      <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
        Id:{student.id}<br/>
        Name:{student.name}<br/>
        Address:{student.address}

      </Paper>

    ))}

    </paper>

    </Container>

  );
}
