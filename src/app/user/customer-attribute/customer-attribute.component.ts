// customer-attribute.component.ts
import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';
import * as libraryBlocks from 'blockly/blocks';
import {javascriptGenerator} from 'blockly/javascript';
import * as En from 'blockly/msg/en';


@Component({
  selector: 'app-customer-attribute',
  templateUrl: './customer-attribute.component.html',
  styleUrls: ['./customer-attribute.component.scss']
})
export class CustomerAttributeComponent implements OnInit {

  toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      // Bloc Logique
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_ifelse"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "logic_operation"
      },
      //Bloc Boucles
      {
        "kind": "block",
        "type": "controls_repeat"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      },
      //Bloc Mathématiques
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
        "type": "math_random_int"
      },
      //Bloc Texte
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_join"
      },
      {
        "kind": "block",
        "type": "text_print"
      },
      // //Bloc Listes
      {
        "kind": "block",
        "type": "lists_create_with"
      },
      {
        "kind": "block",
        "type": "lists_getIndex"
      },
      {
        "kind": "block",
        "type": "lists_setIndex"
      },
      // //Bloc Variables
      // {
      //   "kind": "block",
      //   "type": "variables_get"
      // },
      // {
      //   "kind": "block",
      //   "type": "variables_set"
      // },
      // {
      //   "kind": "block",
      //   "type": "variables_declare"
      // },
      // //Bloc Événements
      // {
      //   "kind": "block",
      //   "type": "event_whenflagclicked"
      // },
      // {
      //   "kind": "block",
      //   "type": "event_broadcast"
      // },
      // {
      //   "kind": "block",
      //   "type": "event_broadcastandwait"
      // },
      // //Bloc Capteurs
      // {
      //   "kind": "block",
      //   "type": "sensor_touch_isPressed"
      // },
      // {
      //   "kind": "block",
      //   "type": "sensor_color_rgb"
      // },
    ]
  };

  constructor() {}

  createWorkspace() {
    // Inject Blockly workspace into the 'blocklyDiv' element
    Blockly.inject('blocklyDiv', { toolbox: this.toolbox });
  }

  ngOnInit(): void {
    this.createWorkspace();
  }
}


// toolbox = {
//   "kind": "flyoutToolbox",
//   "contents": [
//     // Bloc Logique
//     {
//       "kind": "block",
//       "type": "controls_if"
//     },
//     {
//       "kind": "block",
//       "type": "controls_ifelse"
//     },
//     {
//       "kind": "block",
//       "type": "logic_compare"
//     },
//     {
//       "kind": "block",
//       "type": "logic_operation"
//     },

//     //Bloc Boucles
//     {
//       "kind": "block",
//       "type": "controls_repeat"
//     },
//     {
//       "kind": "block",
//       "type": "controls_repeat_ext"
//     },
//     {
//       "kind": "block",
//       "type": "controls_whileUntil"
//     },

//     //Bloc Mathématiques
//     {
//       "kind": "block",
//       "type": "math_number"
//     },
//     {
//       "kind": "block",
//       "type": "math_arithmetic"
//     },
//     {
//       "kind": "block",
//       "type": "math_random_int"
//     },

//     //Bloc Texte
//     {
//       "kind": "block",
//       "type": "text"
//     },
//     {
//       "kind": "block",
//       "type": "text_join"
//     },
//     {
//       "kind": "block",
//       "type": "text_print"
//     },

//     //Bloc Listes
//     {
//       "kind": "block",
//       "type": "lists_create_with"
//     },
//     {
//       "kind": "block",
//       "type": "lists_getIndex"
//     },
//     {
//       "kind": "block",
//       "type": "lists_setIndex"
//     },

//     //Bloc Variables
//     {
//       "kind": "block",
//       "type": "variables_get"
//     },
//     {
//       "kind": "block",
//       "type": "variables_set"
//     },
//     {
//       "kind": "block",
//       "type": "variables_declare"
//     },

//     //Bloc Événements
//     {
//       "kind": "block",
//       "type": "event_whenflagclicked"
//     },
//     {
//       "kind": "block",
//       "type": "event_broadcast"
//     },
//     {
//       "kind": "block",
//       "type": "event_broadcastandwait"
//     },

//     //Bloc Capteurs
//     {
//       "kind": "block",
//       "type": "sensor_touch_isPressed"
//     },
//     {
//       "kind": "block",
//       "type": "sensor_color_rgb"
//     },
//   ]
// };
