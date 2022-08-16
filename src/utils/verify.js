export async function IsValidCredential(username, password) {
    const url = 'http://localhost:4000/alltasks';
    const data = {
        username: username,
        password: password
    };
    console.log(JSON.stringify(data));
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (res.status === 200) {
            return true;
        } else {
            return false
        }
    } catch (err) {
        console.log(err);
        return false
    }
}

// make post request to server to verify username and password
