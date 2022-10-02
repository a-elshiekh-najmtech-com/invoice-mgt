import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class DataService<T> {

    private baseUrl = environment.serverUrl;
    constructor(private httpClient: HttpClient, url: string) {
        this.baseUrl = this.baseUrl + url;
    }

    getAll() {
        return this.httpClient.get<T[]>(this.baseUrl)
    }

    get(id) {
        return this.httpClient.get<T>(this.baseUrl + "/" + id);
    }

    create(model: T) {
        return this.httpClient.post<T>(this.baseUrl, model);
    }

    update(id: number, model: T) {
        return this.httpClient.put<T>(this.baseUrl + "/" + id, model);
    }

    delete(id) {
        return this.httpClient.delete<T>(this.baseUrl + "/" + id);
    }

}