export class LocalStorageService {
    static saveList(data: any, key: 'employees' | 'shifts') {
        localStorage.removeItem(key);

        localStorage.setItem(key, JSON.stringify(data));
    }

    static getList(key: 'employees' | 'shifts') {
        const result = localStorage.getItem(key);
        return result ? JSON.parse(result) : [];
    }
}