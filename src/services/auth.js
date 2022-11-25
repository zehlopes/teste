export const login = () => {
    //if(userName == "zehlopes" && password == senha@123)
    //via API seria assim. alem de passar email e senha nos parenteses acima
    // return await api.post("/login", {login: email, password: senha})
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: "uhasdadhjasd1.1lksdçsjndsnf123145lmnf",
                user: {
                    name: "José Ailton",
                    email: "jose@gmail.com"
                }
            })
        }, 1000)
    })
}