import React from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Notes.css'
import NoteCard from '../../components/NoteCard/NoteCard'
import notes from '../../data/notes'

const Notes = () => {
  return (
    <div>
        <MainScreen title="Welcome back..">
            <Link to='createNote'>
                <Button className='button-new-note' size='lg'>Create New Note</Button>
            </Link>
            {
                notes.map(note => 
                    <NoteCard id={note._id} 
                    title={note.title} 
                    content={note.content}
                    createdOn={note.createdOn}
                    category={note.category}></NoteCard>
                )
            }
        </MainScreen>
    </div>
  )
}

export default Notes