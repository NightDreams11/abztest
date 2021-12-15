import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/"
})

export const usersAPI = {
    loadUsers(currentPage, usersCount) {
        return instance.get(`users?page=${currentPage}&count=${usersCount}`)
    },
    getUsersPosition() {
        return instance.get('positions')
    },
    token() {
        return instance.get('token')
    },
    newUser(token, name, email, phone, positionId, photo) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("position_id", positionId);
        formData.append("photo", photo[0]);

        return instance.post('users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Token': token.data.token
            }
        })
    }
}
