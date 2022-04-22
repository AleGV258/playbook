// GitHub: @AleGV258

const UserView = require('../../app/views/userView')

describe("Tests for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        // Se manda llamar el método createUser 
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        // Cómo un %LIKE%
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 6, id: "Otra Cosa"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "AleGv258"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Create a user by a given valid payload", () => {
        const payload = {username: "AleGV258", id: 1, name: "Michell"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("Michell")
        expect(result.username).toBe("AleGV258")
        expect(result.id).toBe(1)
    })
})

// npm test test/views/userView.test.js