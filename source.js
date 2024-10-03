var PluginParameters = [
	{
	name: "CC 11 Dynamics",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 74
	},
	{
	name: "CC 1 Vibrato Intensity",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 0
	},
	{
	name: "CC 19 Vibrato Rate",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 35
	},
	{
	name: "CC 26 Attack Time",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 27 Release Time",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 110
	},
	{
	name: "CC 21 Bow Noise",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 22 Overtones",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 0
	},
	{
	name: "CC 38 Sustain",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 65
	},
	{
	name: "CC 25 Vel. to Dynamics",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 127
	},
	{
	name: "CC 23 Vibrato Delay",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 30
	},
	{
	name: "CC 24 Dynamics to Pitch",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 25
	},
	{
	name: "CC 28 Attack Detuning",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 0
	},
	{
	name: "CC 33 Attack Detuning",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 25
	},
	{
	name: "CC 100 Instr.",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 0
	},
	{
	name: "CC 5 Portamento Time",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 95 Ensemble Size",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 105
	},
	{
	name: "CC 99 Expr. Vibrato",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 0
	},
	{
	name: "CC 91 Group1 Gain",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 92 Group2 Gain",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 93 Group3 Gain",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	},
	{
	name: "CC 90 Harm. Form. Shift",
	type: "lin",
	minValue: 0,
	maxValue: 127,
	numberOfSteps: 126,
	defaultValue: 64
	}
]

var controlMappings = new Map();
for (var i = 0; i < PluginParameters.length; i++) {
	var ccNumber = PluginParameters[i].name.split(" ")[1]
	controlMappings.set(i, ccNumber)
}

function HandleMIDI(event) {
    if (event instanceof ControlChange) {
        return;
    }
    event.send();
    event.trace();
}

function sendChange(number, value) {
	var cc = new ControlChange;
	cc.number = number;
	cc.value = value;
	cc.send();
	cc.trace();
}

function ParameterChanged(param, value) {
	sendChange(controlMappings.get(param), value)
}
