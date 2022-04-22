// GitHub: @AleGV258

const UserService = require('../../app/services/userService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        // Se manda llamar el método create de UserService
        const user = UserService.create(1, "AleGV258", "Michell")
        expect(user.username).toBe("AleGV258")
        expect(user.name).toBe("Michell")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "AleGV258", "Michell")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AleGV258")
        expect(userInfoInList[2]).toBe("Michell")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "AleGV258", "Michell")
        UserService.updateUserUsername(user, "MichellGV")
        expect(user.username).toBe("MichellGV")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "AleGV258_1", "Michell")
        const user2 = UserService.create(2, "AleGV258_2", "Alejandro")
        const user3 = UserService.create(3, "AleGV258_3", "MAGV")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("AleGV258_1")
        expect(usernames).toContain("AleGV258_2")
        expect(usernames).toContain("AleGV258_3")
    })
})

// npm test test/services/userService.test.js