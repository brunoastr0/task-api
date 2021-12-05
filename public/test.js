
const show = async(req,res)=>{
  const {
    data: {
      tasks
    },
  } = await axios.get("/api/v1/tasks");

  console.log(tasks)
}


show()