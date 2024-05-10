import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() { }

  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
