import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/users';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  faTrash = faTrash;
  @Output() emitDeleteUser = new EventEmitter<number>();
  @Input() user: User = {} as User;

  deleteUser(id: number): void {
    if (confirm("Are you sure!")) {
      this.emitDeleteUser.emit(id);
    }
  }

}
