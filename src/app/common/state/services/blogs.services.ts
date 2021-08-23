import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BlogsServices {
  constructor(private http: HttpClient) {
  }
}
