import { Component, OnInit } from '@angular/core';
import { Mouse } from '../../dto/Mice';
import { HttpClient } from '@angular/common/http';
import { MouseDTO } from '../../dto/mouseDTO';
@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrl: './mouses.component.css',
})
export class MousesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMyszki();
  }
  mice: any[] = [];
  nowa: MouseDTO = { model: '', dpi: 0 };
  showForm: boolean = false;
  getMyszki(): void {
    this.http
      .get<any[]>('https://localhost:44340/api/Mouse')
      .subscribe((data) => {
        this.mice = data;
      });
  }
  deleteMouse(id: number): void {
    this.http
      .delete(`https://localhost:44340/api/Mouse/${id}`)
      .subscribe(() => {
        this.mice = this.mice.filter((mouse) => mouse.id !== id);
      });
  }
  onSubmit(): void {
    this.http
      .post<number>('https://localhost:44340/api/Mouse', this.nowa)
      .subscribe({
        next: (response: number) => {
          if (response != -2137) {
            this.getMyszki();
            this.toggle();
          }
        },
      });
  }
  toggle(): void {
    this.showForm = !this.showForm;
  }
}
