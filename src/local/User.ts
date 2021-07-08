
const User = {
    get id() {
        return localStorage.getItem("USER_ID") || ""
    },
    set id(newValue: string) {
        localStorage.setItem("USER_ID", newValue)
    },
    get randomName() {
        return (async (resolve, reject) => {
            const response = await fetch("https://randomuser.me/api")
            const user = await response.json()

            return user
        })()
    }
}

export default User