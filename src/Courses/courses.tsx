import React, { useContext } from 'react'
import List from './List'
import { course } from './types'
import ThemeProvider, { themecontext } from '../ThemeContext'


const list : Array<course> = [
    {
        id: "a3dvgewr",
        name : "Intro to Programming in Python",
        institute : "MIT",
        season : "Fall 2023",
        number : 6.0001,
    },
    {
        id: "a3dvgewr",
        name : "Intro to Programming in Python",
        institute : "MIT",
        season : "Fall 2023",
        number : 6.0001,
    },
    {
        id: "a3dvgewr",
        name : "Intro to Programming in Python",
        institute : "MIT",
        season : "Fall 2023",
        number : 6.0001,
    }
]

function Courses() {
    const value = useContext(themecontext)
  return (
    <div className='mx-[15%] mt-4'>
        <div>{value}</div>
        <h1 className='text-4xl font-bold mb-2 text-blue-800'>Courses</h1>
        <hr />
        <List list={list}/>
    </div>
  )
}

export default Courses