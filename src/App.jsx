import { useState } from "react";
import Background from "./components/background";
import Header from "./components/header";
import TaskModal from "./components/modal";
// import GetData from "./components/tasks";
import Column from "./components/columns";


export default function App() {
  const [isAddOpen, setIsAddOpen] = useState()
  return (
    
    <>
      <Background/>
      {/* <GetData/> */}
      <Column></Column>
      <Header onAdd={() => setIsAddOpen(true)} />
      <main className="pt-28 px-6 max-w-4xl mx-auto">
      </main>
      <TaskModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)} 
      />

    </>
  );
}