import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useLocalStorage from '../Hooks/useLocalStorage';

interface Notes {
    note : String;
    date : Date;
}



const Note = () => {

    const noteTextAreaElement = useRef<HTMLTextAreaElement>(null);
    const [notes, setNotes] = useState<Notes[]>([]);
    let storedNotes = localStorage.getItem("notes")
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);



    useEffect(() => {
        
        
        if (typeof storedNotes == "string" ) {
            
            setNotes(JSON.parse(storedNotes));
        }
      }, []);

      useEffect(() => {

        localStorage.setItem('notes', JSON.stringify(notes))

      }, [notes])

    const saveToLocalStorage = () => {
        let newNote = notes
        if(noteTextAreaElement.current?.value) {

            newNote.push({
                note: noteTextAreaElement.current?.value,
                date: new Date
            })
            localStorage.setItem("notes", JSON.stringify(newNote))
            
        }
        forceUpdate()
        
    }

    const deleteFromStorage = (index :Number | String) => {
        
        let  newNotes = []

        
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (i != index) {
                newNotes.push(element)
            }
        
        }
        setNotes(newNotes)
        
        forceUpdate()

        
        
    }

    const NoteTemplate = () => {
        return <>
         {notes.map((note, index) => {
            return <div key={+index} className="flex my-3">
                <div className="inline-flex ">
                    <div className='mx-3'>{note.note}</div>
                    <button className='p-2 rounded-lg bg-red-500 text-white' onClick={() => deleteFromStorage(index)}>Delete</button>
                </div>
            </div>
        })}
        </>
    }


    return <section className='bg-white p-3 rounded-md h-screen'>
        
        <div className="">
            <div className="mb-6 mt-4">
            <label htmlFor="city_search" className="block mb-2 text-sm font-medium text-gray-900">Type Your Note</label>
            <textarea 
                id="city_search"
                name='city_search'
                ref={noteTextAreaElement}
                placeholder='Enter city...' 
                className="w-full p-3 
                rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

            <button className=" bg-purple-500 text-white p-3 rounded-lg mt-3" onClick={saveToLocalStorage} >Save</button>
            </div>

            
            <div>
                <NoteTemplate />
            </div>
        </div>
    </section>
}

export default Note