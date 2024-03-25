const isAuthenticated = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/v1.0/usermanagement/auth/current_user', {
        method: 'GET',
        credentials: 'include',
	})
    let status = await response.ok;
    return status;
};

export default isAuthenticated