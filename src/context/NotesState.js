import { useState } from "react";
import NotesContext from "./NotesContext";

const Notesstate = (props) => {

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    // Function to handle searching notes by title or content
    const searchNotes = (e) => {
      setSearchTerm(e.target.value);
  };
  
    return (
        <NotesContext.Provider value={{ notes,searchNotes, searchTerm , setSearchTerm , editingIndex ,setEditingIndex, setNotes, title, setTitle, content,setContent , category , setCategory }}>
          {props.children}
        </NotesContext.Provider>
    )
}
export default Notesstate;