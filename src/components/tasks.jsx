import { useEffect, useState } from "react"

export default function GetData() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        try{
            fetch('https://flowboard-api-virid.vercel.app/cards', {
                headers: {
                    'X-Workspace': 'public'
                }
            }).then(res => res.json()).then(data => setTasks(data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="z-10">
            <div>
                {tasks.map(task => 
                    <h1 className="font-extrabold text-xl text-amber-200" key={task.id}>{task.title}</h1>
                    
                )}
            </div>
        </div>
    )
}