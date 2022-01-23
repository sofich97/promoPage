const getDataFunc = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Data was received in error!')
            }
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error.message)
        })
        .finally(() => {
            console.log('finally')
        })

}

getDataFunc()