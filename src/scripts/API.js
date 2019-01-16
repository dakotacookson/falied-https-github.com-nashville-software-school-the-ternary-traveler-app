const API = {

    getData() {
        return fetch("http://localhost:8088/places")
        .then(function (response) {
        return response.json()
        .then(parsedresponse => parsedresponse)
        }
    )}
}
const API2 = {
    getData2() {
fetch("http://localhost:8088/places", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
  })
    }}
    export default API
