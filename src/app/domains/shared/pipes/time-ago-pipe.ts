import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '';
    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    
    if (seconds < 60) return 'Publicado hace un momento';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `Publicado hace ${minutes} minutos`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `Publicado hace ${hours} hora(s)`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `Publicado hace ${days} días`;

    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}
