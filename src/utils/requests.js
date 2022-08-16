// make a post request and return json data from server
export async function postRequest(url, data) {
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
            return await res.json();
        } else {
            return {};
        }
    } catch (err) {
        console.log(err);
        return {};
    }
}