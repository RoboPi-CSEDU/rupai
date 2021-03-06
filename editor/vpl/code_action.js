Blockly.Python['action_test'] = function(block) {
  
	var speed_left = Blockly.Python.valueToCode(block, 'speed_left', Blockly.Python.ORDER_ATOMIC) || '255';
  
	var speed_right = Blockly.Python.valueToCode(block, 'speed_right', Blockly.Python.ORDER_ATOMIC) || '255';
  
	var rot_left = Blockly.Python.valueToCode(block, 'rot_left', Blockly.Python.ORDER_ATOMIC) || '255';

	var rot_right = Blockly.Python.valueToCode(block, 'rot_right', Blockly.Python.ORDER_ATOMIC) || '255';
  
  
  var code = 'testMotor('+speed_left+','+speed_right+','+rot_left+','+rot_right+')\n';
  return code;
};

Blockly.Python['action_go'] = function(block) {
  var go_dropdown = block.getFieldValue('go_dropdown');
  var go_steps = Blockly.Python.valueToCode(block, 'go_steps', Blockly.Python.ORDER_ATOMIC) || '5';
  
  var code = 'go(\"'+go_dropdown+'\", '+go_steps+')\n';
  return code;
};

Blockly.Python['action_stop'] = function(block) {
  
  var code = 'stop()\n';
  return code;
};

Blockly.Python['action_turn'] = function(block) {
  var turn_dropdown = block.getFieldValue('turn_dropdown');
  
  var code = 'turn(\"'+turn_dropdown+'\")\n';
  return code;
};

Blockly.Python['action_go_simple'] = function(block) {
  var go_dropdown = block.getFieldValue('go_simple_dropdown');
  var go_steps= '5';
  
  var code = 'go(\"'+go_dropdown+'\", '+go_steps+')\n';
  return code;
};

Blockly.Python['action_say'] = function(block) {
  var say_text = Blockly.Python.valueToCode(block, 'say_text', Blockly.Python.ORDER_ATOMIC) || 'Hello World';
  
  var code = 'say(\"'+say_text+'\")\n';
  return code;
};



