// Truncate string to a given length and add '...' at the end if it's longer than the given length
export const truncateString: (str:string, len:number) => string = function (
    str: string,
    len: number
): string {
    if (str.length > len) {
        return str.slice(0, len) + '...';
    } else {
        return str;
    }
}

// Get a value from cookie
export const getCookie: (name:string) => string = function (name: string):string {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let [cookieName, cookieValue] = cookies[i].split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
    }
    return '';
}

// Convert data URL to Blob
export const dataURLtoBlob = (dataurl) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new Blob([u8arr], { type: mime });
}