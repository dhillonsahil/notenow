
import React, {  useContext, useEffect } from 'react';
import NotesContext from '../context/NotesContext'
const NoteApp = () => {
  const notescont = useContext(NotesContext);
  const { notes, setNotes, category,  setCategory, title, searchTerm, editingIndex, setEditingIndex, setSearchTerm, setTitle, content, setContent } = notescont;

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to local storage whenever there is a change in the "notes" state
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Function to handle adding or updating a note
  const addOrUpdateNote = () => {
    if (title && content) {
      let updatedNotes;
      if (editingIndex !== null) { // Update existing note
        updatedNotes = [...notes];
        updatedNotes[editingIndex].title = title.trim();
        updatedNotes[editingIndex].content = content.trim();
        updatedNotes[editingIndex].category = category;
      } else { // Add new note
        const newNote = { title: title.trim(), content: content.trim(), category };
        updatedNotes = [...notes, newNote]
      }
      setTitle("");
      setContent("");
      setCategory("");
      setEditingIndex(null);
      setNotes(updatedNotes)
    }
  }

  // Function to handle deleting a note by its index
  const deleteNote = (index) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      let copyOfAllItems = [...notes]
      copyOfAllItems.splice(index, 1)
      setNotes(copyOfAllItems)

    }
  }


  return (
    <div>
      <h2 className='text-center m-2'>Add Note</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <div className="mb-2">
            <label htmlFor="title" className="form-label"><h4>Title</h4></label>
            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add title Here" />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label"><h4>Content</h4></label>
            <textarea className="form-control" id="content" rows="3" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label"><h4>Category</h4></label>
            <input type="text" className="form-control" id="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <button type="button" onClick={addOrUpdateNote} className="btn btn-primary">{editingIndex !== null ? 'Update Note' : 'Add Note'}</button>
        </div>
      </form>


      {/* List of filtered and mapped notes based on search term */}
      {notes.length > 0 ? (
        <>
          <div className='container d-flex flex-row'>
            {notes
              .filter((note) =>
                note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                note.content.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((note, index) => (
                <div className='' key={index}>
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{note.title}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary"> Category : {note.category.length !== 0 ? note.category : "uncategorized"}</h6>
                      <p className="card-text">{note.content}</p>
                      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success" onClick={() => {
                          setTitle(note.title);
                          setContent(note.content);
                          setCategory(note.category)
                          setEditingIndex(index)
                        }
                        }>Update</button>
                        <button type="button" onClick={() => deleteNote(index)} className="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>)
              )}
          </div>
        </>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NoteApp;