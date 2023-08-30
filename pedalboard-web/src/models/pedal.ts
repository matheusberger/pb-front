import { type Knob } from "./knob";

export type Pedal = {
    name: string;
    brand: string;
    knobs: Knob[];
}