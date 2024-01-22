// Truncate string to a given length and add '...' at the end if it's longer than the given length
export const truncateString: (str:string, len:number) => string =  function (
    str: string,
    len: number
): string {
    if (str.length > len) {
        return str.slice(0, len) + '...';
    } else {
        return str;
    }
}