import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';

@Component({
  selector: 'app-customer-attribute',
  templateUrl: './customer-attribute.component.html',
  styleUrls: ['./customer-attribute.component.scss']
})
export class CustomerAttributeComponent implements OnInit {

  constructor() {}

   toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_print"
      },
    ]
  }

  createWorkspace() {
    Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
  }

  ngOnInit(): void {
    this.createWorkspace();
  }

}
