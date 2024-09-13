import React from 'react'
import MediaCard from './MediaCard'
import { projectsList } from '../../Contents'
import { Grid } from '@mui/material'

export const PastProjects = () => {
  const projects = projectsList
  return (
    <>
      <h2 style={{marginBottom: "-20px", marginTop: "5px"}}>What I've Worked On</h2>
      <Grid container mt={2}  spacing={2}>
        {projects.map((obj, index) => {
          return (
            <MediaCard key={index}  className = "projects" project={obj} />
          )})
        }
      </Grid>
    </>
  )
}