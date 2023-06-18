import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent {
  isHidden: boolean = true;
  public commands: any;
  constructor(
    public commandService: CommandService
  ) {
    
  }

  toggleClassModelAjoute(): void {
    this.isHidden = !this.isHidden;
  }
  loadProducts() {
    this.commandService.getCommands().subscribe(
      data => {
        this.commands= data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
