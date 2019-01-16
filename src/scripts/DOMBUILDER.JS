import API from "../scripts/API"
let output3 = document.createElement("p")
const Dombuldier = {

    getData3() {

        API.getData()
            .then(Response => {
                console.log(Response)
                console.log(Response[0])
                for (let i = 0; i < Response.length; index++) {
                    const output2 = Response[i];
                    output3.innerHTML = [output2]
                }
            })
    }
}


export default Dombuldier
