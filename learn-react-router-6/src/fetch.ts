export async function getVans(id?: string) {
    const url = id ? `http://localhost:8000/vans/${id}` : "http://localhost:8000/vans";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data
}

export async function getHostVans(id: string) {
    const url = id ? `http://localhost:8000/host/vans/${id}` : "http://localhost:8000/host/vans";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json();
    return data.vans;
}