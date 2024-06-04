const Task =(task) => {
    
    return (
        <div className="bg-blue-500 rounded-lg shadow-md p-4">
            <p className="font-bold text-slate-50">{task.task.name}</p>
            <p className="text-sm text-slate-50">Deadline: {task.task.deadline}</p>
            <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500"></div>
    </div>
    )
}

export default Task