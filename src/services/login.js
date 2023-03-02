import axios from 'axios'

const baseUrl = 'http://tbonnard.pythonanywhere.com/api/'

const loginUser = async credentials => {
    const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.post(`${baseUrl}login/`, credentials, {headers: {
        'X-CSRFToken': csrftoken
      }})
    return response.data
}

const logoutUser = async ()  => {
    const response = await axios.post(`${baseUrl}logout/`)
    return response.data
}

const exportedObject = { loginUser, logoutUser }
export default exportedObject
