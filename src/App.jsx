import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import EmptySide from "./Components/EmptySide";
import MessageComponent from "./Components/MessageComponent";
import ShowNewNote from "./Components/ShowNewNote";

function App() {
  const [notesData, setNotesData] = useState([]);
  const [showNewNote, setShowNewNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(undefined);
  const [InputNotes, setInputNotes] = useState("");
  const [smallScreen, setSmallScreen] = useState(false);

  const addNotesData = () => {
    const selectedNote = notesData.filter((e) => e.name === currentNote.name);
    selectedNote[0].notes.push({ message: InputNotes, date: Date.now() });
    localStorage.setItem("notesData", JSON.stringify(notesData));
    setInputNotes("");
  };

  const createNewNoteData = (name, color) => {
    const noteExists = notesData.some((note) => note.name === name);

    if (noteExists) {
      alert("A note with this name already exists.");
      return;
    }

    setNotesData([
      ...notesData,
      { id: notesData.length, name, color, notes: [] },
    ]);
    setShowNewNote(false);
  };

  useEffect(() => {
    if (notesData.length) {
      localStorage.setItem("notesData", JSON.stringify(notesData));
    }
  }, [notesData]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notesData");
    if (storedNotes) {
      setNotesData(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check the initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen flex items-start justify-start">
      {smallScreen && !currentNote && (
        <div>
          <Sidebar
            notesData={notesData}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            createNewNote={() => setShowNewNote(true)}
          />
        </div>
      )}
      {!smallScreen && (
        <div>
          <Sidebar
            notesData={notesData}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            createNewNote={() => setShowNewNote(true)}
          />
        </div>
      )}
      {smallScreen && !currentNote ? null : (
        <div className="w-full h-full">
          {currentNote ? (
            <MessageComponent
              smallScreen={smallScreen}
              setCurrentNote={setCurrentNote}
              notesData={currentNote}
              InputNotes={InputNotes}
              setInputNotes={setInputNotes}
              addNotes={addNotesData}
            />
          ) : (
            <EmptySide />
          )}
        </div>
      )}
      {showNewNote && (
        <ShowNewNote
          setShowNewNote={setShowNewNote}
          createNewNoteData={createNewNoteData}
        />
      )}
    </div>
  );
}

export default App;
