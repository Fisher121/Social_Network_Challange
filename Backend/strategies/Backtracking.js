class Backtracking{
    constructor(connection,DAO,initial_state,final_state){
        this.connection = connection
        this.results = []
        this.initial_state = initial_state
        this.final_state = final_state
        this.DAO = DAO
    }
    IsFinal(current_state){
        if(current_state == this.final_state){
            return true
        }
        else{
            return false
        }
    }

    async GenerateNeighbors(state){
        let result = await this.DAO.GetAllByPersonID(this.connection,state)
        if(result[0] == false)
            return []
        else{
            let neighbors  = []
            result[1].forEach(element=>{
                neighbors.push(element.idb)
            })
            return neighbors
        }
    }

    async Backtrack(state,state_list){
        if(this.IsFinal(state)){
            state_list.push(state)
            this.results.push(state_list)
            return true
        }
        if(!state_list.includes(state)){
            let candidates = await this.GenerateNeighbors(state)
            if(candidates.length !=0 && candidates != null)
                for(let i = 0; i<candidates.length;i++){
                    let temp_state_list = state_list.map((x)=>x)
                    temp_state_list.push(state)
                    await this.Backtrack(candidates[i],temp_state_list)
                }
        }
    }

    async run(){
        let visited = []
        await this.Backtrack(this.initial_state,visited)
        let min = Number.MAX_SAFE_INTEGER
        let result = []
        for(let i = 0; i<this.results.length;i++)
            if(this.results[i].length < min)
                min = this.results[i].length
        for(let i = 0; i<this.results.length;i++)
            if(this.results[i].length == min)
                result.push(this.results[i])
        return [true,result,null]
    }
}
module.exports = Backtracking