Blockly.Blocks['sensor_get_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get distance from sensor");
    this.setOutput(true, "Number");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_is_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("obstacle detected");
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_on_track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on track");
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_left_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("left is white");
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_right_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("right is white");
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_centre_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("centre is white");
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensor);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
