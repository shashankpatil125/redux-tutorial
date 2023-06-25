//reducer is used to change the state 
//into state there is stored the state information
//into action there is stores a type and payload 
    // into type there is instruction eg. addtask, removetask
    // into payload there is stored about the any kind of information to perform the operation ex: to delete task required thing is id of task
        //  and add the task then we need to task message and id 
//into return bolock we update the state and return it 

export type Task = {
        task:string,
        id:number,     
    }

type Action = {
    type:string
    paylod:{
        id?:number
        task:string
    }
}
const tasks:Task[] = [] 

let lastid = 0  
export default function reducer(state=tasks, action:Action){
    switch (action.type) {
        case 'addTask':
            return[
                ...state,
                {
                    type:action.paylod.task,
                    id:lastid++
                }
            ]
        case 'removeTask':
            return[
                state.filter(t=>action.paylod.id!==t.id)
            ]
        default:
            return state;
    } 
}


