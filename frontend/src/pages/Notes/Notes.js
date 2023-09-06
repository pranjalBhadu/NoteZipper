import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Notes.css'
import NoteCard from '../../components/NoteCard/NoteCard'
import axios from 'axios'

const Notes = () => {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async() => {
        const {data} = await axios.get('/api/notes')
        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

  return (
    <div>
        <MainScreen title="Welcome back..">
            <Link to='createNote'>
                <Button className='button-new-note' size='lg'>Create New Note</Button>
            </Link>
            {
                notes.map(note => 
                    <NoteCard 
                    key={note._id}
                    id={note._id} 
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