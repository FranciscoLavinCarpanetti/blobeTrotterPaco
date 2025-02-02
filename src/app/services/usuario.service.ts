import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

type loginUser = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  httpClient = inject(HttpClient);
  private baseUrl = "https://reqres.in/api/login";

  login(loginUser: loginUser): Promise<any> {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl, loginUser));
  }
}
