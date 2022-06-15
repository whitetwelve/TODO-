let todos = [
    {
        id: 1,
        title: "Cuci tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
    {
        id: 3,
        title: "Gunakan masker",
        idDone: true
    }
]


// Create controller get Todos here
exports.getTodos = async (req, res) =>{
    try {
        
        res.send ({
            status : 'Success',
            message : 'Data todos berhasil ditampilkan!',
            data : todos 
        })
    } catch (error) {
        console.log(error);
        res.send({
            status : 'failed',
            message : 'Data todos tidak berhasil ditampilkan !'
        })
    }
}

// Create controller get Todo by received id here
exports.getTodo = async (req,res) => {
    try {
        const id = req.params.id

        const data = todos.find((todo) => todo.id == id)

        if(!data){
            return res.send({
                status: 'failed',
                message: `Todo id: ${id} not found`
            })
        }        

        res.send({
            status: 'success',
            data: data
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Create controller add Todo here
exports.addTodo = async (req,res) => {
    try {
        const data = req.body

        todos.push(data)

        res.send({
            status: 'success',
            data: data
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Create controller update Todo here
exports.updateTodo = async (req,res) => {
    try {
        const id = req.params.id
        const data = req.body

        todos = todos.map((todo)=>{
            if(todo.id == id){
                return data
            }else{
                return todo
            }
        })

        res.send({
            status: 'success',
            data: data
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Create controller delete Todo here
exports.deleteTodo = async (req,res) => {
    try {
        const id = req.params.id

        todos = todos.filter((todo) => todo.id != id)

        res.send({
            status: 'success',
            message: `Delete todo with id: ${id} success`
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}