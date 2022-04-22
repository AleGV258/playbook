// GitHub: @AleGV258

const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('1) Create empty object', () => {
        const user = new User()
        expect(user.id).toBeUndefined()
        expect(user.username).toBeUndefined()
        expect(user.name).toBeUndefined()
        expect(user.bio).toBeUndefined()
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('2) Create an User object', () => {
        const user = new User(1, "AleGV258", "Michell", "Always Learning")
        expect(user.id).toBe(1)
        expect(user.username).toBe("AleGV258")
        expect(user.name).toBe("Michell")
        expect(user.bio).toBe("Always Learning")
    })

    test('3) Add getters', () => {
        const user = new User(1, "AleGV258", "Michell", "Always Learning")
        expect(user.getUsername).toBe("AleGV258")
        expect(user.getBio).toBe("Always Learning")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('4) Add setters', () => {
        const user = new User(1, "AleGV258", "Michell", "Always Learning")
        user.setUsername = "Alejandro"
        expect(user.username).toBe("Alejandro")
        user.setBio = "On Vacations"
        expect(user.bio).toBe("On Vacations")
    })
})

// npm test test/models/user.test.js