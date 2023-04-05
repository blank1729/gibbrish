import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const Todo = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState<Array<string> | null>(null)

    useEffect(()=>{
        let data = useLocalStorage("tasklist")
        console.log(data)
        if (data != null ) {
            setList(JSON.parse(data))
        }
    },[])


    useEffect(()=>{
        if (list == null) return
        useLocalStorage("tasklist", JSON.stringify(list))
    },[list])

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        setList(prevList => {
            if ( prevList != null) return [...prevList,task]
            return [task]
        })
        setTask("")
    }

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    return (
    <>
    <main>
        <form onSubmit={handleSubmit}>
            <input value={task} type="text" placeholder='I want to do ...' onChange={handleInput}/>
            <button>
                Add Task
            </button>
        </form>

        <div>
            {
                list?.map(task => <div key={task}>{task}</div> )
            }
        </div>
    </main>

    </>
  )
}

export default Todo