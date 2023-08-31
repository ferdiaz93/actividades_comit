fetch("http://localhost:8000/users", {
    method: "POST"
    , headers: {
        "Content-Type": "application/json",
    }
    , body: JSON.stringify({
        name: "Juan",
        email: "",
        age: 20
    })
})