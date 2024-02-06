import logo from "./assets/logo-nlw.svg";
import { NoteCard } from "./components/note-card";
import { NewNoteCard } from "./components/new-note-card";

const note = {
  date: new Date(),
  content: "Hello World",
};

const newNote = {
  title: "Adicionar nota",
  content:
    "Grave uma nota em áudio que será convertida para texto automaticamente.",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-[1px] bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard note={newNote} />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
