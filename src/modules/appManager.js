const url = "http://localhost:8088";

export const getAllEntries = () => {
    return fetch(`${url}/entries`)
    .then(response => response.json())
}