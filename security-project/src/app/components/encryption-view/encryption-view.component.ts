import { Component, OnInit } from '@angular/core';
import { FeistelCypherService } from 'src/app/services/feistel-cypher.service';

@Component({
  selector: 'app-encryption-view',
  templateUrl: './encryption-view.component.html',
  styleUrls: ['./encryption-view.component.css']
})
export class EncryptionViewComponent implements OnInit {
  plain_message: string = "None";
  binary_message: string = "0000"
  plain_message_list: number[] = [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1];
  encrypted_message_list: number[];
  decrypted_message_list: number[];
  constructor(private cypherService: FeistelCypherService) {
    this.encrypted_message_list = cypherService.calculateCypher(this.plain_message_list);
    this.decrypted_message_list = cypherService.calculateCypher(this.encrypted_message_list);
   }

  ngOnInit(): void {
  }

}
