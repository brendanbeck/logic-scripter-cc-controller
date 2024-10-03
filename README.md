# logic-scripter-cc-controller

### Overview
Many virutal instruments, namely Kontakt libraries such as Samplemodeling Strings, greatly rely on CC (control change) MIDI messages for parameter changes; some of these virtual instruments will not allow you to play them unless it receives specific CC messages. This is understandable, as virtual instruments that use some form of acoustic modeling need its parameters frequently modulated in order to sound realistic.

That being said, configuring MIDI controllers to send the correct CC MIDI messages that plugins are expecting can be tedious. Or... you might not even have any MIDI controller capable of sending MIDI messages to begin with! This script allows you to create labeled control sliders that output CC MIDI messages, which gets rid of all the fuss. 

In my specific use case, I have a synthesizer that I also use as a MIDI controller. As with many synthesizers, you cannot change what type of CC MIDI message it outputs. So, I just throw this Scripter preset in front of my Kontakt instances, and then use MIDI learn on the sliders. Problem solved! 

### Setup

#### Requirements
1. Logic Pro

#### Run Procedure
1. Copy the contents of `source.json`
2. Add the "Scripter" MIDI effect to an instrument channel
3. Select the "Scripter" MIDI effect; the effect window will appear
4. Select "Open Script in Editor"
5. Remove any pre-filled code in the editor, and then paste the contents of `source.json`
6. Select "Run Script"

#### Customization
Each parameter object in the `PluginParameters` array can be customized to have any label and output any type of CC message you want. Each `name` field conforms to the following: "CC `control change number` `label`". Changing the `control change number` will affect the control change number on the output MIDI messages from the effect. 

If you want to customize the plugin parameters further, I recommend reading Apple's documentation on the Scripter API: https://support.apple.com/guide/logicpro/getparameter-function-lgce71e8f5c8/mac
