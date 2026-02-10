export function handleErrorResponse(e : any) {
    if (e.response) {
        console.log("status", e.response.data, e.response.status, e.response.headers)
        return e.status
    }
}