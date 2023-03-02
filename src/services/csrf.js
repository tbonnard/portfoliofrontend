import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'

const getCsrfToken = async () => {
    const response = await axios.post(`${baseUrl}get-csrf-token/`)
    document.cookie = `csrftoken=${response.data.csrfToken}; Path=/; samesite=Lax`
    return response.data
}


const exportedObject = { getCsrfToken }
export default exportedObject
