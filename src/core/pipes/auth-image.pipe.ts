import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Pipe({
  name: 'secureImg'
})
export class SecurePipe implements PipeTransform {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  async transform(url: string) {
    const token = localStorage.getItem('tk');
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    const imageBlob = await lastValueFrom(this.http.get(url, {headers, responseType: 'blob'}));
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(this.sanitizer.bypassSecurityTrustUrl(reader.result as string));
      reader.readAsDataURL(imageBlob);
    })
  }
}
