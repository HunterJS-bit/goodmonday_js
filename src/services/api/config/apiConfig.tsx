export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: false,
    timeout: 3000,
    baseUrl: 'https://good-monday-js-test.vercel.app',
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-type": "application/json",
            Accept: "application/json"
        }
    }
}