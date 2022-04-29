import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import {useState,useEffect} from 'react';
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes,setNotes] = useState(()=> {
    const saved = localStorage.getItem('react-notes-app-data');
    const savedNotes = JSON.parse(saved);
  
    return savedNotes || [{
      id: nanoid(),
      text: "This is my first note!",
      date: "16/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my Second note!",
      date: "16/04/2022"
  
    },{
      id: nanoid(),
      text: "This is my Second note!",
      date: "16/04/2022"
  
    }]
  });



 

  const [searchNotes, setSearchNotes] = useState("");



  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);
  

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }

    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNode = (id) => {
   const newNotes =  notes.filter((note) => note.id !== id)
   setNotes(newNotes);
  }
  const [isDark, setIsDark] = useState(false);




  return (
    <div className={isDark && "dark-mode"}>
    <div className= "container">
      <Header handleDarkMode={setIsDark}/>
      <Search handleSearchNote={setSearchNotes}/> 
      <NotesList notes = {notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchNotes))} handleAddNote={addNote} handleDeleteNote = {deleteNode}/>
    </div>
    </div>
  );

};

export default App;

