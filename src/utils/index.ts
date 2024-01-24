import { HubDisplayable } from "../components/Card/Card";

const debounce = (callback, wait: number) => {
    let timeoutId: number;

    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

const sortAndOrder = (data: Array<HubDisplayable>, sort: string, order: string) => {
    return data.sort((a, b) => {
        return order === 'asc' ? a[sort].localeCompare(b[sort]) : b[sort].localeCompare(a[sort])
    })
}

export { debounce, sortAndOrder }